import type {Metadata} from 'next';
import Link from 'next/link';
import {AnnotationPreview} from '../components/AnnotationPreview';
import {ServiceCard} from '../components/ServiceCard';
import {services} from '../config/services';
import {site} from '../config/site';
import {withSeo} from '../config/seo';

export const metadata: Metadata = withSeo({
 title:'Find Out What Your Manuscript Is Actually Doing to a Reader',
 description:'Close reading, reader-centred diagnosis and editorial support for authors who want evidence about what is working, what is getting in the way, and what to do next.',
 alternates:{canonical: `${site.website}/`}
}, '');

const concerns=[
 ['My opening feels slow.','Work out whether the real issue is pacing, information, stakes, curiosity or scene function.','/problems/opening-feels-slow'],
 ['Readers understand the story but do not care.','Separate comprehension from emotional investment and identify where the connection weakens.','/problems/readers-understand-but-dont-care'],
 ['My character makes sense to me, but not to readers.','Compare what the author knows with what the page actually makes legible.','/problems/character-makes-sense-to-me'],
 ['My readers disagree.','Separate preference, expectation and recurring manuscript evidence before deciding what matters.','/problems/beta-readers-disagree'],
 ['The middle drags.','Investigate repeated narrative function, delayed consequence, information load and progression.','/problems/middle-feels-slow'],
 ['I revised it and I am still unsure.','Check whether the revision changed the reading experience it was meant to change.','/problems/revision-worked'],
];
const entry=[
 ['Reader Reality Check','How does this actually land?','A professional outside reading of the manuscript’s reader experience.','/start/reader-reality-check'],
 ['Manuscript Diagnostic','Something is not working. What is it?','A focused investigation into symptoms, evidence, patterns and likely causes.','/start/manuscript-diagnostic'],
 ['Feedback Reconciliation','What should I believe when readers disagree?','A structured way to turn conflicting reactions into usable priorities.','/start/feedback-reconciliation'],
 ['Revision Verification','Did my revision actually work?','A fresh comparison of what changed, what improved and what remains.','/start/revision-verification'],
 ['Editorial Development','Now that I understand the problem, what should I change?','Deeper manuscript-level development once the central questions are clear.','/start/editorial-development'],
];

export default function Home(){return <main>
<section className="hero"><div className="container hero-grid"><div>
 <span className="eyebrow">CLOSE READING &amp; EDITORIAL FEEDBACK</span>
 <h1>Find out what your manuscript is actually doing to a reader.</h1>
 <p className="hero-copy">You know what you intended the manuscript to do. The difficult question is what reaches the reader on the page. We investigate reader experience, trace important reactions back to manuscript evidence, and help you decide what deserves attention next.</p>
 <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See How We Read →</Link></div>
 <div className="proof"><b>Founder-led · human editorial work · clear scope</b><span>One official point of responsibility</span></div>
</div><AnnotationPreview/></div></section>

<section className="section routing-section"><div className="container"><div className="section-head"><div><span className="eyebrow">WHAT ARE YOU WORRIED ISN'T WORKING?</span><h2>Start with the problem, not the service name.</h2><p className="section-lead">The right next step depends on what the manuscript actually needs—not on how much editing you think you should buy.</p></div><Link className="text-link" href="/problems">Explore the problem library →</Link></div><div className="concern-grid">{concerns.map(([title,body,href])=><Link className="service-card" href={href} key={title}><b>{title}</b><p>{body}</p><span className="text-link">Investigate this problem →</span></Link>)}</div></div></section>

<section className="section journey"><div className="container"><span className="eyebrow">A FOUNDER-LED PRACTICE</span><h2>One accountable practice, built on careful reading.</h2><p className="journey-lead">Harry Stones oversees Second Pair Editorial’s author communication, manuscript-handling process, editorial scope and delivery standards. The method is simple: connect the reading experience to the page, look for patterns, and keep uncertainty visible where the evidence does not support a single explanation.</p><div className="method-grid">{[['01 · EXPERIENCE','What happened while reading?'],['02 · EVIDENCE','Where did the manuscript produce that experience?'],['03 · PATTERN','Was it isolated, or does it recur?'],['04 · DIAGNOSIS','What explanations does the evidence support?'],['05 · PRIORITY','What matters enough to act on first?'],['06 · AUTHOR DECISION','What should you consider doing—or leave alone?']].map(([a,b])=><div key={a}><b>{a}</b><p>{b}</p></div>)}</div><Link className="text-link" href="/how-we-read">See how the practice works →</Link></div></section>

<section className="section concerns"><div className="container"><div className="section-head"><div><span className="eyebrow">STARTING POINTS</span><h2>Begin with the question you need answered.</h2></div></div><div className="service-grid">{entry.map(([name,q,desc,href])=><Link className="service-card" href={href} key={name}><span className="eyebrow">{name}</span><h3>{q}</h3><p>{desc}</p><span className="text-link">Explore →</span></Link>)}</div></div></section>

<section className="section sample-band"><div className="container split"><div><span className="eyebrow">SEE THE PRACTICE FIRST</span><h2>See how we work before you decide whether to work with us.</h2></div><div><p>Tell Harry Stones what you are trying to understand and, if useful, send a representative sample. You will see how Second Pair connects a reader reaction to the page and explains what the evidence can—and cannot—tell you. There is no obligation to book; the sample is not a free diagnosis of the whole manuscript.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div></div></section>

<section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">IF YOU NEED MORE THAN A READER'S REACTION</span><h2>When the manuscript needs more than a reader's reaction, we can take it further.</h2></div><Link className="text-link" href="/services">See all services →</Link></div><div className="service-grid">{services.filter(s=>['alpha-reading','beta-reading','manuscript-diagnostic','developmental-editing','revision-review','line-editing'].includes(s.slug)).map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div></div></section>

<section className="section alt"><div className="container split"><div><span className="eyebrow">THE METHOD IN PRACTICE</span><h2>See how the reading becomes a diagnosis.</h2><p>See what a comment becomes when it is connected to evidence, pattern, diagnosis and a decision about what to do next.</p><Link className="text-link" href="/proof">See our approach in practice →</Link></div><div><span className="eyebrow">AUTHOR RESOURCE</span><h2>Not ready to send the manuscript?</h2><p>Use the Author’s Manuscript Readiness Checklist to identify clusters of uncertainty before asking someone else to read the book.</p><Link className="text-link" href="/resources">Explore author resources →</Link></div></div></section>

<section className="section final-cta"><div className="container narrow"><span className="eyebrow">START WITH HARRY STONES</span><h2>Something is not working. Start with the question.</h2><p>Tell Harry Stones what you are seeing, what your readers have said, what you have already tried, and what you most need to know. Second Pair Editorial remains your official point of responsibility from enquiry through delivery; you do not have to choose the perfect service first.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><p className="contact-line">Prefer email? Write to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></p></div></section>
</main>}
