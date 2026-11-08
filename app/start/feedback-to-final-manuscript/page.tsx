import type {Metadata} from 'next';
import Link from 'next/link';
import {withSeo} from '../../../config/seo';
import {site} from '../../../config/site';

export const metadata: Metadata = withSeo({
  title: 'Feedback to Final Manuscript',
  description: 'Get manuscript-specific beta-reading, critique and self-editing questions to understand reader reactions, examine how the writing works and decide what to revise.',
  alternates: {canonical: `${site.website}/start/feedback-to-final-manuscript`},
}, '/start/feedback-to-final-manuscript');

const perspectives = [
  {
    number: '01',
    title: 'Guided Beta-Reading Questions',
    subtitle: 'Find out what your readers are actually experiencing.',
    intro: 'Your beta readers do not need to know how to fix your manuscript. They need useful questions that help them describe what happened while they were reading.',
    questions: [
      'Did the opening give you a reason to keep reading?',
      'Where did you become interested in the character or what was happening?',
      'Were there moments when you felt lost, confused or unsure what was going on?',
      'Did the pacing feel natural, or were there sections you wanted to move through more quickly?',
      'Did you understand why a character made a particular decision?',
      'Which scenes stayed with you after reading? Which ones did not have much effect?',
      'Did the ending give you the payoff you were expecting?',
    ],
    close: 'We write the questions after reading your manuscript. Your readers will not be handed a questionnaire that could have been written for any book.',
  },
  {
    number: '02',
    title: 'Guided Critique Questions',
    subtitle: 'Look beyond whether someone liked your story. Examine how it works.',
    intro: 'A critique partner can offer more than a reaction. The right questions help them examine the writing, construction and decisions behind that reaction.',
    questions: [
      'Does each scene accomplish what it appears to be there to accomplish?',
      'Are important moments given enough weight, while less important ones are allowed to move along?',
      'Do the characters have distinct voices, motivations and ways of responding?',
      'Is the reader given enough information to follow what is happening without having everything explained?',
      'Does the worldbuilding help the reader understand the story, or does it interrupt the experience?',
      'Are changes in point of view clear and intentional?',
      'Does the dialogue carry the emotions and relationships you want it to convey?',
      'Are important developments properly prepared, or do they feel as though they come out of nowhere?',
    ],
    close: 'The aim is to help your critique partners give you more useful observations than simply saying that a chapter is slow, a character feels flat or a scene is confusing.',
  },
  {
    number: '03',
    title: 'Guided Self-Editing Questions',
    subtitle: 'Learn to examine your own manuscript more deliberately.',
    intro: 'This is the part that helps you move from receiving feedback to making your own revision decisions.',
    questions: [
      'What did I want this scene to accomplish?',
      'Is that intention actually coming through in the writing?',
      'What is happening on the page that might be producing this reaction?',
      'Is this a genuine problem, a matter of personal preference or an intentional effect?',
      'Have I given the reader enough information to understand what is happening?',
      'Am I spending too much time explaining something the reader already understands?',
      'What would improve this section without weakening what I like about it?',
      'What might I lose if I make this change?',
      'How will I know whether my revision has worked?',
    ],
    close: 'You will not simply be told to rewrite a scene or make a character more likeable. You will have a clearer way to examine the problem and decide what, if anything, needs to change.',
  },
];

const betaQuestions = [
  'Did you want to continue after the first chapter?',
  'What were you interested in finding out?',
  'Was there a point where you felt the story was taking too long to get somewhere?',
  'Did the quieter scenes give you a reason to care about what happened next?',
];

const critiqueQuestions = [
  'Does each opening scene establish something important?',
  'Is the slower pacing building atmosphere, relationships or anticipation?',
  'Are the scenes giving too much attention to details that do not carry the same importance?',
  'Could the order of the opening events be affecting how the reader experiences the story?',
];

const selfEditQuestions = [
  'What do I want readers to understand or care about before the story accelerates?',
  'Which scenes are necessary to establish that?',
  'Am I deliberately withholding information, or have I left out something readers need to follow the story?',
  'Is the problem the pace itself, or the absence of something meaningful for readers to hold on to?',
];

const deliverables = [
  'A manuscript-specific guided beta-reading question set.',
  'A guided critique question set for your critique partners.',
  'A structured self-editing question guide for you.',
  'Questions that address relevant passages, scenes, chapters and the manuscript as a whole, according to the scope and available evidence.',
  'Explanations of why important questions are being asked and what their answers can help you understand.',
  'A prioritised account of areas worth investigating, including strengths and elements you may want to preserve.',
  'A recommendation about what would be useful to do next.',
];

