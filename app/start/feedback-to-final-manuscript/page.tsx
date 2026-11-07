import type {Metadata} from 'next';
import Link from 'next/link';
import {withSeo} from '../../../config/seo';
import {site} from '../../../config/site';

export const metadata: Metadata = withSeo({
  title: 'Feedback to Final Manuscript',
  description: 'Read the whole manuscript, ask better questions of your beta readers, and find out what kind of editing would help next.',
  alternates: {canonical: `${site.website}/start/feedback-to-final-manuscript`},
}, '/start/feedback-to-final-manuscript');

const calibrationQuestions = [
  'Opening promises and continuation pressure',
  'Character goals, choices and reader investment',
  'Pacing, progression and scene movement',
  'Information, world-building and confusion',
  'Stakes, escalation and consequence',
  'Relationships and emotional effect',
  'Dialogue and voice at the reader-experience level',
  'Ending expectations, payoff and unresolved questions',
];

const readinessRoutes = [
  {label: 'ROUTE A · READY', title: 'Ready for line and copy editing', text: 'The major structural decisions appear stable. The remaining work is primarily clarity, rhythm, correctness and consistency.'},
  {label: 'ROUTE B · REVISE', title: 'Revision required first', text: 'The evidence points to issues you can address through a defined revision plan. Line and copy editing can wait while you work through that plan.'},
  {label: 'ROUTE C · ESCALATE', title: 'Deeper developmental work recommended', text: 'The manuscript needs a deeper diagnostic or developmental scope before sentence-level polishing would be responsible.'},
];

const benefits = [
  'Make the most of the beta readers or critique partners you already have.',
  'Avoid paying for line editing while major story decisions are still unstable.',
  'Reduce the risk of commissioning a full developmental edit when guided evidence and focused revision may be sufficient.',
  'Separate recurring reader evidence from individual preference.',
  'Understand what the manuscript needs next before committing to more work.',
  'Move into later editing with a clearer manuscript, scope and editorial brief.',
];

const faqs = [
  ['Why would I pay for a questionnaire?', 'This is more than a list of prompts. We read the complete manuscript and map its promises, structure, character movement, pacing, reveals, continuity and ending. That is how your beta readers receive questions about the things that matter in this book. The fee covers the reading and editorial reasoning behind the questions.'],
  ['Can this replace a developmental edit?', 'For some manuscripts, guided beta feedback and focused author-led revision may resolve the main manuscript-level questions. Others still need deeper structural work. This process helps you see which kind of help your book needs before you commit to the largest edit.'],
  ['What if I only want the full-manuscript questions?', 'Full-Manuscript Beta Calibration stands on its own. Feedback interpretation, line editing and copy editing remain available later, when you know you need them.'],
  ['What if my beta readers have already given me feedback?', 'Existing feedback can still be useful. We can look through it, identify what keeps appearing, separate unclear comments from concrete observations and note the questions that remain open. Substantial disagreement may point toward a feedback-interpretation review.'],
  ['Do I have to use your beta readers?', 'You may use suitable readers from your own network or community. The fit of the readers, the clarity of the questions and the detail in their responses matter more than the number of people who read.'],
  ['What happens if the manuscript is not ready for line and copy editing?', 'We make that call before line and copy editing begins. The recommendation may be focused revision or deeper developmental work. Sentence-level editing begins once the manuscript is ready for it.'],
  ['Is the calibration fee credited if I continue?', 'The full calibration fee can be credited toward line-and-copy editing agreed within 30 days of delivery. That credit applies to the agreed scope. Unrelated services, new manuscript versions and additional rounds are priced separately.'],
  ['Can you guarantee that I will save money?', 'A specific saving cannot be promised before the manuscript is reviewed. The service is designed to reduce unnecessary cost by clarifying whether a separate developmental edit is justified and whether the manuscript is ready for sentence-level editing.'],
];

