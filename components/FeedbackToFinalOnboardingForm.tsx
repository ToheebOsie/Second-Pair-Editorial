'use client';

import Image from 'next/image';
import {FormEvent, useMemo, useState} from 'react';
import {onboardingConfig, onboardingSteps} from '../config/onboarding';

type FormValues = Record<string, string>;

const initialValues: FormValues = {
  name: '', email: '', bookTitle: '', genre: '', wordCount: '', stage: '', series: '',
  reader: '', desiredEffect: '', promise: '', remember: '', protective: '', openToChange: '',
  trigger: '', concern: '', decision: '', disappointment: '', betaStatus: '', critiqueStatus: '', critiqueFeedback: '', readerCount: '',
  readerTypes: '', previousQuestions: '', difficultFeedback: '', revised: '', revisionAim: '',
  materialFocus: '', specialConsiderations: '', seriesContext: '', evidencePriorities: '',
  excludedQuestions: '', readerBoundaries: '', readerAvailability: '', betaTiming: '', deadline: '',
  lineGoals: '', copyGoals: '', voiceChoices: '', voiceRespect: '', communication: '', additional: '',
};

const selectOptions = {
  stage: ['Complete first draft', 'Revised draft', 'Complete manuscript sent to beta readers', 'Complete manuscript with beta feedback received', 'Manuscript revised after beta feedback', 'Previously line edited or copy edited', 'Preparing for publication or submission', 'Other'],
  series: ['No', 'Yes, standalone within a series', 'Yes, part of an ongoing series', 'Yes, a later volume'],
  betaStatus: ['No, I am preparing to approach beta readers', 'Yes, a small number have read it', 'Yes, several readers have completed it', 'Some readers stopped before finishing', 'I have feedback on selected chapters only', 'I have feedback from a professional or paid reader', 'I have feedback from an editor', 'Other'],
  critiqueStatus: ['No, I have not worked with critique partners yet', 'Yes, I have received critique on the complete manuscript', 'Yes, I have received critique on selected chapters or scenes', 'I have a writing group or critique circle', 'I have feedback from a writing coach or mentor', 'Other'],
  revised: ['No changes yet', 'Minor changes only', 'I revised several scenes', 'I substantially restructured the manuscript', 'I rewrote the opening', 'I changed the ending', 'I am no longer sure which version is strongest'],
  readerAvailability: ['Yes, and they are ready to begin', 'Yes, but I need to confirm availability', 'I have some possible readers', 'No, I need to find readers', 'I am not sure what kind of reader I need'],
  betaTiming: ['No fixed deadline', 'Within two weeks', 'Within one month', 'Within two to three months', 'I have a publication or submission deadline', 'Other'],
  communication: ['Brief comments with the relevant change', 'Explanations of recurring patterns', 'A summary report at the end', 'Examples before applying a wider change', 'Questions where author intent is uncertain', 'A short call at a milestone', 'Email-only communication'],
};

function Field({label, name, values, setValues, required = false, children, hint}: {label: string; name: string; values: FormValues; setValues: (values: FormValues) => void; required?: boolean; children?: React.ReactNode; hint?: string}) {
  return <label className="onboarding-field">{label}{children || <input required={required} name={name} value={values[name] || ''} onChange={(event) => setValues({...values, [name]: event.target.value})} />}{hint && <small>{hint}</small>}</label>;
}

function SelectField({label, name, values, setValues, options, required = false}: {label: string; name: string; values: FormValues; setValues: (values: FormValues) => void; options: string[]; required?: boolean}) {
  return <Field label={label} name={name} values={values} setValues={setValues} required={required}><select required={required} name={name} value={values[name] || ''} onChange={(event) => setValues({...values, [name]: event.target.value})}><option value="">Select one</option>{options.map((option) => <option key={option}>{option}</option>)}</select></Field>;
}

function TextAreaField({label, name, values, setValues, required = false, hint}: {label: string; name: string; values: FormValues; setValues: (values: FormValues) => void; required?: boolean; hint?: string}) {
  return <Field label={label} name={name} values={values} setValues={setValues} required={required} hint={hint}><textarea required={required} name={name} rows={4} value={values[name] || ''} onChange={(event) => setValues({...values, [name]: event.target.value})} /></Field>;
}

