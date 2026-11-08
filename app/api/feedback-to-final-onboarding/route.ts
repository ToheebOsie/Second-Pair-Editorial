import {NextResponse} from 'next/server';
import {onboardingConfig} from '../../../config/onboarding';
import {tokensMatch} from '../../../config/token';

export const runtime = 'nodejs';

const recent = new Map<string, number>();
const RATE_WINDOW = 10 * 60 * 1000;
const MAX_FIELD_LENGTH = 6000;
const MAX_FILES = 4;

function env(value?: string) {
  return (value ?? '').trim().replace(/^["']|["']$/g, '').trim();
}

function clean(value: unknown, max = MAX_FIELD_LENGTH) {
  return String(value ?? '').trim().slice(0, max);
}

function extension(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;'}[char] ?? char));
}

function label(key: string) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
}

function summarize(payload: Record<string, unknown>) {
  const sections = [
    ['PROJECT', ['name', 'email', 'bookTitle', 'genre', 'wordCount', 'stage', 'series', 'reader']],
    ['INTENDED EFFECT', ['desiredEffect', 'promise', 'remember', 'protective', 'openToChange']],
    ['CURRENT UNCERTAINTY', ['trigger', 'concern', 'decision', 'disappointment']],
    ['READER AND CRITIQUE EVIDENCE', ['betaStatus', 'critiqueStatus', 'critiqueFeedback', 'readerCount', 'readerTypes', 'previousQuestions', 'difficultFeedback', 'revised', 'revisionAim']],
    ['MANUSCRIPT CONTEXT', ['materialFocus', 'specialConsiderations', 'seriesContext', 'evidencePriorities', 'excludedQuestions', 'readerBoundaries']],
    ['EDITING EXPECTATIONS', ['readerAvailability', 'betaTiming', 'deadline', 'lineGoals', 'copyGoals', 'voiceChoices', 'voiceRespect', 'communication']],
    ['ADDITIONAL INFORMATION', ['additional']],
  ] as const;
  return sections.map(([heading, keys]) => [heading, keys.map((key) => `${label(key)}: ${clean(payload[key]) || '(Not provided)'}`).join('\n')].join('\n')).join('\n\n');
}

// Some browsers and operating systems report an empty or generic type for .docx/.pdf files; the extension and
// the file signature (checked separately) still have to match, so these are safe to accept.
function mimeLooksRight(type: string) {
  return !type || type === 'application/octet-stream' || (onboardingConfig.allowedMimeTypes as readonly string[]).includes(type);
}

function fileIsValid(file: File) {
  const ext = extension(file.name);
  if (!onboardingConfig.allowedExtensions.includes(ext as 'docx' | 'pdf') || !mimeLooksRight(file.type)) return false;
  return file.size > 0 && file.size <= onboardingConfig.maxFileSizeBytes;
}

async function validSignature(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = extension(file.name);
  if (ext === 'pdf') return bytes.subarray(0, 5).toString() === '%PDF-';
  return bytes[0] === 0x50 && bytes[1] === 0x4b;
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const token = clean(form.get('token'), 500);
    const configuredToken = env(process.env.ONBOARDING_ACCESS_TOKEN);
    if (!tokensMatch(token, configuredToken)) return NextResponse.json({error: 'This onboarding link is invalid or has expired.'}, {status: 403});

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const previous = recent.get(ip) || 0;
    if (now - previous < RATE_WINDOW) return NextResponse.json({error: 'Please wait a few minutes before submitting the onboarding intake again.'}, {status: 429});

    let payload: Record<string, unknown>;
    try { payload = JSON.parse(clean(form.get('payload'), 50000)); } catch { return NextResponse.json({error: 'The onboarding response could not be read. Please try again.'}, {status: 400}); }

    const required = ['name', 'email', 'bookTitle', 'genre', 'wordCount', 'stage', 'reader', 'desiredEffect', 'promise', 'remember', 'openToChange', 'trigger', 'concern', 'decision', 'betaStatus', 'revised', 'materialFocus', 'specialConsiderations', 'evidencePriorities', 'readerBoundaries', 'readerAvailability', 'betaTiming', 'lineGoals', 'copyGoals', 'voiceChoices', 'communication'];
    if (required.some((key) => !clean(payload[key]))) return NextResponse.json({error: 'Please complete the required onboarding fields before submitting.'}, {status: 400});
    const email = clean(payload.email, 254);
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({error: 'Please enter a valid email address.'}, {status: 400});

    const files = Array.from(form.entries()).filter(([key, value]) => ['manuscript', 'feedback', 'previousVersion', 'supporting'].includes(key) && typeof value !== 'string').map(([key, value]) => ({key, file: value as File}));
    if (files.length < 1 || files.length > MAX_FILES) return NextResponse.json({error: 'Please upload the current manuscript before submitting.'}, {status: 400});
    const totalBytes = files.reduce((sum, item) => sum + item.file.size, 0);
    if (totalBytes > onboardingConfig.maxTotalUploadBytes) return NextResponse.json({error: 'The combined upload size is too large. Please keep the total below 25 MB.'}, {status: 400});
    for (const item of files) {
      if (!fileIsValid(item.file) || !(await validSignature(item.file))) return NextResponse.json({error: 'Only valid DOCX and PDF files are accepted.'}, {status: 400});
    }

    const resendKey = env(process.env.RESEND_API_KEY);
    const adminEmail = env(process.env.ADMIN_EMAIL);
    const fromEmail = env(process.env.FROM_EMAIL);
    if (!resendKey || !adminEmail || !fromEmail) return NextResponse.json({error: 'Email delivery is not configured yet. Please try again later.'}, {status: 503});

    const attachments = await Promise.all(files.map(async ({key, file}) => ({filename: `${key}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 140)}`, content: Buffer.from(await file.arrayBuffer()).toString('base64')})));
    const project = clean(payload.bookTitle, 200);
    const author = clean(payload.name, 120);
    const text = [
      'New Feedback-to-Final Manuscript onboarding intake', '',
      `Author: ${author}`,
      `Email: ${email}`,
      `Book: ${project}`,
      `Package: ${onboardingConfig.packageName}`,
      `Submitted: ${new Date().toISOString()}`,
      `Files: ${files.map(({key, file}) => `${key}=${file.name}`).join(', ')}`, '',
      summarize(payload), '',
      'INTERNAL WORKFLOW',
      "Next action: Read the manuscript and intake answers. Record what the author wants the book to do, what they are unsure about and what needs to be preserved. Prepare separate questions for beta readers, critique partners and the author’s own editing; note the passages and issues behind the most important questions.",
      'The author has acknowledged manuscript handling and the staged readiness decision.',
    ].join('\n');

    let adminResponse: Response;
    try {
    adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({from: fromEmail, to: [adminEmail], reply_to: email, subject: `Feedback-to-Final Onboarding — ${project} — ${author}`, text, attachments}),
    });
    } catch (error) {
      console.error('Onboarding delivery could not be made:', error);
      return NextResponse.json({error: 'The onboarding intake could not be delivered. Please try again.'}, {status: 502});
    }
    if (!adminResponse.ok) { console.error('Onboarding delivery failed:', adminResponse.status, await adminResponse.text()); return NextResponse.json({error: 'The onboarding intake could not be delivered. Please try again.'}, {status: 502}); }

    const publicSite = env(process.env.NEXT_PUBLIC_SITE_URL) || 'http://localhost:3000';
    try {
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: `We received your editorial question intake — ${project}`,
        text: `Hi ${author},\n\nWe have received your Feedback-to-Final Manuscript onboarding intake for “${project}”.\n\nWe will read your manuscript and your answers before preparing three separate guides: questions for beta readers, questions for critique partners and questions to help you edit your own work. If something important is unclear, we will contact you.\n\nWe will also consider whether the manuscript is ready for line or copy editing, or whether larger story changes should come first.\n\nSecond Pair Editorial\n${publicSite}`,
        html: `<p>Hi ${escapeHtml(author)},</p><p>We have received your Feedback-to-Final Manuscript onboarding intake for <strong>“${escapeHtml(project)}”</strong>.</p><p>We will read your manuscript and your answers before preparing three separate guides: questions for beta readers, questions for critique partners and questions to help you edit your own work. If something important is unclear, we will contact you.</p><p>We will also consider whether the manuscript is ready for line or copy editing, or whether larger story changes should come first.</p><p>Second Pair Editorial</p>`,
      }),
    });
    if (!confirmationResponse.ok) console.error('Onboarding confirmation failed:', confirmationResponse.status, await confirmationResponse.text());
    } catch (error) {
      console.error('Onboarding confirmation failed:', error);
    }

    recent.set(ip, now);
    return NextResponse.json({ok: true});
  } catch (error) {
    console.error('Feedback-to-final onboarding error:', error);
    return NextResponse.json({error: 'Something went wrong while sending the onboarding intake.'}, {status: 500});
  }
}
