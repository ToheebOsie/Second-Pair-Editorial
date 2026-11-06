import type {Metadata} from 'next';
import {site} from '../../config/site';

export const metadata: Metadata = {
  title: 'Privacy & Manuscript Security',
  description: 'How Second Pair Editorial receives, protects, uses and deletes author enquiries and manuscript files.',
  alternates: {canonical: `${site.website}/privacy`},
  robots: {index: false, follow: true},
};

export default function Privacy(){
  return <main>
    <section className="page-hero"><div className="container narrow">
      <span className="eyebrow">PRIVACY &amp; MANUSCRIPT SECURITY</span>
      <h1>Your manuscript is handled for one purpose: the work you asked us to consider.</h1>
      <p>Second Pair Editorial treats an author’s manuscript as confidential working material. We use it to assess or carry out the agreed editorial work, not to build a public portfolio, train an AI system, or create a separate content library.</p>
    </div></section>
    <section className="section"><div className="container narrow prose">
      <h2>What we receive</h2>
      <p>A conversation enquiry may include your name, email address, genre or form, approximate word count, start window, discovery source, description of the uncertainty in your manuscript, and optional reader or editor feedback.</p>
      <p>A direct sample or full-manuscript request may also include a book title, manuscript stage, selected service, project questions, a DOCX or PDF file, and the information needed to assess whether the requested work is a suitable fit.</p>

      <h2>How a manuscript is used</h2>
      <p>We use a submitted manuscript only to review the material, understand the author’s question, assess project fit, carry out the agreed editorial work, prepare the agreed deliverables, and communicate with the author about that work.</p>
      <p>We do not use, reproduce, publish, sell, repurpose or place manuscript contents in a public portfolio without the author’s separate permission and approval. We do not use manuscripts to train an AI system. Second Pair Editorial does not use AI to edit manuscripts.</p>

      <h2>Our deletion commitment</h2>
      <p>When the agreed editorial work is complete, we confirm completion and deletion with the author. We then delete the manuscript from the editorial inbox and delete working files created or downloaded for the project.</p>
      <p>Second Pair Editorial does not keep backup copies of submitted manuscripts. Working files may be attached to the project email when needed for the work. If a manuscript needs to be downloaded locally to complete the work, we inform the author. Local working copies are deleted as part of the completion process.</p>
      <p>If an enquiry does not become a project, we do not retain the manuscript for future use. If a file was submitted for assessment, we delete it after the assessment and any necessary response, subject to unavoidable retention by the email or technology provider used to transmit it.</p>

      <h2>How we protect the material</h2>
      <p>Manuscripts are submitted through the website to the official Second Pair Editorial email. The site accepts only DOCX and PDF uploads within the stated size limit and checks the declared file type, file extension and basic file signature before delivery.</p>
      <p>Access is limited to the people who need the material for the enquiry or agreed editorial work. We do not place submitted manuscripts in a public uploads folder or expose them through a public website route.</p>
      <p>No online system can honestly promise that transmission, email, storage or local devices are free from every possible security risk. We maintain the handling controls described here, but the author should not send material through this form if the file cannot be transmitted through a third-party email service.</p>

      <h2>Transactional email and technology providers</h2>
      <p>The website uses a transactional email provider to transmit enquiry messages, confirmations and uploaded attachments. That provider may process message content and files as necessary to deliver the email. The provider’s own systems, logs, backups and retention practices are outside Second Pair Editorial’s direct control.</p>
      <p>Our deletion commitment applies to the copies and working files controlled by Second Pair Editorial. It is not a claim that a third-party provider can erase every transient technical copy at the exact moment we delete our own copy. We do not send manuscript contents to analytics tools.</p>

      <h2>Contact details and enquiry attribution</h2>
      <p>We use contact details to respond to an enquiry, assess project fit, arrange the agreed work, deliver materials, and communicate about deletion or follow-up. A conversation enquiry does not automatically subscribe you to marketing.</p>
      <p>If you submit an enquiry, the form may include the page where your visit began, the last page you viewed before submitting, a referring website’s domain or path, and standard campaign tags such as UTM source or campaign. This limited context is kept in your browser session and sent to us only if you submit the form. It is used to understand which pages and discovery routes lead to relevant enquiries; it is not used to build a cross-site profile.</p>

      <h2>Optional website analytics</h2>
      <p>With your permission, the website initializes Google Analytics (measurement ID G-RB9DS44MBZ) to understand aggregate website use. The tag is not loaded before you opt in. You can change or withdraw your choice through the Cookie settings link in the footer.</p>
      <p>Analytics providers may process technical information such as device and browser details, pages viewed and approximate usage data. The analytics choice does not authorize us to send manuscript contents or request-form uploads to Google Analytics.</p>

      <h2>Your questions and requests</h2>
      <p>For questions about a submitted manuscript, deletion, contact details or this policy, contact Second Pair Editorial through the official address published on the website. We will explain what we hold, what stage the work has reached, and what deletion step applies.</p>
      <p>This page describes the operational handling policy used by Second Pair Editorial. It is not a substitute for jurisdiction-specific legal advice, and the final public version should be checked against the business structure, service providers and privacy laws applicable to the authors served.</p>
    </div></section>
  </main>;
}