const process = [
  ['01 · TELL US ABOUT YOUR MANUSCRIPT', 'Share the manuscript and tell us what you are trying to achieve, what concerns you and what kind of story you want readers to experience. You do not need to arrive with a perfect diagnosis. Even saying “I am not sure” is useful.'],
  ['02 · WE READ AND EXAMINE THE MANUSCRIPT', 'We consider what is actually on the page, how the scenes and chapters work together, what the writing establishes for readers and where your concerns may be worth investigating. We also take your intentions and the kind of work you are writing into account.'],
  ['03 · WE PREPARE YOUR THREE QUESTION GUIDES', 'Your beta readers, critique partners and you receive different questions for their different roles. The questions are tailored to the manuscript rather than drawn from a general checklist.'],
  ['04 · YOU USE THE QUESTIONS TO INVESTIGATE YOUR MANUSCRIPT', 'Share the relevant questions with your readers and critique partners, and work through the self-editing guide yourself. You can then compare the different perspectives without treating every comment as an instruction.'],
  ['05 · DECIDE WHAT THE MANUSCRIPT NEEDS NEXT', 'You may have enough information to revise independently. You may want help interpreting the feedback. Or you may discover that the manuscript needs more substantial developmental work before it is ready for line and copy editing.'],
];

const faqs = [
  ['Are these actual beta-reader reports?', 'No. We prepare manuscript-specific questions for your real beta readers. Their responses provide the actual reader experiences. The questions are designed to help them describe those experiences more clearly; we do not invent or present hypothetical reactions as real reader feedback.'],
  ['Are all three question guides included?', 'Yes. The package includes a guided beta-reading question set, a guided critique question set and a structured self-editing question guide. Each has a different purpose and is tailored to the manuscript.'],
  ['Why would I pay for questions?', 'The useful work is not producing a long list of prompts. It is reading the manuscript, understanding what you are trying to achieve, identifying what is worth investigating and choosing questions that fit this particular book. The fee covers that reading and editorial reasoning.'],
  ['Will you tell me what to change?', 'We identify areas worth investigating, explain the evidence and possible consequences, and help prioritise decisions. You remain the person who decides what to change. A question or recommendation is not an instruction to rewrite something that may be working as intended.'],
  ['Does this include feedback interpretation?', 'The first stage prepares the three question guides and a recommendation about what to do next. Once your readers and critique partners have responded, feedback interpretation is available as a separate next step if you need help sorting recurring observations, individual preferences and revision priorities.'],
  ['Does this include line editing or copy editing?', 'No. Line and copy editing remain later services. We first establish whether the larger manuscript decisions are stable enough for sentence-level work. If the manuscript needs revision or deeper developmental attention, that should come first.'],
  ['What if I already have beta feedback or critique notes?', 'Existing feedback can still be useful. Share it during intake. We will consider what readers and critique partners have already said, what remains unclear and which questions are still worth investigating.'],
  ['Will you make my manuscript follow conventional story structure?', 'No. Your stated intentions, genre, form and the kind of reading experience you want to create matter. We distinguish an intentional choice from a possible execution problem rather than treating every unconventional structure, slow passage or unresolved question as a mistake.'],
];

