import type {Metadata} from 'next';
import Link from 'next/link';
import {withSeo} from '../../../config/seo';
import {site} from '../../../config/site';

export const metadata: Metadata = withSeo({
  title: 'Feedback to Final Manuscript',
  description: 'Use guided beta feedback to resolve the manuscript questions that matter most, then move into professional line and copy editing when the larger decisions are stable.',
  alternates: {canonical: `${site.website}/start/feedback-to-final-manuscript`},
}, '/start/feedback-to-final-manuscript');

const calibrationQuestions = [
  'Opening and continuation pressure',
  'Character goals and reader investment',
  'Pacing and scene movement',
  'Information, world-building and confusion',
  'Stakes, escalation and consequence',
  'Relationships and emotional effect',
  'Dialogue and voice at the reader-experience level',
  'Ending expectations and payoff',
];

const benefits = [
  'Avoid paying for line editing before major story decisions are stable.',
  'Distinguish recurring reader evidence from isolated preference.',
  'Turn vague beta feedback into a usable revision direction.',
  'Identify whether the remaining problem is structural, sentence-level or correctness-related.',
  'Reduce the risk of paying for a full developmental edit when guided feedback may be sufficient.',
  'Enter line and copy editing with a clearer manuscript and a clearer brief.',
];

const readinessRoutes = [
  {
    label: 'ROUTE A · READY',
    title: 'Ready for line and copy editing',
    text: 'The major structure, character arcs, pacing, stakes and information flow are stable. The remaining work is primarily sentence-level clarity, rhythm, correctness and consistency.',
  },
  {
    label: 'ROUTE B · REVISE',
    title: 'Revision required first',
    text: 'The feedback reveals issues the author can address through a defined revision plan. Line and copy editing pauses until that revision is complete.',
  },
  {
    label: 'ROUTE C · ESCALATE',
    title: 'Developmental escalation required',
    text: 'The manuscript needs a deeper diagnostic or developmental scope before sentence-level polishing can be responsible.',
  },
];

const faqs = [
  ['Does this package replace developmental editing?', 'Not automatically. It is designed to resolve as much of the lighter developmental decision-making as the available reader evidence can support. Some manuscripts can move from calibration and revision into line and copy editing; others reveal a need for deeper structural work. The readiness decision is part of the process.'],
  ['What if my beta readers have already given me feedback?', 'That is still workable. We can examine the feedback you have, identify what is recurring or ambiguous, clarify what the responses can support and determine what questions remain unanswered. If the feedback is substantially conflicting, a Feedback Reconciliation route may be more appropriate.'],
  ['Do I have to use your beta readers?', 'No. The calibration is about improving the questions and interpretation process. You may use suitable readers from your own network or community. The quality of the process depends on fit, clarity and evidence—not simply on the number of readers.'],
  ['How many beta readers do I need?', 'There is no universal number. The useful number depends on genre, manuscript stage, reader fit, the question being tested and whether responses begin to show a meaningful pattern. More readers do not automatically create better evidence.'],
  ['What happens if readers disagree?', 'We do not settle disagreement by counting votes. We compare what each reader experienced, what expectation produced the reaction, whether the response recurs and what the relevant passages support.'],
  ['What if my manuscript is not ready for line and copy editing?', 'The process includes a readiness decision before that stage. If deeper revision or developmental work is still needed, line and copy editing pauses. We explain what the evidence supports and recommend the smallest useful next step.'],
  ['Will you rewrite my manuscript?', 'Not by default. Line and copy editing may include suggestions or changes within the agreed scope, but the package does not automatically include ghostwriting, author substitution or extensive structural rewriting.'],
  ['Can you guarantee that I will save money?', 'No ethical editor can guarantee a particular cost outcome before reviewing the manuscript and feedback. The package is designed to reduce unnecessary cost by helping you determine whether a separate full developmental edit is justified before you pay for one.'],
];

