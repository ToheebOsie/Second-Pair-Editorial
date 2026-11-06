import type {Metadata} from 'next';
import Link from 'next/link';
import {services} from '../../config/services';
import {PricingCalculator} from '../../components/PricingCalculator';
import {site} from '../../config/site';
import {withSeo} from '../../config/seo';

const money = (amount: number, fractionDigits = 2) => `$${amount.toLocaleString('en-US', {maximumFractionDigits: fractionDigits, minimumFractionDigits: 0})}`;
const tiers = [
  { id: 'reader', number: '01', title: 'Reader insight', intro: 'Understand how the manuscript lands before committing to a deeper editorial intervention.', slugs: ['alpha-reading', 'beta-reading'] },
  { id: 'diagnosis', number: '02', title: 'Diagnosis & revision', intro: 'Identify the underlying problem, set priorities, or check whether a revision has addressed them.', slugs: ['manuscript-diagnostic', 'revision-review'] },
  { id: 'editing', number: '03', title: 'Editorial craft', intro: 'Choose the level of intervention that fits the manuscript—from structural development to final technical polish.', slugs: ['developmental-editing', 'line-editing', 'copy-editing', 'proofreading'] },
  { id: 'complete', number: '04', title: 'Longer-term support', intro: 'A coordinated, multi-stage route for manuscripts that need more than one kind of editorial help.', slugs: ['complete-manuscript-development'] },
] as const;

export const metadata: Metadata = withSeo({
  title: 'Pricing & Scope',
  description: 'Editorial starting rates, minimum project fees, and scope-led manuscript pricing from Second Pair Editorial.',
  alternates: {canonical: `${site.website}/pricing`},
}, '/pricing');

export default function Pricing() {
  return <main className="pricing-page">
    <section className="page-hero pricing-hero">
      <div className="container narrow">
        <span className="eyebrow">PRICING & SCOPE</span>
        <h1>Clear prices. The right level of editorial help.</h1>
        <p>Published rates and minimum fees are shown up front. Where the work depends on the manuscript’s specific needs, we agree the scope and price with you before work begins.</p>
        <div className="pricing-hero-note"><span className="pricing-note-mark">$</span><span><strong>No pressure to buy the biggest service.</strong><br />We recommend the smallest service capable of answering your real question.</span></div>
      </div>
    </section>

    <section className="pricing-intro section">
      <div className="container pricing-intro-grid">
        <div><span className="eyebrow">HOW PRICING WORKS</span><h2>Price follows the work—not the promise of a bigger package.</h2></div>
        <p>Reader-response services have published per-word rates. Editing rates are also shown per word, with minimum fees to account for the work every project requires. Diagnostic, revision-review, and complete-development projects start with a scope conversation because their effort varies more widely.</p>
      </div>
    </section>

    <section className="section alt pricing-services">
      <div className="container">
        <div className="pricing-section-heading"><span className="eyebrow">CHOOSE YOUR STARTING POINT</span><h2>Services at a glance</h2><p>Each service has a distinct job. Open its page for the full scope, deliverables, and exclusions.</p></div>
        <div className="pricing-tier-list">
          {tiers.map(tier => <section className={`pricing-tier pricing-tier-${tier.id}`} key={tier.id} aria-labelledby={`tier-${tier.id}`}>
            <div className="pricing-tier-heading"><span className="pricing-tier-number">{tier.number}</span><div><h3 id={`tier-${tier.id}`}>{tier.title}</h3><p>{tier.intro}</p></div></div>
            <div className="pricing-card-grid">
              {tier.slugs.map(slug => {
                const service = services.find(item => item.slug === slug)!;
                return <article className="pricing-service-card" key={service.slug}>
                  <div className="pricing-service-top"><h4><Link href={`/services/${service.slug}`}>{service.name}</Link></h4><p>{service.question}</p></div>
                  <div className="pricing-service-price">
                    <strong>{service.rate == null ? `From ${money(service.minimumFee)}` : <>{money(service.rate, 4)}<span>/word</span></>}</strong>
                    <span className="pricing-service-minimum">{service.rate == null ? 'Starting fee · custom quote' : `${money(service.minimumFee)} minimum`}</span>
                  </div>
                  <Link className="pricing-card-link" href={`/services/${service.slug}`}>Explore service <span aria-hidden="true">↗</span></Link>
                </article>;
              })}
            </div>
          </section>)}
        </div>

        <section className="pricing-calculator-panel" aria-labelledby="calculator-heading">
          <div className="pricing-section-heading pricing-calculator-heading"><span className="eyebrow">PLAN YOUR BUDGET</span><h2 id="calculator-heading">Estimate a starting price</h2><p>Use your approximate word count to compare published per-word services. Scope-led services show their starting fee instead.</p></div>
          <PricingCalculator />
          <p className="fine-print">Estimates are indicative, not binding quotes. Per-word services are subject to their minimum project fee. Diagnostic, revision-review, and complete-development projects are quoted after scope review. Manuscript condition, complexity, turnaround, and agreed deliverables can affect the final price.</p>
        </section>
      </div>
    </section>

    <section className="section pricing-principles">
      <div className="container pricing-principles-grid">
        <div><span className="eyebrow">BEFORE YOU COMMIT</span><h2>Know what the price includes.</h2><p>We agree the deliverables, scope, and turnaround before work begins. Additional rounds, substantial changes to the manuscript, or work outside the agreed brief are discussed and quoted separately.</p></div>
        <div className="pricing-principle-list"><div><span>01</span><p><strong>Clear scope</strong><br />You know what the service is—and what it is not.</p></div><div><span>02</span><p><strong>Human editorial work</strong><br />Editors carry out and review the manuscript editing.</p></div><div><span>03</span><p><strong>A suitable starting point</strong><br />You do not need to purchase several services by default.</p></div></div>
      </div>
    </section>

    <section className="section final-cta pricing-final-cta">
      <div className="container narrow"><span className="eyebrow">NOT SURE WHICH ROUTE FITS?</span><h2>Start with the problem you are trying to solve.</h2><p>Tell us what is happening in the manuscript and what you need to understand. We will recommend a suitable next step before asking you to commit.</p><Link className="button" href="/request-sample">Start With Your Manuscript Question</Link></div>
    </section>
  </main>;
}
