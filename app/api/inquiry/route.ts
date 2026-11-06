import {NextResponse} from 'next/server';

export const runtime = 'nodejs';

const recent = new Map<string, number>();
const RATE_WINDOW = 10 * 60 * 1000;

function clean(value: FormDataEntryValue | null, max = 2000) {
  return String(value ?? '').trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[char] ?? char));
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    if (clean(form.get('website'), 100)) return NextResponse.json({ok: true});

    const name = clean(form.get('name'), 120);
    const email = clean(form.get('email'), 254);
    const genre = clean(form.get('genre'), 120);
    const wordCount = clean(form.get('wordCount'), 60);
    const startWindow = clean(form.get('startWindow'), 120);
    const source = clean(form.get('source'), 120);
    const question = clean(form.get('question'), 3000);
    const feedback = clean(form.get('feedback'), 3000);

    if (!name || !email || !genre || !question) return NextResponse.json({error: 'Please complete the required fields.'}, {status: 400});
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({error: 'Please enter a valid email address.'}, {status: 400});

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const previous = recent.get(ip) || 0;
    if (now - previous < RATE_WINDOW) return NextResponse.json({error: 'Please wait a few minutes before sending another enquiry.'}, {status: 429});

    const env = (value?: string) => (value ?? '').trim().replace(/^["']|["']$/g, '').trim();
    const resendKey = env(process.env.RESEND_API_KEY);
    const adminEmail = env(process.env.ADMIN_EMAIL);
    const fromEmail = env(process.env.FROM_EMAIL);
    if (!resendKey || !adminEmail || !fromEmail) {
      console.error('Missing RESEND_API_KEY, ADMIN_EMAIL, or FROM_EMAIL.');
      return NextResponse.json({error: 'Email delivery is not configured yet. Please try again later.'}, {status: 503});
    }

    const text = [
      'New author enquiry', '',
      `Author: ${name}`,
      `Email: ${email}`,
      `Genre or form: ${genre}`,
      `Approximate word count: ${wordCount || 'Not provided'}`,
      `Start window: ${startWindow || 'Not specified'}`,
      `Author-reported source: ${source || 'Not specified'}`, '',
      'What feels uncertain:', question, '',
      'Previous reader/editor feedback:', feedback || '(Not provided)', '',
      'Workflow: acknowledge enquiry → assess question → invite sample if useful → recommend scope and quote.',
      'No manuscript was uploaded at this stage.'
    ].join('\n');

    let adminResponse: Response;
    try {
      adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          from: fromEmail,
          to: [adminEmail],
          reply_to: email,
          subject: `New author enquiry — ${name}`,
          text,
        }),
      });
    } catch (error) {
      console.error('Enquiry delivery failed:', error);
      return NextResponse.json({error: 'The enquiry could not be delivered. Please try again.'}, {status: 502});
    }
    if (!adminResponse.ok) {
      console.error('Enquiry delivery failed:', adminResponse.status, await adminResponse.text());
      return NextResponse.json({error: 'The enquiry could not be delivered. Please try again.'}, {status: 502});
    }

    const publicSite = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    try {
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          subject: 'We received your enquiry — Second Pair Editorial',
          text: `Hi ${name},\n\nThanks for contacting Second Pair Editorial. We have received your enquiry.\n\nOur next steps are to acknowledge and assess the question you described. If sample pages would help, we will invite you to send them before discussing a suitable scope and quote. No manuscript was uploaded with this enquiry.\n\nLearn more about our approach: ${publicSite}/how-we-read\n\nBest,\nSecond Pair Editorial`,
          html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for contacting Second Pair Editorial. We have received your enquiry.</p><p>Our next steps are to acknowledge and assess the question you described. If sample pages would help, we will invite you to send them before discussing a suitable scope and quote. No manuscript was uploaded with this enquiry.</p><p><a href="${escapeHtml(publicSite)}/how-we-read">Learn more about our approach</a></p><p>Second Pair Editorial</p>`,
        }),
      });
      if (!confirmationResponse.ok) console.error('Enquiry confirmation failed:', confirmationResponse.status, await confirmationResponse.text());
    } catch (error) {
      console.error('Enquiry confirmation failed:', error);
    }

    recent.set(ip, now);
    return NextResponse.json({ok: true});
  } catch (error) {
    console.error('Enquiry error:', error);
    return NextResponse.json({error: 'Something went wrong while sending your enquiry.'}, {status: 500});
  }
}
