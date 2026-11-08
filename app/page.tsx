import type {Metadata} from 'next';
import Link from 'next/link';
import {AnnotationPreview} from '../components/AnnotationPreview';
import {ServiceCard} from '../components/ServiceCard';
import {services} from '../config/services';
import {site} from '../config/site';
import {withSeo} from '../config/seo';

export const metadata: Metadata = withSeo({
 title:'Find Out What Your Manuscript Is Actually Doing to a Reader',
 description:'Close manuscript reading and editing for authors who want to know where readers get lost, lose interest or connect with the story—and what to work on next.',
 alternates:{canonical: `${site.website}/`}
}, '');

const concerns=[
 ['My opening feels slow.','Does the hook lead somewhere? Are readers waiting for the story to begin, or are they still getting a reason to care?','/problems/opening-feels-slow'],
 ['Readers understand the story but do not care.','Can readers follow what happens without feeling much about the people it happens to?','/problems/readers-understand-but-dont-care'],
 ['My character makes sense to me, but not to readers.','You know why they made that choice. Can a reader see the reason from what is on the page?','/problems/character-makes-sense-to-me'],
 ['My readers disagree.','One reader loves the slow build; another wants the story to get moving. What is the disagreement really about?','/problems/beta-readers-disagree'],
 ['The middle drags.','Every scene may feel necessary while the story still seems to be going round in circles.','/problems/middle-feels-slow'],
 ['I revised it and I am still unsure.','You changed what readers complained about. Does the new version actually read better, or does it just look different to you?','/problems/revision-worked'],
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
 <p className="hero-copy">You know why the character made that choice, why the opening takes its time and what a mysterious detail will mean later. A new reader only has the words on the page. We read to see what they can follow, care about, question or miss—and point you to the passages behind those reactions.</p>
 <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/start/feedback-to-final-manuscript">See the Feedback-to-Final pathway →</Link><Link className="text-link" href="/how-we-read">See How We Read →</Link></div>
 <div className="proof"><b>Founder-led · human editorial work · clear scope</b><span>One official point of responsibility</span></div>
</div><AnnotationPreview/></div></section>

<section className="homepage-package-feature" aria-labelledby="feedback-to-final-heading"><div className="container homepage-package-grid"><div><span className="eyebrow">FEEDBACK TO FINAL MANUSCRIPT</span><h2 id="feedback-to-final-heading">Three ways to examine your manuscript before deciding what to revise.</h2><p>Get beta-reading questions your readers can answer, critique questions that help writing partners look closely at the craft, and self-editing questions to help you work out what to change—and what to leave alone.</p></div><div className="homepage-package-panel"><div className="homepage-package-stages"><span><b>01</b> BETA READ</span><span><b>02</b> CRITIQUE</span><span><b>03</b> SELF-EDIT</span></div><p>The aim is not to sell you more editing than the manuscript needs. It is to help you work out what would be useful next.</p><p className="homepage-package-cta-copy">Not sure whether your opening is too slow, a character is difficult to like, or a scene is simply not landing? Start with questions built around your manuscript.</p><Link className="button" href="/start/feedback-to-final-manuscript">Explore the package →</Link></div></div></section>

<section className="section routing-section"><div className="container"><div className="section-head"><div><span className="eyebrow">WHAT ARE YOU WORRIED ISN'T WORKING?</span><h2>Start with the problem, not the service name.</h2><p className="section-lead">The right next step depends on what the manuscript actually needs—not on how much editing you think you should buy.</p></div><Link className="text-link" href="/problems">Explore the problem library →</Link></div><div className="concern-grid">{concerns.map(([title,body,href])=><Link className="service-card" href={href} key={title}><b>{title}</b><p>{body}</p><span className="text-link">Investigate this problem →</span></Link>)}</div></div></section>

<section className="section journey"><div className="container"><span className="eyebrow">A FOUNDER-LED PRACTICE</span><h2>A careful read, with someone responsible for the whole job.</h2><p className="journey-lead">Harry Stones oversees your enquiry, the agreed work, manuscript handling and delivery. When we read, we note what happened for us, find the place where it happened, and check whether the same thing occurs elsewhere. We then explain what may be behind it and which concerns are worth your time. Where the pages do not give us a clear answer, we say so.</p><div className="method-grid">{[['01 · READER REACTION','What did we notice?'],['02 · THE PAGE','Where did it happen?'],['03 · MORE THAN ONCE?','Is this a one-off or a recurring issue?'],['04 · POSSIBLE REASON','What in the writing may have caused it?'],['05 · WHAT MATTERS','Which issue is worth looking at first?'],['06 · YOUR CALL','What would you like to change—or keep?']].map(([a,b])=><div key={a}><b>{a}</b><p>{b}</p></div>)}</div><Link className="text-link" href="/how-we-read">See how the practice works →</Link></div></section>

<section className="section concerns"><div className="container"><div className="section-head"><div><span className="eyebrow">STARTING POINTS</span><h2>Begin with the question you need answered.</h2></div></div><div className="service-grid">{entry.map(([name,q,desc,href])=><Link className="service-card" href={href} key={name}><span className="eyebrow">{name}</span><h3>{q}</h3><p>{desc}</p><span className="text-link">Explore →</span></Link>)}</div></div></section>

<section className="section sample-band"><div className="container split"><div><span className="eyebrow">SEE THE PRACTICE FIRST</span><h2>See how we work before you decide whether to work with us.</h2></div><div><p>Tell Harry Stones what you are trying to understand and, if useful, send a representative sample. You will see how Second Pair connects a reader reaction to the page and explains what the evidence can—and cannot—tell you. There is no obligation to book; the sample is not a free diagnosis of the whole manuscript.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div></div></section>

<section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">IF YOU NEED MORE THAN A READER'S REACTION</span><h2>When the manuscript needs more than a reader's reaction, we can take it further.</h2></div><Link className="text-link" href="/services">See all services →</Link></div><div className="service-grid">{services.filter(s=>['alpha-reading','beta-reading','manuscript-diagnostic','developmental-editing','revision-review','line-editing'].includes(s.slug)).map((s,i)=><ServiceCard key={s.slug} service={s} index={i}/>)}</div></div></section>

<section className="section alt"><div className="container split"><div><span className="eyebrow">THE METHOD IN PRACTICE</span><h2>See how the reading becomes a diagnosis.</h2><p>See how a reader's comment can be traced to a particular passage, checked against the rest of the manuscript and turned into a decision you can consider.</p><Link className="text-link" href="/proof">See our approach in practice →</Link></div><div><span className="eyebrow">AUTHOR RESOURCE</span><h2>Not ready to send the manuscript?</h2><p>Use the Author’s Manuscript Readiness Checklist to identify clusters of uncertainty before asking someone else to read the book.</p><Link className="text-link" href="/resources">Explore author resources →</Link></div></div></section>

<section className="section final-cta"><div className="container narrow"><span className="eyebrow">START WITH HARRY STONES</span><h2>Something is not working. Start with the question.</h2><p>Tell Harry Stones what you are seeing, what your readers have said, what you have already tried, and what you most need to know. Second Pair Editorial remains your official point of responsibility from enquiry through delivery; you do not have to choose the perfect service first.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><p className="contact-line">Prefer email? Write to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></p></div></section>
</main>}
