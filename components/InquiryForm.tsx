'use client';

import {FormEvent, useState} from 'react';

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    try {
      const response = await fetch('/api/inquiry', {method: 'POST', body: new FormData(form)});
      const result: {error?: string} = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(result.error || 'We could not send your enquiry. Please try again.');
        setStatus('error');
        return;
      }
      form.reset();
      setStatus('sent');
    } catch {
      setError('We could not send your enquiry. Check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') return <div className="success">
    <span className="eyebrow">ENQUIRY RECEIVED</span>
    <h2>Thanks — we received your enquiry.</h2>
    <p>We will acknowledge your message, assess the question and reply by email. If sample pages would help, we will invite you to send them before discussing a suitable scope and quote.</p>
  </div>;

  return <form onSubmit={submit}>
    <span className="eyebrow">START WITH A CONVERSATION</span>
    <h2>Tell us what feels uncertain.</h2>
    <p>There is no need to upload your manuscript yet. We will first acknowledge your enquiry, assess the question, and let you know whether sample pages would be useful.</p>
    <div className="form-grid">
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      <label>Genre or form<input required name="genre" placeholder="For example: literary fiction" /></label>
      <label>Approximate word count<input name="wordCount" inputMode="numeric" placeholder="For example: 85,000" /></label>
      <label>When are you hoping to start?<select name="startWindow" defaultValue=""><option value="">No fixed date</option><option>As soon as possible</option><option>Within the next month</option><option>In 1–3 months</option><option>Later this year</option></select></label>
      <label>How did you find us?<select name="source" defaultValue=""><option value="">Prefer not to say</option><option>Search</option><option>Referral</option><option>Substack / newsletter</option><option>Reddit</option><option>Goodreads</option><option>Discord</option><option>LinkedIn</option><option>Other</option></select></label>
      <label>What feels uncertain in the manuscript?<textarea required name="question" rows={5} /></label>
      <label>What have readers, critique partners or editors already said? <small>Optional</small><textarea name="feedback" rows={5} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    {status === 'error' && <p className="form-error" role="alert">{error}</p>}
    <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Start the Conversation'}</button>
    <p className="fine-print">We will use your details to respond to this enquiry. No manuscript upload is required at this stage. <a href="/privacy">See our privacy information.</a></p>
  </form>;
}
