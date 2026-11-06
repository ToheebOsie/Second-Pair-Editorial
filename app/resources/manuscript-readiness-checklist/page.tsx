import type {Metadata} from 'next';
import Link from 'next/link';
import {BreadcrumbSchema} from '../../../components/StructuredData';
import {site} from '../../../config/site';
import {withSeo} from '../../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Author’s Manuscript Readiness Checklist',
  description: 'Use Second Pair Editorial’s 70-point manuscript readiness checklist to assess story, character, pacing, continuity, prose and revision readiness before sending your manuscript to a beta reader or editor.',
  alternates: {canonical: `${site.website}/resources/manuscript-readiness-checklist`},
}, '/resources/manuscript-readiness-checklist');

export default function ChecklistPage() {
  const url = `${site.website}/resources/manuscript-readiness-checklist`;
  return <main>
    <BreadcrumbSchema items={[{name: 'Home', url: site.website}, {name: 'Resources', url: `${site.website}/resources`}, {name: 'Manuscript Readiness Checklist', url}]} />
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">AUTHOR RESOURCE · 70 CHECKS</span>
      <h1>The Author’s Manuscript Readiness Checklist</h1>
      <p>Before you send your manuscript to a beta reader or editor, use this practical 70-point self-assessment to spot areas that may need another look.</p>
      <a className="button" href="/Second-Pair-Editorial_Authors-Manuscript-Readiness-Checklist.pdf" target="_blank" rel="noreferrer">Download the Checklist</a>
    </div></section>
    <section className="section"><div className="container detail-grid">
      <div><span className="eyebrow">WHAT IT COVERS</span><h2>Take a look at the story before you send it to someone else.</h2><ul className="feature-list"><li>Opening, hook and first-chapter momentum</li><li>Story, character choices and reader expectations</li><li>Character voice, dialogue and emotional reactions</li><li>Pacing, structure, scene purpose and repetition</li><li>Worldbuilding, clarity, setup and payoff</li><li>Point of view, prose, voice and readability</li><li>Emotional effect and readiness for outside feedback</li></ul></div>
      <div className="detail-box"><span className="eyebrow">HOW TO USE IT</span><p>Mark each check honestly, then look for clusters rather than treating the checklist as a literary-quality score.</p><p>If several checks point to the same problem, you may need another round of your own revision, a reader’s opinion, an assessment or a deeper edit.</p><Link className="button" href="/request-sample">Request a Sample Read</Link></div>
    </div></section>
    <section className="section alt"><div className="container narrow"><span className="eyebrow">SECOND PAIR INSIGHTS</span><h2>Work out what kind of help you need.</h2><p>We can help you work out whether you need a reader, an assessment, editing, another revision or a final proofread. You do not have to buy the biggest service.</p><Link className="text-link" href="/services">Explore editorial services →</Link></div></section>
  </main>;
}
