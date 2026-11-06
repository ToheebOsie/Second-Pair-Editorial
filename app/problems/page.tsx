import type {Metadata} from 'next';
import Link from 'next/link';
import {site} from '../../config/site';
import {withSeo} from '../../config/seo';
export const metadata: Metadata = withSeo({title:'Manuscript Problem Library',description:'Start with the manuscript problem in plain language. Learn what the symptom can mean, what evidence to inspect, and where professional diagnosis can help.',alternates:{canonical: `${site.website}/problems`}}, '/problems');
const problems=[
 ['opening-feels-slow','Why does my opening feel slow?','Investigate curiosity, stakes, information, character goals and scene function—not just word count.'],
 ['readers-understand-but-dont-care','Why do readers understand my plot but not care?','Separate comprehension from emotional investment, consequence and character attachment.'],
 ['beta-readers-disagree','Why do beta readers disagree?','Separate preference, expectation, genuine contradiction and recurring manuscript evidence.'],
 ['pacing-problem','Is my pacing problem really a pacing problem?','Find out whether perceived slowness comes from progression, repetition, information or consequence.'],
 ['character-makes-sense-to-me','Why does my character make sense to me but not my readers?','Compare author knowledge with what the page actually makes legible.'],
 ['characters-sound-the-same','Why do my characters sound the same?','Look beyond vocabulary to worldview, rhythm, reaction patterns and dialogue function.'],
 ['worldbuilding-too-much','How much worldbuilding is too much?','Examine relevance, timing, consequence and the relationship between information and action.'],
 ['confusing-vs-productive-mystery','How do I tell confusing mystery from productive mystery?','Distinguish useful uncertainty from missing orientation and unusable questions.'],
 ['middle-feels-slow','Why does my middle feel slow when every scene seems necessary?','Investigate repeated narrative function, delayed consequence and weak progression.'],
 ['revision-worked','How do I know whether my revision actually fixed the problem?','Compare intended change with actual change in reading experience.'],
 ['editor-and-beta-disagree','What should I do when my editor and beta readers disagree?','Separate editorial judgment, reader response, preference and underlying evidence.'],
 ['too-much-feedback','I have lots of feedback. How do I know what actually matters?','Turn comments into evidence, patterns, priorities and decisions.'],
 ['opening-has-too-much-setup','Does my opening have too much setup?','Separate useful context from information the reader has no reason to care about yet.'],
 ['first-chapter-is-confusing','Why is my first chapter confusing readers?','Distinguish productive mystery from missing orientation and unclear action.'],
 ['hook-loses-momentum','Why does my story lose momentum after a strong hook?','Check whether the scenes after the opening develop the promise it creates.'],
 ['not-connecting-with-protagonist','Why are readers not connecting with my protagonist?','Explore interest, agency, desire and emotional access without forcing likability.'],
 ['inciting-incident-feels-late','Why does my inciting incident feel too late?','Examine what the opening establishes and what the central story promises.'],
 ['scenes-feel-slow','Why do scenes feel slow even when nothing seems wrong?','Find out whether a scene changes the situation, relationship or reader expectation.'],
 ['story-feels-rushed','Why does my story feel rushed?','Identify missing preparation, transitions and room for consequences to register.'],
 ['ending-feels-rushed','Why does my ending feel rushed?','Check whether the ending delivers the resolution and emotional closure the story promised.'],
 ['chapters-feel-disconnected','Why do my chapters feel disconnected?','Trace the choices, consequences and open questions carried between chapters.'],
 ['too-many-scenes-seem-important','What if too many scenes seem important to cut?','Compare scene functions across a sequence rather than judging each in isolation.'],
 ['character-motivation-unclear','Why is my character’s motivation unclear?','Compare a character’s choices with the evidence readers have been given.'],
 ['protagonist-feels-passive','Why does my protagonist feel passive?','Look at whether the protagonist’s choices shape what happens next.']
];
export default function Problems(){return <main><section className="page-hero"><div className="container narrow"><span className="eyebrow">PROBLEM LIBRARY</span><h1>You do not need the right editorial vocabulary to ask the right question.</h1><p>Start with the problem as you experience it. Each guide explains what the symptom can mean, what to inspect, and when a professional investigation becomes useful.</p></div></section><section className="section"><div className="container concern-grid">{problems.map(([slug,title,desc])=><Link className="service-card" href={`/problems/${slug}`} key={slug}><h2>{title}</h2><p>{desc}</p><span className="text-link">Read the investigation →</span></Link>)}</div></section><section className="section alt"><div className="container narrow"><span className="eyebrow">WHEN YOU STILL CANNOT NAME THE PROBLEM</span><h2>That is a valid starting point too.</h2><p>Tell us what you are seeing, what readers have said and what you have already tried. You do not need to choose the service before the investigation begins.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div></section></main>}