export function FeedbackToFinalOnboardingForm({token}: {token: string}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [files, setFiles] = useState<Record<string, File | null>>({manuscript: null, feedback: null, previousVersion: null, supporting: null});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const current = onboardingSteps[step];
  const hasFeedback = useMemo(() => /Yes|Some readers/.test(values.betaStatus || ''), [values.betaStatus]);
  const hasRevision = useMemo(() => !['', 'No changes yet'].includes(values.revised || ''), [values.revised]);
  const hasDeadline = useMemo(() => values.betaTiming === 'I have a publication or submission deadline', [values.betaTiming]);

  function updateFile(name: string, fileList: FileList | null) {
    setFiles({...files, [name]: fileList?.[0] || null});
  }

  function validateStep() {
    const form = document.getElementById('feedback-to-final-onboarding-form') as HTMLFormElement | null;
    const fields = form?.querySelectorAll(`[data-onboarding-step="${current.id}"] input, [data-onboarding-step="${current.id}"] select, [data-onboarding-step="${current.id}"] textarea`);
    for (const field of Array.from(fields || [])) {
      if (!(field as HTMLInputElement).checkValidity()) {
        (field as HTMLInputElement).reportValidity();
        return false;
      }
    }
    if (current.id === 'project' && !files.manuscript) {
      setError('Please upload the current manuscript before moving on.');
      return false;
    }
    setError('');
    return true;
  }

  function next() {
    if (validateStep()) setStep(Math.min(step + 1, onboardingSteps.length - 1));
  }

  function back() {
    setError('');
    setStep(Math.max(step - 1, 0));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep()) return;
    setStatus('sending');
    setError('');
    const payload = new FormData();
    payload.append('token', token);
    payload.append('payload', JSON.stringify(values));
    Object.entries(files).forEach(([name, file]) => { if (file) payload.append(name, file); });
    try {
      const response = await fetch('/api/feedback-to-final-onboarding', {method: 'POST', body: payload});
      const result: {error?: string} = await response.json().catch(() => ({}));
      if (!response.ok) { setError(result.error || 'We could not submit the onboarding intake. Please try again.'); setStatus('error'); return; }
      setStatus('sent');
    } catch { setError('We could not submit the onboarding intake. Check your connection and try again.'); setStatus('error'); }
  }

  if (status === 'sent') return <div className="success onboarding-success"><div className="success-logo-wrap"><Image width={435} height={280} className="success-logo" src="/brand/second-pair-dark.png" alt="Second Pair Editorial" /></div><span className="eyebrow">QUESTION GUIDE INTAKE RECEIVED</span><h2>Thank you — we have what we need to begin.</h2><p>We will read your manuscript and your answers before writing the three question guides. If something important is unclear, we will get in touch.</p></div>;

  return <form id="feedback-to-final-onboarding-form" className="onboarding-form" onSubmit={submit}>
    <div className="onboarding-progress" aria-label="Onboarding progress">{onboardingSteps.map((item, index) => <button type="button" key={item.id} className={index === step ? 'active' : index < step ? 'complete' : ''} onClick={() => index < step && setStep(index)} aria-current={index === step ? 'step' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.label}</b></button>)}</div>

    {current.id === 'project' && <section data-onboarding-step="project" className="onboarding-step"><span className="eyebrow">01 · PROJECT</span><h2>Tell us what we are working with.</h2><p className="section-lead">Tell us about the book, who you hope will read it and how far along it is. These details help us read it in the right context.</p><div className="form-grid"><Field label="Your name" name="name" values={values} setValues={setValues} required /><Field label="Preferred email address" name="email" values={values} setValues={setValues} required><input required type="email" name="email" value={values.email} autoComplete="email" onChange={(event) => setValues({...values, email: event.target.value})} /></Field><Field label="Working manuscript title" name="bookTitle" values={values} setValues={setValues} required /><Field label="Genre and format" name="genre" values={values} setValues={setValues} required /><Field label="Approximate word count" name="wordCount" values={values} setValues={setValues} required hint="An approximate count is fine." /><SelectField label="Current manuscript stage" name="stage" values={values} setValues={setValues} options={selectOptions.stage} required /><SelectField label="Is this part of a series?" name="series" values={values} setValues={setValues} options={selectOptions.series} required /><Field label="Who do you imagine reading this manuscript?" name="reader" values={values} setValues={setValues} required><textarea required name="reader" rows={4} value={values.reader} onChange={(event) => setValues({...values, reader: event.target.value})} /></Field></div><label className="upload">Current manuscript (DOCX or PDF)<input type="file" accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => updateFile('manuscript', event.target.files)} />{files.manuscript && <small className="upload-selected">Selected: {files.manuscript.name}</small>}<small>Send the version that reflects the question you want answered. Maximum 10 MB.</small></label></section>}

    {current.id === 'effect' && <section data-onboarding-step="effect" className="onboarding-step"><span className="eyebrow">02 · INTENDED EFFECT</span><h2>What do you want readers to come away with?</h2><p className="section-lead">Tell us what readers should be able to follow, feel or look forward to. You do not need to put it in editorial language.</p><div className="form-grid"><TextAreaField label="When the manuscript is working, what should the reader understand, feel, anticipate or care about?" name="desiredEffect" values={values} setValues={setValues} required /><TextAreaField label="What is the manuscript’s central promise?" name="promise" values={values} setValues={setValues} required hint="What does the opening, premise, title or genre lead the reader to expect?" /><TextAreaField label="What do you most want readers to remember?" name="remember" values={values} setValues={setValues} required /><TextAreaField label="Which parts of the book would you be reluctant to change?" name="protective" values={values} setValues={setValues} hint="Voice, structure, ambiguity, a relationship, the ending or a formal choice, for example." /><TextAreaField label="What would you be open to changing if there is a good reason?" name="openToChange" values={values} setValues={setValues} required /></div></section>}

    {current.id === 'uncertainty' && <section data-onboarding-step="uncertainty" className="onboarding-step"><span className="eyebrow">03 · CURRENT UNCERTAINTY</span><h2>What decision brought you here?</h2><p className="section-lead">You do not need someone to tell you the book is good or bad. Tell us what you are trying to decide.</p><div className="form-grid"><TextAreaField label="What made you seek help now?" name="trigger" values={values} setValues={setValues} required hint="For example: beta feedback, a revision problem, an agent response or uncertainty about publication." /><TextAreaField label="What do you currently think may not be working?" name="concern" values={values} setValues={setValues} required /><TextAreaField label="What would you like to be able to decide after this?" name="decision" values={values} setValues={setValues} required /><TextAreaField label="Is there an answer you are worried we might give?" name="disappointment" values={values} setValues={setValues} /></div></section>}

    {current.id === 'evidence' && <section data-onboarding-step="evidence" className="onboarding-step"><span className="eyebrow">04 · READER AND CRITIQUE EVIDENCE</span><h2>What have readers and critique partners already told you?</h2><p className="section-lead">Tell us what readers and critique partners have said, including comments you agree with, comments that do not make sense to you and advice that points in opposite directions. If nobody has read it yet, let us know.</p><div className="form-grid"><SelectField label="Have beta readers already read the manuscript?" name="betaStatus" values={values} setValues={setValues} options={selectOptions.betaStatus} required /><SelectField label="Have critique partners or writing peers reviewed any part of it?" name="critiqueStatus" values={values} setValues={setValues} options={selectOptions.critiqueStatus} /><TextAreaField label="What have your critique partners or writing peers said that you are still trying to understand?" name="critiqueFeedback" values={values} setValues={setValues} hint="Optional. For example, a scene feels slow, a character feels flat, or the dialogue sounds too similar across characters." /><Field label="Approximately how many readers responded?" name="readerCount" values={values} setValues={setValues} required={hasFeedback} /><TextAreaField label="What kinds of readers were they?" name="readerTypes" values={values} setValues={setValues} required={hasFeedback} /><TextAreaField label="What instructions or questions did you give them?" name="previousQuestions" values={values} setValues={setValues} hint="You may also upload them below." /><TextAreaField label="Which feedback has been most difficult to interpret?" name="difficultFeedback" values={values} setValues={setValues} required={hasFeedback} /><SelectField label="Have you already made changes in response to the feedback?" name="revised" values={values} setValues={setValues} options={selectOptions.revised} required /><TextAreaField label="If you revised, what did you intend the revision to change?" name="revisionAim" values={values} setValues={setValues} required={hasRevision} /></div><div className="form-grid onboarding-upload-grid"><label className="upload">Previous reader/editor feedback<input type="file" accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => updateFile('feedback', event.target.files)} />{files.feedback && <small className="upload-selected">Selected: {files.feedback.name}</small>}<small>Optional. Upload one document containing the feedback if available.</small></label><label className="upload">Before version, if you want revision comparison<input type="file" accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => updateFile('previousVersion', event.target.files)} />{files.previousVersion && <small className="upload-selected">Selected: {files.previousVersion.name}</small>}<small>Optional. Only needed if you want us to compare versions.</small></label></div></section>}

    {current.id === 'context' && <section data-onboarding-step="context" className="onboarding-step"><span className="eyebrow">05 · MANUSCRIPT CONTEXT</span><h2>Where should we look closely?</h2><p className="section-lead">Point us towards scenes, chapters or transitions that are worrying you. We will not make claims about the whole book from a small sample, and we will be clear when something needs to be checked against the full manuscript.</p><div className="form-grid"><TextAreaField label="Which chapters, scenes, characters or transitions should we pay particular attention to?" name="materialFocus" values={values} setValues={setValues} required /><TextAreaField label="Are there continuity, sensitivity or specialist considerations?" name="specialConsiderations" values={values} setValues={setValues} required hint="This does not automatically include specialist fact-checking, sensitivity reading or legal review." /><TextAreaField label="If this is a series, what prior information may the intended reader know?" name="seriesContext" values={values} setValues={setValues} required={values.series !== 'No'} /><TextAreaField label="What would you most like your readers and critique partners to comment on?" name="evidencePriorities" values={values} setValues={setValues} required hint="Examples: opening continuation, character investment, pacing, world-building clarity, emotional payoff or ending expectations." /><TextAreaField label="Are there questions or topics you do not want your readers or critique partners asked to address?" name="excludedQuestions" values={values} setValues={setValues} /><TextAreaField label="What boundaries should your beta readers and critique partners respect?" name="readerBoundaries" values={values} setValues={setValues} required /></div></section>}

    {current.id === 'editing' && <section data-onboarding-step="editing" className="onboarding-step"><span className="eyebrow">06 · EDITING EXPECTATIONS</span><h2>What would you like help with after this?</h2><p className="section-lead">We will consider whether the story is ready for line or copy editing, or whether larger changes would be better to make first. Your answers help us understand what you want from that next stage.</p><div className="form-grid"><SelectField label="Do you already have beta readers available?" name="readerAvailability" values={values} setValues={setValues} options={selectOptions.readerAvailability} required /><SelectField label="What timing are you considering for the beta read?" name="betaTiming" values={values} setValues={setValues} options={selectOptions.betaTiming} required /><TextAreaField label="What are you hoping the line edit will improve?" name="lineGoals" values={values} setValues={setValues} required /><TextAreaField label="What are you hoping the copy edit will check?" name="copyGoals" values={values} setValues={setValues} required /><TextAreaField label="Are there voice or style choices you want preserved?" name="voiceChoices" values={values} setValues={setValues} required /><TextAreaField label="What would tell you that the edit still sounds like you?" name="voiceRespect" values={values} setValues={setValues} /><TextAreaField label="What kind of editorial communication do you prefer?" name="communication" values={values} setValues={setValues} required />{hasDeadline && <TextAreaField label="What deadline or consequence matters?" name="deadline" values={values} setValues={setValues} required />}</div></section>}

    {current.id === 'consent' && <section data-onboarding-step="consent" className="onboarding-step"><span className="eyebrow">07 · CONSENT AND SUBMISSION</span><h2>Before you send everything through.</h2><p className="section-lead">Check the acknowledgements and tell us anything else that could affect how we read the manuscript or prepare the questions.</p><TextAreaField label="Anything else you want us to know?" name="additional" values={values} setValues={setValues} /><label className="upload">Additional supporting document (optional)<input type="file" accept=".docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => updateFile('supporting', event.target.files)} />{files.supporting && <small className="upload-selected">Selected: {files.supporting.name}</small>}<small>Maximum 10 MB per file. Do not upload material outside the agreed project scope.</small></label><label className="consent"><input required type="checkbox" name="manuscriptConsent" value="yes" /> <span>I understand that my manuscript and responses will be used only for the agreed editorial work. Second Pair’s current policy states that manuscripts are not used, reproduced, published or repurposed for another purpose without my permission and approval. <a href="/privacy">See the privacy and manuscript-handling information.</a></span></label><label className="consent"><input required type="checkbox" name="stagedConsent" value="yes" /> <span>I understand that this stage includes a check of whether the manuscript is ready for line or copy editing. If larger story or structural changes are still needed, we may recommend dealing with those first.</span></label>{error && <p className="form-error" role="alert">{error}</p>}</section>}

    <div className="onboarding-actions">{step > 0 && <button className="button onboarding-secondary" type="button" onClick={back}>Back</button>}{step < onboardingSteps.length - 1 ? <button className="button" type="button" onClick={next}>Continue →</button> : <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting…' : 'Submit My Editorial Question Intake'}</button>}</div>
    {error && step !== onboardingSteps.length - 1 && <p className="form-error" role="alert">{error}</p>}
    <p className="fine-print">This form is for an accepted Feedback-to-Final Manuscript project after the starting payment has been confirmed. It does not guarantee that line or copy editing will begin. That recommendation depends on what we find in the manuscript and, where available, in the reader feedback.</p>
  </form>;
}
