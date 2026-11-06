import type {Metadata} from 'next';
import {site} from '../../config/site';

export const metadata: Metadata = {
  title: 'Service Terms',
  description: 'The service, scope, manuscript-handling, deletion and payment terms used by Second Pair Editorial.',
  alternates: {canonical: `${site.website}/terms`},
  robots: {index: false, follow: true},
};

export default function Terms(){return <main>
  <section className="page-hero"><div className="container narrow">
    <span className="eyebrow">SERVICE TERMS</span>
    <h1>Clear work, clear scope, careful manuscript handling.</h1>
    <p>These terms explain how enquiries become editorial projects, what is agreed before work begins, how manuscripts are handled, and where the limits of the service sit.</p>
  </div></section>
  <section className="section"><div className="container narrow prose">
    <h2>1. Who provides the service</h2>
    <p>Second Pair Editorial is a founder-led editorial practice directed by Harry Stones. Author enquiries, project scope, manuscript handling, communication and delivery are managed through the official Second Pair Editorial business contact.</p>
    <p>Where additional editorial input is needed, Second Pair Editorial coordinates that work and remains the author’s point of accountability. Any material change to the people, role or scope involved is explained before the relevant work begins.</p>

    <h2>2. An enquiry is not an engagement</h2>
    <p>A website form, email, sample submission or full-manuscript enquiry allows us to understand the author’s question and consider project fit. It is not acceptance of paid work, a booking, or a promise that a project will be undertaken.</p>
    <p>Our intended sequence is: acknowledge the enquiry, assess the question, invite sample pages if useful, then recommend a suitable scope and provide a quote. Paid work begins only after the scope, deliverables, price, timetable and payment arrangements have been agreed.</p>

    <h2>3. Scope and deliverables</h2>
    <p>The agreed service description, proposal or written confirmation defines the work. Published rates and minimum fees are indicative until the scope is confirmed. Diagnostic, revision-review and broader development work may require a scope conversation because the effort depends on the manuscript and the question.</p>
    <p>Unless specifically agreed in writing, services do not include full-manuscript rewriting, ghostwriting, author substitution, publication, representation, proofreading after substantial new revisions, or a guarantee of publication, sales or reader response.</p>
    <p>Additional rounds, substantial changes to the manuscript, accelerated turnaround, or work outside the agreed brief may require a separate agreement and quote.</p>

    <h2>4. Author responsibilities</h2>
    <p>The author is responsible for providing material they have the right to submit, accurate project information, a usable file, and clear instructions about the question they want the work to address. The author remains responsible for final creative decisions and for reviewing and approving any changes to the manuscript.</p>
    <p>The author should tell us before submission if the manuscript contains sensitive personal information, third-party confidential material, or material subject to a special handling requirement that the stated workflow cannot support.</p>

    <h2>5. Manuscript confidentiality and permitted use</h2>
    <p>We use a submitted manuscript only to assess or carry out the agreed editorial work, prepare agreed deliverables, and communicate with the author about that work. We do not use, reproduce, publish, sell, repurpose or place manuscript contents in a public portfolio without the author’s separate permission and approval.</p>
    <p>Second Pair Editorial does not use AI to edit manuscripts and does not use submitted manuscripts to train an AI system.</p>

    <h2>6. Deletion and working files</h2>
    <p>When the agreed work is complete, we confirm completion and deletion with the author. We then delete the submitted manuscript from the editorial inbox and delete working files created or downloaded for the project.</p>
    <p>Second Pair Editorial does not keep backup copies of submitted manuscripts. Working files may be attached to the project email when needed. If a manuscript needs to be downloaded locally to complete the work, we inform the author. Local working copies are deleted as part of the completion process.</p>
    <p>If an enquiry does not become a project, a submitted manuscript is not retained for future use. The deletion commitment applies to copies controlled by Second Pair Editorial; a third-party email or technology provider may retain transient technical copies under its own systems and policies.</p>

    <h2>7. Security and third-party transmission</h2>
    <p>Manuscripts submitted through the website are transmitted to the official business email through a transactional email provider. The website limits uploads to DOCX and PDF files within the stated size limit and performs basic file checks before delivery.</p>
    <p>Access is limited to people who need the material for the enquiry or agreed work. We do not place submitted manuscripts in a public folder. However, no email, internet transmission, third-party provider or local device can be guaranteed to be free from every possible security risk. Authors should not submit material through this route if those limitations are unacceptable for the manuscript.</p>

    <h2>8. Quotes, payment and timetable</h2>
    <p>A quote is based on the agreed manuscript, scope, deliverables and timetable. It is not binding until accepted in the agreed form. Work may not begin until the required payment or deposit arrangement has been completed.</p>
    <p>Turnaround begins when the required materials, decisions and payment arrangements are in place. Delays in receiving information, revisions, responses or corrected files may affect the timetable. Any revised timetable or additional work will be discussed with the author.</p>

    <h2>9. Editorial judgement</h2>
    <p>Editorial feedback describes a reading experience and the evidence that appears to support it. It is not a promise that every reader will respond in the same way, and it does not replace the author’s judgement. The author decides what to change, preserve or leave alone.</p>

    <h2>10. Cancellation or unsuitable fit</h2>
    <p>Either side may raise a concern about scope or fit before work begins. If we decide that the requested work is not suitable, we will explain that before accepting the project. If work has already begun, cancellation, payment and delivery consequences depend on the agreed proposal and the work completed to that point.</p>

    <h2>11. Changes to these terms</h2>
    <p>These terms may be updated when the service, workflow, technology providers or legal requirements change. The version applicable to an accepted project is the version agreed or linked when the project is confirmed.</p>

    <h2>12. Questions</h2>
    <p>Questions about scope, payment, manuscript handling or deletion should be sent to the official Second Pair Editorial address published on the website. These terms are operational information, not a substitute for legal advice; the final version should be reviewed for the jurisdiction and business structure in which the service operates.</p>
  </div></section>
</main>}
