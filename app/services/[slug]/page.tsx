import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {services,getService} from '../../../config/services';
import {PricingCalculator} from '../../../components/PricingCalculator';
import {withSeo} from '../../../config/seo';
import {BreadcrumbSchema, StructuredData} from '../../../components/StructuredData';
import {site} from '../../../config/site';

export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}

const serviceSearchTerms: Record<string,string[]> = {
  'alpha-reading':['alpha reader','alpha reading for authors','early manuscript feedback'],
  'beta-reading':['beta reader','beta reading for authors','manuscript beta feedback'],
  'manuscript-diagnostic':['manuscript diagnostic','manuscript assessment','story diagnosis'],
  'developmental-editing':['developmental editing','developmental editor','story structure editing'],
  'revision-review':['revision review','manuscript revision feedback','post-revision assessment'],
  'line-editing':['line editing','line editor','prose editing'],
  'copy-editing':['copy editing','copy editor','manuscript copyediting'],
  'proofreading':['proofreading for authors','book proofreading','manuscript proofreading'],
  'complete-manuscript-development':['manuscript development','full manuscript editing','editorial development'],
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const s=getService(slug); if(!s)return {};
  const keywords=serviceSearchTerms[slug]||[];
  return withSeo({
    title: `${s.name} for Authors`,
    description: `${s.intro} ${s.idealFor}`,
    keywords,
  }, `/services/${s.slug}`);
}

const related: Record<string,string[]> = {
  'alpha-reading':['beta-reading','manuscript-diagnostic'],
  'beta-reading':['manuscript-diagnostic','revision-review'],
  'manuscript-diagnostic':['developmental-editing','beta-reading'],
  'developmental-editing':['manuscript-diagnostic','revision-review'],
  'revision-review':['developmental-editing','beta-reading'],
  'line-editing':['copy-editing','developmental-editing'],
  'copy-editing':['line-editing','proofreading'],
  'proofreading':['copy-editing','revision-review'],
  'complete-manuscript-development':['manuscript-diagnostic','developmental-editing'],
};

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const s=getService(slug); if(!s)return notFound();
  const url=`${site.website}/services/${s.slug}`;
  const relatedServices=(related[slug]||[]).map(getService).filter(Boolean);
  const faq = [
    [`Who is ${s.name} for?`, s.idealFor],
    [`What will I receive?`, s.deliverables.join(', ') + '.'],
    [`What is not included?`, s.notIncluded.join(', ') + '.'],
    [`What if I am not sure this is the right service?`, `You do not need to know the service name. Send a sample and tell us what is bothering you. We can help you work out what kind of help makes sense.`],
  ];
  return <main>
    <BreadcrumbSchema items={[{name:'Home',url:site.website},{name:'Services',url:`${site.website}/services`},{name:s.name,url}]} />
    <StructuredData data={{'@context':'https://schema.org','@type':'Service',name:s.name,description:s.intro,url,provider:{'@type':'ProfessionalService',name:site.name,url:site.website},serviceType:s.name,areaServed:'Worldwide'}} />
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">{s.group} · QUESTION-LED SERVICE</span>
      <h1>{s.name} for Authors</h1>
      <p>{s.intro}</p>
      <div className="actions"><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link><Link className="text-link" href="/how-we-read">See How We Read →</Link><Link className="text-link" href="/proof">See the proof →</Link></div>
    </div></section>

    <section className="section"><div className="container detail-grid">
      <div><span className="eyebrow">THE QUESTION</span><h2>{s.question}</h2><p>{s.idealFor}</p><span className="eyebrow">WHAT WE LOOK AT</span><ul className="feature-list">{s.focus.map(x=><li key={x}>{x}</li>)}</ul></div>
      <div className="detail-box"><span className="eyebrow">YOU RECEIVE</span><ul>{s.deliverables.map(x=><li key={x}>{x}</li>)}</ul><span className="eyebrow">NOT INCLUDED</span><ul className="muted-list">{s.notIncluded.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div></section>

    <section className="section alt"><div className="container narrow">
      <span className="eyebrow">HOW WE WORK</span>
      <h2>We start with what happened while we were reading.</h2>
      <div className="method-grid">
        <div><b>01 · WHAT HAPPENED</b><p>Where did we lean in, hesitate, get confused or lose interest?</p></div>
        <div><b>02 · WHERE IT HAPPENED</b><p>What scene, line, choice or piece of information caused that reaction?</p></div>
        <div><b>03 · DOES IT REPEAT?</b><p>Was it one rough spot, or does the same thing happen elsewhere?</p></div>
        <div><b>04 · WHAT MAY BE CAUSING IT?</b><p>We look past the symptom and consider the story, character, pacing or prose issue underneath it.</p></div>
        <div><b>05 · WHAT MATTERS MOST?</b><p>Which problem is worth tackling first, and which can wait?</p></div>
        <div><b>06 · YOUR CALL</b><p>You decide what stays and what changes. Our job is to give you a clear second opinion.</p></div>
      </div>
    </div></section>

    {s.rate!=null&&<section className="section"><div className="container"><span className="eyebrow">SCOPE & PRICING</span><h2>Known-scope work can be estimated. Diagnostic work is scoped to the question.</h2><p className="section-lead">Where a published rate applies, the calculator gives an estimate. Where the work depends on diagnosis, scope is confirmed after we understand the manuscript and the question.</p><PricingCalculator initialService={s.slug}/></div></section>}

    <section className="section alt"><div className="container narrow"><span className="eyebrow">BEFORE YOU BOOK</span><h2>Make sure you are getting the kind of help you actually need.</h2><p>If the manuscript is still changing, a reader may be more useful than an editor. If something feels wrong but you cannot find the cause, an assessment may be the better starting point. If the story is settled and the prose is the concern, line or copy editing may make more sense.</p><Link className="text-link" href="/services">Compare all services →</Link>{slug==='beta-reading' ? <p className="muted">Still deciding how to get feedback? Read <Link href="/resources/how-to-get-useful-beta-reader-feedback">how to get useful feedback from beta readers</Link> or compare <Link href="/resources/free-vs-paid-beta-readers">free and paid beta-reading options</Link> before choosing.</p> : null}</div></section>

    {relatedServices.length>0&&<section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">IF YOU ARE ALSO CONSIDERING</span><h2>Other services that may fit.</h2></div><Link className="text-link" href="/services">See all services →</Link></div><div className="service-grid">{relatedServices.map((r:any)=><Link className="service-card" href={`/services/${r.slug}`} key={r.slug}><span className="eyebrow">{r.group}</span><h3>{r.name}</h3><p>{r.question}</p><span className="text-link">Learn more →</span></Link>)}</div></div></section>}

    <section className="section"><div className="container narrow"><span className="eyebrow">QUESTIONS</span><h2>Before you send the manuscript.</h2><div className="faq-list">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="section final-cta"><div className="container narrow"><h2>{s.rate==null?'Need help working out the scope?':'Want to see how we approach your pages?'}</h2><p>Send a sample and tell us what is bothering you. We will help you work out what makes sense before you commit to a larger project.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div></section>
  </main>
}