export default function FeedbackToFinalManuscript(){return <main>
  <section className="page-hero package-hero"><div className="container narrow">
    <span className="eyebrow">A PRACTICAL WAY TO USE BETA FEEDBACK</span>
    <h1>Find out what your manuscript needs before you pay for the wrong edit.</h1>
    <p>We begin by reading the complete manuscript and helping you ask your beta readers better questions. After that, you can decide whether you need help sorting their responses, revising the book or moving into line and copy editing.</p>
    <p>The work starts with the question you need answered. Later decisions can wait until you have something useful to act on.</p>
    <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See how we read →</Link></div>
    <div className="proof"><span><b>Founder-led</b> · human editorial work · clear scope</span><span>One accountable practice from intake to delivery.</span></div>
  </div></section>

  <section className="section"><div className="container narrow">
    <span className="eyebrow">THE PROBLEM</span><h2>Beta feedback is only useful when it answers the right questions.</h2>
    <p className="section-lead">A reader may say that the pacing felt slow, a character needed more depth, or the ending was confusing. Those comments may be sincere. They still leave two important questions: what caused the reaction, and what should you revise first?</p>
    <div className="package-two-column"><div><p>Most authors do have readers. The difficulty is giving those readers questions that reach beyond broad answers. A generic questionnaire cannot account for the promises, turning points, relationships, reveals and ending of your particular manuscript.</p><p>That can leave an author paying to polish a manuscript that still needs structural revision. It can also lead to a large developmental edit when focused reader evidence and author-led revision might have answered the main questions.</p></div><div className="detail-box package-callout"><span className="eyebrow">THE DECISION WE HELP WITH</span><h3>What would help this manuscript most right now?</h3><p>Let the pages and your readers’ actual experience guide that answer.</p></div></div>
  </div></section>

  <section className="section alt"><div className="container narrow">
    <span className="eyebrow">ONE WAY IN · NO OBLIGATION TO CONTINUE</span><h2>Start with the full-manuscript questions. Decide about everything else later.</h2>
    <p className="section-lead">The work can include three parts. We begin by reading the manuscript and preparing the questions. After your readers respond, you can decide whether you want help making sense of the answers. Line and copy editing belongs at the point where the manuscript is ready for it.</p>
    <div className="package-stage-grid"><article><span className="package-stage-number">01</span><span className="eyebrow">CALIBRATE</span><h3>Ask better questions.</h3><p>A complete read of your manuscript, tailored beta-reader questions and a clear note about what to do next.</p></article><article><span className="package-stage-number">02</span><span className="eyebrow">INTERPRET</span><h3>Make sense of the evidence.</h3><p>After your readers respond, work out which comments keep coming up, which may be personal taste and what to revise first.</p></article><article><span className="package-stage-number">03</span><span className="eyebrow">POLISH</span><h3>Edit when ready.</h3><p>Move into professional line and copy editing only when the larger decisions are stable.</p></article></div>
  </div></section>

  <section className="section"><div className="container narrow">
    <span className="eyebrow">01 · FULL-MANUSCRIPT BETA CALIBRATION</span><h2>Pay for the careful reading behind the questions.</h2>
    <p className="section-lead">A long list of questions is easy to produce. The useful work is choosing the questions that fit this book.</p>
    <div className="package-two-column"><div><p>We read the complete manuscript and work out what your readers can actually help you understand. We look at the opening promise, character movement, pacing across the story, later reveals, continuity, reader expectations and the ending’s payoff.</p><p>The result is a question set written for your manuscript and the things you are unsure about. It gives your readers something concrete to respond to and helps you see where their answers are useful and where they stop being reliable.</p><p><strong>You receive:</strong> a full-manuscript beta-reader question set, guidance on how to use it, a note explaining what each question can and cannot tell you, and a clear recommendation about what to do next.</p></div><ul className="feature-list">{calibrationQuestions.map((item)=><li key={item}>{item}</li>)}</ul></div>
    <div className="detail-box package-value-callout"><span className="eyebrow">WHY THIS CAN SAVE MONEY</span><h3>Find out whether a bigger developmental edit belongs in your budget.</h3><p>This first read may show that carefully gathered reader feedback and your own focused revision can resolve the remaining questions. A need for deeper structural work becomes visible before you pay for line and copy editing.</p></div>
  </div></section>

  <section className="section package-dark"><div className="container narrow">
    <span className="eyebrow">THE COST-SAVING PRINCIPLE</span><h2>Begin with the smallest useful edit.</h2>
    <p>Every manuscript arrives with its own set of needs. A full developmental edit may be the right investment; a better beta process and focused revision may be enough. This first read helps you judge which direction makes sense before you commit to the larger expense.</p><p>It also keeps line editing from starting while major story decisions are still unsettled. There is no guaranteed saving attached to the process. The manuscript is reviewed before you spend on the next stage.</p>
    <div className="journey-rule"><b>THE AIM</b><span>Start with the next useful decision. The rest can wait.</span></div>
  </div></section>

  <section className="section alt"><div className="container narrow">
    <span className="eyebrow">BEFORE YOU MOVE TO LINE EDITING</span><h2>Before any line or copy edit, we stop and look at what the manuscript needs.</h2>
    <div className="package-route-grid">{readinessRoutes.map((route)=><article className="detail-box" key={route.label}><span className="eyebrow">{route.label}</span><h3>{route.title}</h3><p>{route.text}</p></article>)}</div>
    <p className="package-note">A manuscript that needs revision or deeper developmental work receives that recommendation before line and copy editing begins. The sentence-level edit waits until the book is ready for it.</p>
  </div></section>

  <section className="section"><div className="container narrow">
    <span className="eyebrow">02 · FEEDBACK INTERPRETATION</span><h2>When your readers leave you with questions, feedback interpretation is available as the next part.</h2>
    <p className="section-lead">Once your readers have answered the questions, you may be able to work through the responses yourself. Conflicting comments or an unclear revision path are good reasons to bring us back in—we can sort the responses and help you decide what to revise first.</p>
    <div className="method-grid package-method-grid"><div><b>RECURRING EVIDENCE</b><p>What several readers experienced or noticed independently.</p></div><div><b>INDIVIDUAL PREFERENCE</b><p>What may reflect taste, expectation or genre preference.</p></div><div><b>LIKELY CAUSE</b><p>What the affected passages and patterns support.</p></div><div><b>REVISION PRIORITY</b><p>What deserves attention first and what can wait.</p></div></div>
    <p><strong>Possible deliverable:</strong> a clear account of what keeps coming up, what may be personal taste, what the pages support and what to revise first.</p>
  </div></section>

  <section className="section alt"><div className="container narrow">
    <span className="eyebrow">03 · POLISH</span><h2>Refine the manuscript when the larger decisions are stable.</h2>
    <div className="package-two-column"><div className="detail-box"><span className="eyebrow">LINE EDITING</span><h3>Clarity, rhythm and flow.</h3><p>Improve clarity, rhythm, flow, emphasis, repetition, awkward phrasing and scene-level readability while protecting your intended voice.</p></div><div className="detail-box"><span className="eyebrow">COPY EDITING</span><h3>Correctness and consistency.</h3><p>Address grammar, spelling, punctuation, usage, capitalization, terminology, names and consistency after higher-level decisions are settled.</p></div></div>
    <p className="package-note">This part begins after we have agreed that the manuscript is ready for it.</p>
  </div></section>

  <section className="section"><div className="container narrow">
    <span className="eyebrow">PRICING</span><h2>Pay for the part you need now.</h2><p className="section-lead">The price shown here covers the question you need answered first. Later work is discussed after that question has been addressed.</p>
    <div className="package-two-column package-pricing-options"><div className="detail-box package-price-card"><span className="eyebrow">START HERE</span><h3>Full-Manuscript Beta Calibration</h3><p>A complete read, tailored full-manuscript beta-reader questions, a note about what the questions can tell you, and a clear recommendation about what to do next.</p><div className="package-price-large">$12 <span>per 1,000 words</span></div><p><strong>$750 minimum.</strong> 50% to begin and 50% before delivery.</p><p className="package-note">The calibration fee is credited in full toward an agreed line-and-copy editing scope confirmed within 30 days of delivery.</p></div><div className="detail-box package-price-card"><span className="eyebrow">ONLY IF NEEDED</span><h3>Feedback interpretation and editing</h3><p>Feedback interpretation, revision direction, and line and copy editing when the manuscript is ready for sentence-level work.</p><div className="package-price-large">$35 <span>per 1,000 words</span></div><p>We confirm the scope, stages and minimum fee after reviewing the manuscript and the question you need answered.</p><p className="package-note">Revision or deeper developmental work comes first when the manuscript needs it; line and copy editing is priced after that point.</p></div></div>
    <div className="detail-box package-credit-callout"><span className="eyebrow">A FAIR WAY TO START</span><h3>The first read counts toward later editing.</h3><p>When we agree within 30 days that the manuscript is ready for line and copy editing, we deduct the full calibration fee from that work. A manuscript needing revision or deeper developmental work can stop here, leaving you with findings you can use to plan the next move.</p></div>
    <p className="package-note">Additional rounds, proofreading, specialist review, substantial rewriting and new manuscript versions are scoped separately. Final pricing is confirmed before work begins.</p>
  </div></section>

  <section className="section alt"><div className="container narrow"><span className="eyebrow">WHAT THIS CAN HELP YOU AVOID</span><h2>Spend less on uncertainty.</h2><ul className="feature-list package-benefits">{benefits.map((item)=><li key={item}>{item}</li>)}</ul></div></section>

  <section className="section"><div className="container narrow">
    <span className="eyebrow">WHO IT IS FOR</span><h2>This may be a good fit if…</h2>
    <div className="package-two-column"><ul className="feature-list"><li>You have a complete or nearly complete manuscript.</li><li>You are preparing to send it to beta readers.</li><li>You already received beta feedback but cannot tell what matters.</li><li>Your readers gave generic, contradictory or difficult-to-use responses.</li></ul><ul className="feature-list"><li>You want to know whether the manuscript is ready for line and copy editing.</li><li>You want a clearer basis for choosing the next level of editing.</li><li>You are willing to revise before sentence-level editing begins when the manuscript calls for it.</li></ul></div>
    <div className="detail-box package-not-fit"><span className="eyebrow">A DIFFERENT FIRST STEP MAY SUIT YOU WHEN</span><p>A Manuscript Diagnostic or deeper developmental scope may suit you better when the central premise is still changing, the main character’s goal or transformation is unclear, the causal structure is difficult to reconstruct, or major arcs, chronology, stakes or consequences remain unresolved.</p></div>
  </div></section>

  <section className="section package-faq"><div className="container narrow"><span className="eyebrow">QUESTIONS AUTHORS ASK</span><h2>Before you decide.</h2><div className="faq-list">{faqs.map(([question, answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

  <section className="section alt final-cta"><div className="container narrow"><span className="eyebrow">START WITH THE QUESTION</span><h2>Start with the question you need answered; let the manuscript guide the rest.</h2><p>Tell us what you are trying to understand, what your readers have said and where you are in the process. We will help you decide whether a full-manuscript question set is the right place to start.</p><div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">Explore how we read →</Link></div><p className="package-closing">You can begin without knowing which service to book. Start with the question your manuscript needs answered.</p></div></section>
</main>;
}
