import type {Metadata} from 'next';
import Link from 'next/link';
import {services} from '../../config/services';
import {site} from '../../config/site';
import {withSeo} from '../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Editorial Services for Authors',
  description: 'Alpha reading, beta reading, manuscript assessment, developmental editing, revision review, line editing, copy editing and proofreading for authors.',
  alternates: {canonical: `${site.website}/services`},
}, '/services');

const journey = [
  ['READ', 'See how the story is coming across while we read it.', 'Alpha Reading · Beta Reading'],
  ['ASSESS', 'Work out what is not working before choosing a bigger edit.', 'Manuscript Diagnostic'],
  ['DEVELOP', 'Work on the story-level changes that matter most.', 'Developmental Editing'],
  ['REFINE', 'Improve the prose without sanding away the writer’s voice.', 'Line Editing · Copy Editing'],
  ['POLISH', 'Catch the errors that remain after the editing is done.', 'Proofreading'],
  ['REVIEW', 'See whether a new draft actually fixed the important problems.', 'Revision Review'],
  ['COMPLETE', 'Combine several stages when one manuscript needs longer-term help.', 'Complete Manuscript Development'],
] as const;

const routing = [
 ['“I want to know how the story lands.”','Beta Reading','A close read of a finished or nearly finished manuscript.'],
 ['“The story is still taking shape.”','Alpha Reading','Reader feedback while the manuscript is still changing.'],
 ['“Something is wrong, but I cannot tell what.”','Manuscript Diagnostic','A focused look at what may be causing the problem.'],
 ['“I know what is wrong. I need help changing it.”','Developmental Editing','Detailed story-level feedback and revision help.'],
 ['“I revised. Did the changes actually work?”','Revision Review','A fresh look at the new draft.'],
 ['“The story works; the prose needs work.”','Line Editing','Sentence- and scene-level editing while protecting your voice.'],
 ['“The manuscript is settled; I need technical consistency.”','Copy Editing','Grammar, punctuation, word use and consistency.'],
 ['“I am at the final stage.”','Proofreading','A final check before submission or publication.'],
];

export default function Services(){
  return <main>
    <section className="page-hero"><div className="container narrow"><span className="eyebrow">SERVICES</span><h1>Editing help for the problem you are trying to solve.</h1><p>Not every manuscript needs the same kind of work. We start with where your book is now, what is bothering you and what kind of help will actually be useful.</p><div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See How We Read →</Link></div></div></section>

    <section className="section"><div className="container"><div className="detail-grid"><div><span className="eyebrow">HOW THE SERVICES FIT TOGETHER</span><h2>Read first. Work out the problem. Then edit what needs editing.</h2><p>Sometimes you need a reader. Sometimes you need someone to help find the problem. Sometimes you already know the problem and need help fixing it. The service should match the job.</p></div><div className="detail-box">{journey.map(([stage, description, serviceNames])=><div key={stage} style={{marginBottom:'1.1rem'}}><span className="eyebrow">{stage}</span><p style={{marginBottom:'.25rem'}}>{description}</p><small>{serviceNames}</small></div>)}</div></div></div></section>

    <section className="section alt"><div className="container narrow"><span className="eyebrow">START WITH THE PROBLEM</span><h2>You do not need to know the service name before you contact us.</h2><p>You may only know that the pacing feels slow, the ending falls flat, a character feels distant, or the prose is not doing what you want. That is enough to start the conversation.</p><div className="routing-list">{routing.map(([problem,serviceName,description])=><div className="routing-row" key={serviceName}><div><b>{problem}</b><p>{description}</p></div><Link className="text-link" href={`/services/${services.find(s=>s.name===serviceName)?.slug}`}>{serviceName} →</Link></div>)}</div></div></section>

    <section className="section"><div className="container service-list">{services.map((s,i)=><Link href={`/services/${s.slug}`} className="service-row" key={s.slug}><span>{String(i+1).padStart(2,'0')}</span><div><small>{s.group}</small><h2>{s.name}</h2><p>{s.question}</p></div><strong>{s.rate==null?'Scope-based':'Published rate'}</strong><em>→</em></Link>)}</div></section>

    <section className="section alt"><div className="container narrow"><span className="eyebrow">OUR APPROACH</span><h2>Feedback is useful when it leaves you clearer about what to do next.</h2><p>We tell you what we noticed, show you where it happens, explain what may be behind it and help you decide what deserves attention first. You still make the creative decisions.</p><Link className="text-link" href="/about">More about how we work →</Link></div></section>

    <section className="section final-cta"><div className="container narrow"><span className="eyebrow">NOT SURE WHERE TO START?</span><h2>Send us the pages and tell us what is bothering you.</h2><p>A bounded sample lets you see how we approach the work before deciding whether a larger project makes sense.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div></section>
  </main>
}