export default function FeedbackToFinalManuscript(){
  return <main>
    <section className="page-hero package-hero">
      <div className="container narrow">
        <span className="eyebrow">A STAGED EDITORIAL PATHWAY</span>
        <h1>Reduce the cost of editing by asking better beta-reader questions.</h1>
        <p>Use guided beta feedback to resolve the manuscript questions that matter most, then move into professional line and copy editing when the larger decisions are stable.</p>
        <p>You may not need a separate full developmental edit. This process helps you find out—before you pay for one—whether your manuscript’s remaining developmental needs can be addressed through focused reader evidence and author-led revision.</p>
        <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See how we read →</Link></div>
        <div className="proof"><span><b>Founder-led</b> · human editorial work · clear scope</span><span>One accountable practice from intake to delivery.</span></div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">THE PROBLEM</span>
        <h2>Beta feedback is only useful when it answers the right questions.</h2>
        <p className="section-lead">Many authors receive feedback that sounds helpful but is difficult to use: “I liked it.” “The pacing was slow.” “I wanted more emotion.” “The ending confused me.”</p>
        <div className="package-two-column">
          <div><p>These reactions may be important. But they do not automatically tell you what caused the reaction, whether it is shared by other readers, what you should revise first, or whether your manuscript needs developmental work, line editing, copy editing or simply another careful read.</p><p>Without a clear feedback process, authors can spend money polishing a manuscript that still needs structural revision—or pay for a large developmental edit when guided reader evidence and focused revision might have been enough.</p></div>
          <div className="detail-box package-callout"><span className="eyebrow">THE DECISION WE HELP WITH</span><h3>What does my manuscript actually need next?</h3><p>The answer should come from the manuscript question, the available evidence and the stage of the draft—not from a pressure to buy the largest service.</p></div>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="eyebrow">THE PROMISE</span>
        <h2>Find out what your manuscript needs before you pay for the wrong edit.</h2>
        <p className="section-lead">The Feedback-to-Final Manuscript Package combines three connected stages. The aim is not to force every manuscript through the same editorial sequence. The aim is to identify the smallest useful next step.</p>
        <div className="package-stage-grid">
          <article><span className="package-stage-number">01</span><span className="eyebrow">CALIBRATE</span><h3>Ask better questions.</h3><p>Receive a tailored beta-reader question set connected to your manuscript’s promises, readers and uncertainties.</p></article>
          <article><span className="package-stage-number">02</span><span className="eyebrow">INTERPRET</span><h3>Make sense of the evidence.</h3><p>Separate recurring reader effects from preference, then turn feedback into a focused revision direction.</p></article>
          <article><span className="package-stage-number">03</span><span className="eyebrow">POLISH</span><h3>Edit when ready.</h3><p>Move into professional line and copy editing once the larger decisions are stable.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">01 · CALIBRATE</span>
        <h2>Ask questions that produce usable evidence.</h2>
        <p className="section-lead">Before you send your manuscript to beta readers, we help you identify what you actually need to learn from them.</p>
        <div className="package-two-column">
          <div><p>The questions are designed to reveal what readers experienced, understood, expected, felt or missed—not to ask them for vague ratings or make them act as substitute editors.</p><p><strong>You receive:</strong> a tailored beta-reader question set, guidance for using it consistently, and a clear explanation of what each question can and cannot establish.</p></div>
          <ul className="feature-list">{calibrationQuestions.map((item)=><li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="eyebrow">02 · INTERPRET</span>
        <h2>Turn reader reactions into revision decisions.</h2>
        <p className="section-lead">After your beta readers respond, we help you examine what their feedback actually shows.</p>
        <div className="method-grid package-method-grid">
          <div><b>RECURRING EVIDENCE</b><p>What several readers experienced or noticed independently.</p></div>
          <div><b>INDIVIDUAL PREFERENCE</b><p>What may reflect taste, expectation or genre preference.</p></div>
          <div><b>LIKELY CAUSE</b><p>What the affected passages and patterns support.</p></div>
          <div><b>REVISION PRIORITY</b><p>What deserves attention first and what can wait.</p></div>
        </div>
        <p><strong>You receive:</strong> feedback-pattern analysis, revision priorities, an ordered next-step plan and clarification of any ambiguity in the responses.</p>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">03 · POLISH</span>
        <h2>Refine the manuscript when the larger decisions are stable.</h2>
        <div className="package-two-column">
          <div className="detail-box"><span className="eyebrow">LINE EDITING</span><h3>Clarity, rhythm and flow.</h3><p>Improve clarity, rhythm, flow, emphasis, repetition, awkward phrasing and scene-level readability while protecting the author’s intended voice.</p></div>
          <div className="detail-box"><span className="eyebrow">COPY EDITING</span><h3>Correctness and consistency.</h3><p>Address grammar, spelling, punctuation, usage, capitalization, terminology, names and consistency after higher-level decisions are settled.</p></div>
        </div>
        <p className="package-note">The purpose of this stage is not to polish passages that are likely to be rebuilt. It is to give the stable manuscript the careful sentence-level and correctness-focused attention it now needs.</p>
      </div>
    </section>

    <section className="section package-dark">
      <div className="container narrow">
        <span className="eyebrow">THE COST-SAVING PRINCIPLE</span>
        <h2>You may not need a separate full developmental edit.</h2>
        <p>The calibration stage is designed to carry out as much of the lighter developmental decision-making as the evidence can responsibly support.</p>
        <p>If guided beta feedback and focused author-led revision resolve the relevant structural questions, you may be able to move directly into line and copy editing without commissioning a separate full developmental edit.</p>
        <p>If the evidence shows that deeper structural work is still necessary, we will tell you before asking you to pay for sentence-level polishing.</p>
        <div className="journey-rule"><b>THE AIM</b><span>Not to sell you the largest edit. To help you pay for the level of editing your manuscript actually needs next.</span></div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="eyebrow">THE READINESS GATE</span>
        <h2>Every manuscript reaches a decision point before line and copy editing.</h2>
        <div className="package-route-grid">{readinessRoutes.map((route)=><article className="detail-box" key={route.label}><span className="eyebrow">{route.label}</span><h3>{route.title}</h3><p>{route.text}</p></article>)}</div>
        <p className="package-note">The package does not force an unstable manuscript into polishing simply because line and copy editing was part of the original plan.</p>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">WHAT THIS CAN HELP YOU AVOID</span>
        <h2>Spend less on uncertainty.</h2>
        <ul className="feature-list package-benefits">{benefits.map((item)=><li key={item}>{item}</li>)}</ul>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="eyebrow">WHO IT IS FOR</span>
        <h2>This package may be right for you if…</h2>
        <div className="package-two-column"><ul className="feature-list"><li>You have a complete or nearly complete manuscript.</li><li>You are preparing to send the manuscript to beta readers.</li><li>You already received beta feedback but cannot tell what matters.</li><li>Your readers gave generic, contradictory or difficult-to-use responses.</li></ul><ul className="feature-list"><li>You want to know whether the manuscript is ready for line and copy editing.</li><li>You want to reduce the risk of paying for the wrong level of editing.</li><li>Your major story decisions are stable—or you are willing to revise before sentence-level editing begins.</li></ul></div>
        <div className="detail-box package-not-fit"><span className="eyebrow">WHEN IT MAY NOT BE THE RIGHT FIRST STEP</span><p>This package may not be the best starting point if the central premise is still changing, the main character’s goal or transformation is unclear, the story’s causal structure is difficult to reconstruct, or major arcs, chronology, stakes or consequences remain unresolved. A Manuscript Diagnostic, Feedback Reconciliation review or deeper developmental scope may be more useful first.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="eyebrow">PRICING</span>
        <h2>One package. Three decision points.</h2>
        <p className="section-lead">The package is priced at <strong>$35 per 1,000 words</strong>, subject to manuscript review, scope, complexity, turnaround and minimum fee.</p>
        <div className="package-payment-grid"><div><span className="package-stage-number">20%</span><b>AT THE START</b><p>Manuscript intake, scoping and tailored beta-reader question design.</p></div><div><span className="package-stage-number">40%</span><b>AT CALIBRATION</b><p>Feedback interpretation, ambiguity resolution and revision direction.</p></div><div><span className="package-stage-number">40%</span><b>BEFORE RELEASE</b><p>Completion and delivery of the agreed line and copy-editing work.</p></div></div>
        <div className="package-price-table"><div><span>50,000 words</span><strong>$1,750</strong></div><div><span>80,000 words</span><strong>$2,800</strong></div><div><span>100,000 words</span><strong>$3,500</strong></div><div><span>120,000 words</span><strong>$4,200</strong></div><div><span>150,000 words</span><strong>$5,250</strong></div></div>
        <p className="package-note">Final scope is confirmed before work begins. Additional rounds, proofreading, specialist review and substantial rewriting are scoped separately.</p>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="eyebrow">THE METHOD</span>
        <h2>The questions are only the beginning.</h2>
        <p className="section-lead">A useful beta process does not treat reader feedback as a vote. It asks:</p>
        <div className="method-grid package-method-grid"><div><b>01 · EXPERIENCE</b><p>What did the reader experience?</p></div><div><b>02 · EVIDENCE</b><p>Where did the manuscript produce that experience?</p></div><div><b>03 · PATTERN</b><p>Did the reaction recur across readers?</p></div><div><b>04 · DIAGNOSIS</b><p>What explanation does the evidence support?</p></div><div><b>05 · PRIORITY</b><p>What deserves attention first?</p></div><div><b>06 · DECISION</b><p>What should the author consider changing—or leave alone?</p></div></div>
      </div>
    </section>

    <section className="section package-faq">
      <div className="container narrow">
        <span className="eyebrow">QUESTIONS AUTHORS ASK</span>
        <h2>Before you decide.</h2>
        <div className="faq-list">{faqs.map(([question, answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </div>
    </section>

    <section className="section alt final-cta">
      <div className="container narrow">
        <span className="eyebrow">START WITH THE QUESTION</span>
        <h2>Before you pay for another edit, find out what your manuscript actually needs.</h2>
        <p>Tell us what you are trying to understand, what your readers have said and where you are in the process. We will help you identify the smallest useful next step.</p>
        <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">Explore how we read →</Link></div>
        <p className="package-closing">You do not need to arrive knowing which service to book. Start with the question your manuscript needs answered.</p>
      </div>
    </section>
  </main>;
}
