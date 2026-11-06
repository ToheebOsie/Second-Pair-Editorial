'use client';

import Image from 'next/image';

import {FormEvent, useEffect, useState} from 'react';
import {services} from '../config/services';

export function RequestSampleForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const [requestType, setRequestType] = useState<'sample' | 'full'>('sample');
  const [visitContext, setVisitContext] = useState({
    landingPage: '',
    lastPage: '',
    referrer: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmContent: '',
    utmTerm: '',
  });

  useEffect(() => {
    try {
      const read = (key: string) => window.sessionStorage.getItem(`spe_${key}`) || '';
      setVisitContext({
        landingPage: read('first_landing'),
        lastPage: read('last_page') || window.location.pathname,
        referrer: read('referrer'),
        utmSource: read('utm_source'),
        utmMedium: read('utm_medium'),
        utmCampaign: read('utm_campaign'),
        utmContent: read('utm_content'),
        utmTerm: read('utm_term'),
      });
    } catch {
      // Attribution is optional; the form remains usable when browser storage is unavailable.
    }
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set('requestType', requestType);
    try {
      const response = await fetch('/api/sample-request', {method: 'POST', body: data});
      const result: {error?: string} = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(result.error || 'We could not send the request. Please try again.');
        setStatus('error');
        return;
      }
      form.reset();
      setStatus('sent');
    } catch {
      setError('We could not send the request. Check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') return <div className="success">
    <div className="success-logo-wrap"><Image width={435} height={280} className="success-logo" src="/brand/second-pair-dark.png" alt="Second Pair Editorial" /></div>
    <span className="eyebrow">REQUEST RECEIVED</span>
    <h2>{requestType === 'sample' ? 'Thanks — we received your sample request.' : 'Thanks — we received your full-manuscript enquiry.'}</h2>
    <p>Second Pair Editorial will review the information you sent and respond by email. We will consider the question, project scope and whether our approach is a suitable fit. This submission is an enquiry, not confirmation that paid work has been accepted or scheduled.</p>
    <button className="button" onClick={() => { setRequestType('sample'); setStatus('idle'); }}>Send another request</button>
  </div>;

  return <form onSubmit={submit}>
    <fieldset className="request-type-choice">
      <legend>What would you like to send?</legend>
      <label><input type="radio" name="requestTypeChoice" value="sample" checked={requestType === 'sample'} onChange={() => setRequestType('sample')} /> <span><strong>Request a sample read</strong><small>Send up to 3,000 words to see how we approach a specific reader or manuscript question.</small></span></label>
      <label><input type="radio" name="requestTypeChoice" value="full" checked={requestType === 'full'} onChange={() => setRequestType('full')} /> <span><strong>Submit a full manuscript for review</strong><small>Send the complete manuscript so we can consider your project and discuss suitable review options. This is an inquiry, not a commitment to begin paid work.</small></span></label>
    </fieldset>
    <input type="hidden" name="landingPage" value={visitContext.landingPage} />
    <input type="hidden" name="lastPage" value={visitContext.lastPage} />
    <input type="hidden" name="referrer" value={visitContext.referrer} />
    <input type="hidden" name="utmSource" value={visitContext.utmSource} />
    <input type="hidden" name="utmMedium" value={visitContext.utmMedium} />
    <input type="hidden" name="utmCampaign" value={visitContext.utmCampaign} />
    <input type="hidden" name="utmContent" value={visitContext.utmContent} />
    <input type="hidden" name="utmTerm" value={visitContext.utmTerm} />
    <div className="form-grid">
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      <label>Book title<input required name="bookTitle" /></label>
      <label>Genre<input required name="genre" /></label>
      <label>{requestType === 'sample' ? 'Sample word count' : 'Full manuscript word count'}<input required type="number" min="1" max={requestType === 'sample' ? 3000 : undefined} name="wordCount" /><small>{requestType === 'sample' ? 'Up to 3,000 words. Please send a representative passage rather than the full manuscript.' : 'Enter the approximate total word count of the complete manuscript.'}</small></label>
      <label>Manuscript stage<select required name="stage" defaultValue=""><option value="">Select one</option><option>Early draft / WIP</option><option>Substantially revised</option><option>Complete / final draft</option><option>Publication-ready</option><option>Not sure</option></select></label>
      <label>What are you most uncertain about?<select required name="concern" defaultValue=""><option value="">Select one</option><option>How the story lands with a reader</option><option>Something feels wrong and I cannot find the cause</option><option>Help planning or making a revision</option><option>I revised it and want to know if the changes worked</option><option>Help with the prose</option><option>Grammar, consistency or final corrections</option><option>I am not sure yet</option></select></label>
      <label>Service you have in mind (optional)<select name="service" defaultValue=""><option value="">I am not sure yet</option>{services.map(s => <option key={s.slug}>{s.name}</option>)}</select></label>
      <label>When are you hoping to start?<select name="startWindow" defaultValue=""><option value="">No fixed date</option><option>As soon as possible</option><option>Within the next month</option><option>In 1–3 months</option><option>Later this year</option></select></label>
      <label>How did you find us?<select name="source" defaultValue=""><option value="">Prefer not to say</option><option>Facebook</option><option>Instagram</option><option>TikTok</option><option>LinkedIn</option><option>Substack / newsletter</option><option>Reddit</option><option>Goodreads</option><option>Discord</option><option>AI assistant / AI search</option><option>Referral</option><option>Search</option><option>Other</option></select></label>
      <label>What are you worried is not working?<textarea required name="problem" rows={5} /></label>
      <label>What makes you think there is a problem?<textarea required name="evidence" rows={5} /></label>
      <label>What have readers, critique partners or editors already said?<textarea name="feedback" rows={5} /></label>
      <label>Have you already revised in response to this? <select name="revised" defaultValue="No"><option>No</option><option>Yes</option><option>Not sure</option></select></label>
      <label>What would a useful answer allow you to decide?<textarea required name="decision" rows={5} /></label>
      <label>What would you most like help with?<textarea name="help" rows={5} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
    <label className="upload">{requestType === 'sample' ? 'Upload your representative sample (DOCX or PDF)' : 'Upload your complete manuscript (DOCX or PDF)'}<input required name="sample" type="file" accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" /><small>{requestType === 'sample' ? 'Choose a passage that shows the concern clearly. Maximum upload size: 10 MB.' : 'Upload the complete manuscript. There is no 3,000-word limit for this option; the file-size limit is 10 MB. Files larger than 10 MB cannot be submitted through this form; contact us before sending a file so we can discuss whether an appropriate transfer method is available.'}</small></label>
    <label className="consent"><input required type="checkbox" name="consent" value="yes" /> <span>I understand that my manuscript and contact details will be used to respond to this request and assess the project fit. When the work is complete, Second Pair will confirm completion and deletion with me, then delete the manuscript from the editorial inbox and any working files. No backup copies are kept. If the manuscript needs to be downloaded locally to complete the work, I will be informed. Its contents will not be used for another purpose without my permission and approval. Editors carry out and review editorial work; Second Pair does not use AI to edit manuscripts. <a href="/privacy">See our privacy and manuscript-handling information.</a></span></label>
    {status === 'error' && <p className="form-error" role="alert">{error}</p>}
    <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : requestType === 'sample' ? 'Request a Sample Read' : 'Submit Full Manuscript for Review'}</button>
    <p className="fine-print">Please submit one request per manuscript or project. Your manuscript is sent directly to the editorial inbox and is not placed in a public folder. When the work is complete, we confirm completion and deletion with the author, then delete the manuscript and any working files. No backup copies are kept. If the manuscript needs to be downloaded locally to complete the work, we inform the author. We do not use, reproduce, publish or repurpose its contents for another purpose without the owner’s permission and approval. Editors carry out and review editorial work; we do not use AI to edit manuscripts. This is not a blanket claim about every third-party service that may process submitted data. A sample read is a bounded demonstration; a full-manuscript request lets us consider the project and discuss scope and next steps.</p>
  </form>;
}
