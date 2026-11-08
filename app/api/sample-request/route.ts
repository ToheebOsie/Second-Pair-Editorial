import {NextResponse} from 'next/server';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_SAMPLE_WORDS = 3000;
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ALLOWED_EXTENSIONS = new Set(['pdf', 'docx']);
const recent = new Map<string, number>();
const RATE_WINDOW = 10 * 60 * 1000;

function clean(value: FormDataEntryValue | null, max = 2000) {
  return String(value ?? '').trim().slice(0, max);
}

function extension(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[char] ?? char));
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    // Uploaded files are checked by shape, not `instanceof File`: Node 18 has no global File and would throw.
    const file = form.get('sample');
    const requestType = clean(form.get('requestType'), 20) || 'sample';
    if (requestType !== 'sample' && requestType !== 'full') return NextResponse.json({error: 'Please choose either a sample read or a full-manuscript review request.'}, {status: 400});
    const honeypot = clean(form.get('website'), 100);
    if (honeypot) return NextResponse.json({ok: true});

    const consent = clean(form.get('consent'), 20);
    if (consent !== 'yes') return NextResponse.json({error: 'Please confirm the manuscript-handling information before submitting.'}, {status: 400});

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const previous = recent.get(ip) || 0;
    if (now - previous < RATE_WINDOW) return NextResponse.json({error: 'Please wait a few minutes before submitting another sample request.'}, {status: 429});

    const name = clean(form.get('name'), 120);
    const email = clean(form.get('email'), 254);
    const bookTitle = clean(form.get('bookTitle'), 200);
    const genre = clean(form.get('genre'), 120);
    const wordCount = clean(form.get('wordCount'), 30);
    const declaredWordCount = Number(wordCount);
    const stage = clean(form.get('stage'), 120);
    const service = clean(form.get('service'), 120);
    const problem = clean(form.get('problem'), 3000);
    const evidence = clean(form.get('evidence'), 3000);
    const feedback = clean(form.get('feedback'), 3000);
    const revised = clean(form.get('revised'), 30);
    const decision = clean(form.get('decision'), 3000);
    const concern = clean(form.get('concern'), 200);
    const help = clean(form.get('help'), 3000);
    const startWindow = clean(form.get('startWindow'), 120);
    const source = clean(form.get('source'), 120);
    const landingPage = clean(form.get('landingPage'), 500);
    const lastPage = clean(form.get('lastPage'), 500);
    const referrer = clean(form.get('referrer'), 500);
    const utmSource = clean(form.get('utmSource'), 120);
    const utmMedium = clean(form.get('utmMedium'), 120);
    const utmCampaign = clean(form.get('utmCampaign'), 160);
    const utmContent = clean(form.get('utmContent'), 160);
    const utmTerm = clean(form.get('utmTerm'), 160);

    if (!name || !email || !bookTitle || !genre || !wordCount || !stage || !concern || !problem || !evidence || !decision) {
      return NextResponse.json({error: 'Please complete all required fields.'}, {status: 400});
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({error: 'Please enter a valid email address.'}, {status: 400});
    if (!Number.isInteger(declaredWordCount) || declaredWordCount < 1 || (requestType === 'sample' && declaredWordCount > MAX_SAMPLE_WORDS)) return NextResponse.json({error: requestType === 'sample' ? 'The sample-read option is limited to 3,000 words. Choose full-manuscript review to submit a longer manuscript.' : 'Please enter a valid total manuscript word count.'}, {status: 400});
    if (!file || typeof file === 'string' || file.size === 0) return NextResponse.json({error: requestType === 'sample' ? 'Please attach a DOCX or PDF sample.' : 'Please attach the full manuscript as a DOCX or PDF.'}, {status: 400});
    if (file.size > MAX_FILE_SIZE) return NextResponse.json({error: 'The upload exceeds the 10 MB limit. This form cannot accept larger files; contact us before sending a file so we can discuss whether an appropriate transfer method is available.'}, {status: 400});

    const ext = extension(file.name);
    if (!ALLOWED_EXTENSIONS.has(ext) || (!ALLOWED_TYPES.has(file.type) && file.type !== '' && file.type !== 'application/octet-stream')) return NextResponse.json({error: 'Only DOCX and PDF files are accepted.'}, {status: 400});

    const bytes = await file.arrayBuffer();
    const header = Buffer.from(bytes.slice(0, 8));
    const isPdf = ext === 'pdf' && header.subarray(0, 5).toString() === '%PDF-';
    const isDocx = ext === 'docx' && header[0] === 0x50 && header[1] === 0x4b;
    if (!isPdf && !isDocx) return NextResponse.json({error: 'The uploaded file does not appear to be a valid DOCX or PDF.'}, {status: 400});

    // Hosts often keep stray spaces, newlines or wrapping quotes from pasted values; a bad character in the
    // Authorization header makes fetch() throw, which surfaced as a generic 500.
    const env = (value?: string) => (value ?? '').trim().replace(/^["']|["']$/g, '').trim();
    const resendKey = env(process.env.RESEND_API_KEY);
    const adminEmail = env(process.env.ADMIN_EMAIL);
    const fromEmail = env(process.env.FROM_EMAIL);
    if (!resendKey || !adminEmail || !fromEmail) {
      console.error('Missing RESEND_API_KEY, ADMIN_EMAIL, or FROM_EMAIL.');
      return NextResponse.json({error: 'Email delivery is not configured yet. Please try again later.'}, {status: 503});
    }

    const base64 = Buffer.from(bytes).toString('base64');
    const safeFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 160);
    function routingHint(concern: string, service: string, problem: string) {
      if (service) return `Author-selected starting point: ${service}; verify against evidence.`;
      if (/revis|changed|new draft/i.test(problem) || /revis/i.test(concern)) return 'Likely starting point: Revision Review';
      if (/disagree|conflict|different feedback/i.test(problem) || /feedback/i.test(concern)) return 'Likely starting point: Feedback Reconciliation / Manuscript Diagnostic';
      if (/prose|voice|rhythm|sentence/i.test(problem) || /prose/i.test(concern)) return 'Likely starting point: Line Editing';
      if (/grammar|punctuation|typo|correct/i.test(problem) || /grammar/i.test(concern)) return 'Likely starting point: Copy Editing or Proofreading';
      if (/story|structure|character|pacing|slow|confus|care|world/i.test(problem)) return 'Likely starting point: Manuscript Diagnostic';
      return 'Needs review: author is not sure yet';
    }
    const text = [
      requestType === 'sample' ? 'New sample-read request' : 'New full-manuscript review request', '',
      `Request type: ${requestType === 'sample' ? 'Sample read (up to 3,000 words)' : 'Full manuscript review inquiry'}`,
      `Author: ${name}`, `Email: ${email}`, `Book: ${bookTitle}`, `Genre: ${genre}`,
      `Word count: ${wordCount}`, `Manuscript stage: ${stage}`, `Main concern: ${concern}`, `Service in mind: ${service || 'Not selected'}`, `Start window: ${startWindow || 'Not specified'}`, `Author-reported source: ${source || 'Not specified'}`, `Internal routing hint: ${routingHint(concern, service, problem)}`, '',
      'Acquisition context (session-only; attribution may be unavailable):',
      `First landing page: ${landingPage || '(Not captured)'}`,
      `Last page before enquiry: ${lastPage || '(Not captured)'}`,
      `Referrer: ${referrer || '(Direct / not captured)'}`,
      `UTM source: ${utmSource || '(None)'}`,
      `UTM medium: ${utmMedium || '(None)'}`,
      `UTM campaign: ${utmCampaign || '(None)'}`,
      `UTM content: ${utmContent || '(None)'}`,
      `UTM term: ${utmTerm || '(None)'}`, '',
      'What the author is worried is not working:', problem, '',
      'What makes the author think there is a problem:', evidence, '',
      'Previous reader/editor feedback:', feedback || '(Not provided)', '',
      `Already revised in response: ${revised || 'Not specified'}`, '',
      'What a useful answer would allow the author to decide:', decision, '',
      'What the author would most like help with:', help || '(Not provided)', '',
      'Consent: confirmed', 'The manuscript sample is attached to this email.'
    ].join('\n');

    let adminResponse: Response;
    try {
      adminResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        from: fromEmail, to: [adminEmail], reply_to: email,
        subject: `${requestType === 'sample' ? 'Sample Read Request' : 'Full Manuscript Review Request'} — ${bookTitle}`, text,
        attachments: [{filename: safeFilename, content: base64}],
      }),
      });
    } catch (error) {
      console.error('Resend request could not be made (check RESEND_API_KEY for stray characters and that the host can reach api.resend.com):', error);
      return NextResponse.json({error: 'The sample could not be delivered. Please try again.'}, {status: 502});
    }
    if (!adminResponse.ok) {
      const details = await adminResponse.text();
      console.error('Resend delivery failed:', adminResponse.status, details);
      return NextResponse.json({error: 'The sample could not be delivered. Please try again.'}, {status: 502});
    }

    const publicSite = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    try {
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        from: fromEmail, to: [email],
        subject: `${requestType === 'sample' ? 'We received your sample-read request' : 'We received your full-manuscript review request'} — Second Pair Editorial`,
        text: requestType === 'sample' ? `Hi ${name},\n\nThanks for contacting Second Pair Editorial. We’ve received your sample-read request for “${bookTitle}”.\n\nWe’ll review the information and sample, then reply by email about what stood out and the most useful next step. The sample read is a bounded demonstration, not a full-manuscript diagnosis.\n\nOur services: ${publicSite}/services\n\nBest,\nSecond Pair Editorial` : `Hi ${name},\n\nThanks for contacting Second Pair Editorial about a full-manuscript review of “${bookTitle}”. We’ve received your request and manuscript.\n\nWe’ll review the project information and reply by email to discuss fit, scope, and suitable next steps. This request does not commit you to paid work.\n\nOur services: ${publicSite}/services\n\nBest,\nSecond Pair Editorial`,
        html: requestType === 'sample' ? `<p>Hi ${escapeHtml(name)},</p><p>Thanks for contacting Second Pair Editorial. We’ve received your sample-read request for <strong>“${escapeHtml(bookTitle)}”</strong>.</p><p>We’ll review the information and sample, then reply by email about what stood out and the most useful next step. The sample read is a bounded demonstration, not a full-manuscript diagnosis.</p><p><a href="${escapeHtml(publicSite)}/services">Explore our editorial approach</a></p><p>Second Pair Editorial</p>` : `<p>Hi ${escapeHtml(name)},</p><p>Thanks for contacting Second Pair Editorial about a full-manuscript review of <strong>“${escapeHtml(bookTitle)}”</strong>. We’ve received your request and manuscript.</p><p>We’ll review the project information and reply by email to discuss fit, scope, and suitable next steps. This request does not commit you to paid work.</p><p><a href="${escapeHtml(publicSite)}/services">Explore our editorial approach</a></p><p>Second Pair Editorial</p>`,
      }),
    });
    if (!confirmationResponse.ok) console.error('Author confirmation email failed:', confirmationResponse.status, await confirmationResponse.text());
    } catch (error) {
      console.error('Author confirmation email failed:', error);
    }

    recent.set(ip, now);
    return NextResponse.json({ok: true});
  } catch (error) {
    console.error('Sample request error:', error);
    return NextResponse.json({error: 'Something went wrong while sending your request.'}, {status: 500});
  }
}
