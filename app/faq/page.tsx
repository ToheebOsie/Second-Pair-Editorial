import type {Metadata} from 'next';
import {StructuredData} from '../../components/StructuredData';
import {site} from '../../config/site';
import {withSeo} from '../../config/seo';

export const metadata: Metadata = withSeo({ title: 'FAQ for Authors', description: 'Answers to common questions about alpha and beta reading, developmental editing, pricing, sample reads, files, turnaround and manuscript support.', alternates: {canonical: `${site.website}/faq`} }, '/faq');
const faqs=[
 ['What if I know something feels wrong but cannot explain it?','That is common. You do not need to diagnose the manuscript before asking for help. Tell us what you are noticing—slow pacing, flat characters, confusing scenes, weak dialogue, a difficult opening, or simply a feeling that something is off—and we can look for the pattern behind it.'],
 ['Can you tell me if my first chapter works?','Yes. The opening is often where we can see several problems at once: unclear stakes, too much explanation, a weak reason to continue, or a character the reader has not connected with yet. We can focus a sample or a larger read on the opening if that is your main concern.'],
 ['What if I disagree with your feedback?','That is allowed. Our job is to tell you honestly what we experienced as readers and explain why. You know the book and your intentions better than we do. The feedback is there to help you make a decision, not make the decision for you.'],
 ['Alpha vs. Beta?','Alpha Reading is for a story that is still changing. It gives you a reader’s view of what is working and what may need attention while you are still revising. Beta Reading is for a complete or nearly complete story and focuses on how the finished book comes across.'],
 ['What is a Manuscript Diagnostic?','A focused look for authors who know something is not working but cannot find the cause. We look at the story, point to the problem and suggest what to work on next.'],
 ['What is Revision Review?','It is a fresh read after you have revised. We look at what changed, what improved, what still needs work and whether the changes created new problems.'],
 ['What is Complete Manuscript Development?','It is a longer project that combines several kinds of help when one manuscript needs them. We agree on the stages after looking at the book instead of putting every author through the same package.'],
 ['What is the sample read?','It is a bounded sample of our feedback so you can see how we read and how we approach the question you have brought us.'],
 ['Do you rewrite manuscripts?','No. We can flag issues, explain why they matter and suggest revision directions, but we do not ghostwrite or rewrite the full manuscript for you.'],
 ['How do I choose a service?','Start with the problem you are seeing. If you are unsure, send a sample and tell us what is bothering you. We can help you work out where to start.'],
 ['How is pricing calculated?','Published per-word services use word count × the service rate, subject to a minimum project fee. Manuscript Diagnostic, Revision Review and Complete Manuscript Development have starting fees and are quoted after scope review. The calculator is an estimate, not a final quote.'],
 ['What files can I send?','DOCX and PDF are accepted. DOCX is preferred for editing because it supports comments and tracked changes.'],
 ['How long does a project take?','Turnaround depends on manuscript length, service and current availability. A timeline is confirmed before the project begins.'],
];
export default function FAQ(){return <main><StructuredData data={{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))}} /><section className="page-hero"><div className="container narrow"><span className="eyebrow">FAQ</span><h1>Questions authors usually ask.</h1><p>Not sure where to start? Send a sample and tell us what is bothering you.</p></div></section><section className="section"><div className="container faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section></main>}