export default function FeedbackToFinalManuscript() {
  return <main>
    <section className="page-hero package-hero"><div className="container narrow">
      <span className="eyebrow">FEEDBACK TO FINAL MANUSCRIPT</span>
      <h1>Know what to ask. Understand what you hear. Decide what to revise.</h1>
      <p>Maybe you have been told your opening is slow. Someone else says they enjoyed the slow build. A reader thinks your main character is difficult to like, while another finds them interesting. You have been told that your dialogue sounds the same across characters, or that there is too much description.</p>
      <p>You can see that something might need attention. But what exactly is the problem? Is the scene doing what you intended? What should you change? And how do you know whether a suggested change will actually make the manuscript better?</p>
      <p><strong>Feedback to Final Manuscript helps you work through those questions.</strong></p>
      <p>We read your manuscript and prepare three tailored sets of questions: one for your beta readers, one for your critique partners and one for you, the author. Each looks at your writing from a different perspective, helping you get beyond general comments and investigate what is actually happening on the page.</p>
      <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See how we read →</Link></div>
      <div className="proof"><span><b>Founder-led</b> · human editorial work · clear scope</span><span>One accountable practice from intake to delivery.</span></div>
    </div></section>

    <section className="section"><div className="container narrow">
      <span className="eyebrow">THREE PERSPECTIVES · ONE MANUSCRIPT</span><h2>Each guide asks a different person to look at a different part of the problem.</h2>
      <p className="section-lead">Beta readers describe what happened for them. Critique partners examine how the writing produced that experience. Your self-editing guide helps you decide what to do with what you have learned.</p>
      <div className="package-stage-grid package-perspective-grid">{perspectives.map((item) => <article key={item.number}><span className="package-stage-number">{item.number}</span><h3>{item.title}</h3><p><strong>{item.subtitle}</strong></p><p>{item.intro}</p><ul className="feature-list">{item.questions.map((question) => <li key={question}>{question}</li>)}</ul><p>{item.close}</p></article>)}</div>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <span className="eyebrow">HERE IS WHAT THAT DIFFERENCE LOOKS LIKE</span><h2>What if your opening feels slow?</h2>
      <p className="section-lead">Imagine you are worried that your opening chapters are too slow. You do not want to turn your story into an action-packed book just to make the beginning more exciting. You want readers to enjoy the slower introduction, understand the characters and have a reason to stay.</p>
      <div className="package-example-grid">
        <article className="detail-box"><span className="eyebrow">YOUR BETA READERS MIGHT BE ASKED</span><ul className="feature-list">{betaQuestions.map((question) => <li key={question}>{question}</li>)}</ul></article>
        <article className="detail-box"><span className="eyebrow">YOUR CRITIQUE PARTNERS MIGHT BE ASKED</span><ul className="feature-list">{critiqueQuestions.map((question) => <li key={question}>{question}</li>)}</ul></article>
        <article className="detail-box"><span className="eyebrow">YOUR SELF-EDITING GUIDE MIGHT ASK</span><ul className="feature-list">{selfEditQuestions.map((question) => <li key={question}>{question}</li>)}</ul></article>
      </div>
    </div></section>

    <section className="section"><div className="container narrow">
      <span className="eyebrow">WHAT YOU WILL RECEIVE</span><h2>Questions built around your manuscript, not a template.</h2>
      <p className="section-lead">Your package includes:</p>
      <ul className="feature-list package-benefits">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="detail-box package-value-callout"><h3>We do not start with a standard list of questions.</h3><p>We read the manuscript, consider what you want it to do and choose questions that fit the parts of the book that need attention. We also explain what an answer can help you understand—and what it cannot prove.</p></div>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <span className="eyebrow">HOW THE PROCESS WORKS</span><h2>From your manuscript to questions you can use.</h2>
      <div className="package-process-list">{process.map(([label, description]) => <article key={label}><span className="eyebrow">{label}</span><p>{description}</p></article>)}</div>
      <p className="package-note">You can decide after the first stage. There is no obligation to purchase every subsequent service.</p>
    </div></section>

    <section className="section"><div className="container narrow">
      <span className="eyebrow">WHAT HAPPENS AFTER THE QUESTIONS?</span><h2>The questions are a starting point, not another instruction to follow blindly.</h2>
      <div className="package-two-column"><div className="detail-box"><span className="eyebrow">MAKE SENSE OF THE FEEDBACK</span><h3>When the responses leave you with more questions.</h3><p>When your readers and critique partners respond, you may find that some comments agree, others contradict each other, and some leave you with even more questions.</p><p>Feedback interpretation is available to help you distinguish recurring observations from individual preferences, consider what the manuscript actually supports and decide what deserves attention first.</p></div><div className="detail-box"><span className="eyebrow">EDIT WHEN THE MANUSCRIPT IS READY</span><h3>Do not polish passages that may need substantial revision.</h3><p>Line editing and copy editing have their place, but they should not be used to polish passages that may need substantial rewriting.</p><p>We will help establish whether the larger decisions are stable before moving into sentence-level editing. If the manuscript needs more substantial developmental work, that should be identified first.</p></div></div>
    </div></section>

    <section className="section package-dark"><div className="container narrow">
      <span className="eyebrow">A PRACTICAL WAY TO MOVE FORWARD</span><h2>Start with the question you need answered. Let the manuscript guide the rest.</h2>
      <p>You may have enough information to revise independently. You may want help interpreting the feedback. Or you may discover that the manuscript needs more substantial developmental work before it is ready for line and copy editing.</p>
      <div className="journey-rule"><b>WHAT THIS SHOULD HELP YOU DO</b><span>See what readers are responding to, understand what may be behind it and decide what you want to change—or keep.</span></div>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <span className="eyebrow">PRICING</span><h2>Pay for the part you need now.</h2><p className="section-lead">The first stage covers the full-manuscript read and all three question guides, written for your book. Later work is discussed after you have something useful to act on.</p>
      <div className="package-two-column package-pricing-options">
        <div className="detail-box package-price-card"><span className="eyebrow">START HERE · THREE QUESTION GUIDES</span><h3>Full-Manuscript Guided Editorial Questions</h3><p>A complete read, manuscript-specific beta-reading, critique and self-editing question guides, an explanation of what important questions can help you understand, and a clear recommendation about what to do next.</p><div className="package-price-large">$12 <span>per 1,000 words</span></div><p><strong>$750 minimum.</strong> 50% to begin and 50% before delivery.</p><p className="package-note">The fee is credited in full toward an agreed line-and-copy editing scope confirmed within 30 days of delivery.</p></div>
        <div className="detail-box package-price-card"><span className="eyebrow">ONLY IF NEEDED</span><h3>Feedback interpretation and editing</h3><p>Feedback interpretation, revision direction, and line and copy editing when the manuscript is ready for sentence-level work.</p><div className="package-price-large">$35 <span>per 1,000 words</span></div><p>We confirm the scope, stages and minimum fee after reviewing the manuscript and the question you need answered.</p><p className="package-note">Revision or deeper developmental work comes first when the manuscript needs it; line and copy editing is priced after that point.</p></div>
      </div>
      <div className="detail-box package-credit-callout"><span className="eyebrow">A FAIR WAY TO START</span><h3>The first read counts toward later editing.</h3><p>When we agree within 30 days that the manuscript is ready for line and copy editing, we deduct the full first-stage fee from that work. A manuscript needing revision or deeper developmental work can stop here, leaving you with questions and findings you can use to plan the next move.</p></div>
      <p className="package-note">Additional rounds, proofreading, specialist review, substantial rewriting and new manuscript versions are scoped separately. Final pricing is confirmed before work begins.</p>
    </div></section>

    <section className="section"><div className="container narrow">
      <span className="eyebrow">IS THIS RIGHT FOR YOU?</span><h2>This may be useful when…</h2>
      <ul className="feature-list package-benefits">
        <li>You have finished a manuscript and are preparing to send it to beta readers.</li>
        <li>You keep hearing that the opening needs work, but do not know what specifically needs fixing.</li>
        <li>You are unsure whether your pacing is too slow or whether readers simply need more to engage with.</li>
        <li>You are concerned about character development, dialogue, worldbuilding, scene construction or clarity.</li>
        <li>Your critique partners keep identifying problems, but the comments are not giving you a clear direction.</li>
        <li>You have received contradictory feedback and do not know which suggestions to follow.</li>
        <li>You want to become more confident at examining and improving your own writing.</li>
      </ul>
      <div className="detail-box package-not-fit"><span className="eyebrow">A DIFFERENT FIRST STEP MAY SUIT YOU WHEN</span><p>The central premise is still changing, the main character’s goal or transformation is unclear, the causal structure is difficult to reconstruct, or major arcs, chronology, stakes or consequences remain unresolved. A Manuscript Diagnostic or deeper developmental scope may be more useful in that situation.</p></div>
      <p className="package-note">The beta-reading guide helps you ask better questions of real readers; the critique guide structures craft-focused feedback; and the self-editing guide helps you make your own decisions. We do not promise that every reader will react in the same way or present hypothetical reactions as actual reader feedback.</p>
    </div></section>

    <section className="section package-faq"><div className="container narrow"><span className="eyebrow">QUESTIONS AUTHORS ASK</span><h2>Before you decide.</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

    <section className="section alt final-cta"><div className="container narrow"><span className="eyebrow">START WITH YOUR MANUSCRIPT</span><h2>You do not need to know exactly what is wrong before you begin.</h2><p>Tell us what you are trying to understand, what your readers have said and where you are in the process. We will help you decide whether this is the right place to start.</p><div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">Explore how we read →</Link></div><p className="package-closing">You can begin with the question your manuscript needs answered.</p></div></section>
  </main>;
}
