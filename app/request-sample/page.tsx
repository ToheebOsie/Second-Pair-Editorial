import type {Metadata} from 'next';
import Link from 'next/link';
import {InquiryForm} from '../../components/InquiryForm';
import {RequestSampleForm} from '../../components/RequestSampleForm';
import {site} from '../../config/site';
import {withSeo} from '../../config/seo';

export const metadata: Metadata = withSeo({
  title: 'Start a Conversation',
  description: 'Tell Second Pair Editorial what feels uncertain in your manuscript. Begin with a conversation before sending sample pages or discussing scope.',
  alternates: {canonical: `${site.website}/request-sample`},
}, '/request-sample');

export default function RequestSample() {
  return <main>
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">START WITH THE QUESTION</span>
      <h1>Begin with a conversation, not an upload.</h1>
      <p>You do not need to know which editorial service you need, and you do not need to send your manuscript yet. Tell us what feels uncertain, what readers have said and what you need to understand. We will assess the question first and invite sample pages if they would help.</p>
    </div></section>
    <section className="section alt"><div className="container narrow"><span className="eyebrow">WHAT HAPPENS NEXT</span><h2>A clear sequence before any scope or quote.</h2><div className="journey-grid sample-journey"><div><b>01</b><p>We acknowledge your enquiry through the official Second Pair Editorial email.</p></div><div><b>02</b><p>We assess the question and the kind of answer you need.</p></div><div><b>03</b><p>If sample pages would help, we invite you to send a representative passage.</p></div><div><b>04</b><p>Only then do we recommend a suitable scope and provide a quote.</p></div></div></div></section>
    <section className="section"><div className="container form-shell"><InquiryForm/></div></section>
    <section className="section alt"><div className="container narrow"><span className="eyebrow">ALREADY READY TO SEND PAGES?</span><h2>Request a sample read directly.</h2><p>If you already know that sending up to 3,000 words is the right next step, you can use the fuller sample-request form. It also allows a full-manuscript review enquiry, with its own upload expectations.</p><div className="actions"><a className="button" href="#sample-form">Request a Sample Read or Submit a Full Manuscript</a><Link className="text-link" href="/privacy">Manuscript handling information →</Link></div></div></section>
    <section className="section" id="sample-form"><div className="container form-shell"><span className="eyebrow">DIRECT SAMPLE ROUTE</span><h2>Send pages when you are ready.</h2><p className="section-lead">The sample is a bounded demonstration, not a miniature paid edit or a diagnosis of the whole manuscript.</p><RequestSampleForm/></div></section>
  </main>;
}
