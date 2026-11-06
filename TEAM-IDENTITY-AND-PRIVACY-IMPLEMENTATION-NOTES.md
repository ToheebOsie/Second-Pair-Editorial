# Team Identity and Manuscript Trust — Implementation Notes

## Public positioning implemented
- Second Pair Editorial is described as a network of independent editors working under one brand and a shared reader-centred method.
- The public-facing identity is collective; no invented individual biographies or credentials have been added.
- The site says review scope depends on service, project and complexity. It does not promise a second-editor review on every project.
- The shared method remains Experience → Evidence → Pattern → Diagnosis → Priority → Author Decision.

## Before making stronger privacy promises
Confirmed public policy: manuscripts are sent directly to the editorial inbox. When the editorial work is complete, the team confirms completion and deletion with the author, then deletes the manuscript and any copies downloaded or created for the work. Manuscript contents are not used, reproduced, published or repurposed for another purpose without the owner’s permission and approval. AI is not used to edit manuscripts; editors carry out and review editorial work. This does not imply that no third-party digital service processes contact details or submitted files.

### Decisions to document
1. **Access:** Which roles may open a submitted manuscript? Can all network editors access the editorial inbox, or only the assigned editor and intake lead?
2. **Assignment:** What information is shared with a prospective editor before the project is accepted? Is client consent needed before broader review?
3. **Non-manuscript records:** Define retention for enquiries, contact details, project correspondence and any copies or backups distinct from the manuscript itself.
4. **Deletion operations:** Operational follow-through: assign an owner to confirm completion with the author and delete the manuscript and all downloaded/working copies. Include email attachments and any backups or third-party-held copies in the procedure; do not state that a copy was deleted unless it was actually removed or its status is accurately disclosed.
5. **AI and editorial work:** Confirmed policy: Second Pair does not use AI to edit manuscripts; editing is carried out and reviewed by editors. This statement does not by itself establish that no third-party service ever processes submitted files or contact details. Document any such services and their terms separately before making broader claims about AI processing or training.
6. **Subprocessors:** Email delivery, hosting, file transfer, analytics and other providers that may handle personal data or manuscript files; identify their relevant privacy terms.
7. **Incident handling:** Who responds if a manuscript is sent to the wrong recipient or a vendor/security incident occurs?
8. **Large files:** The current upload limit is 10 MB. Define a genuinely approved alternative before describing it as secure.
9. **Client terms:** Include confidentiality, permitted access, use of tools, retention/deletion, scope of work and any exceptions in the client agreement.

## Review and quality-control model to formalize
- Map each service to whether review is performed by the assigned editor, lead editor, or another editor.
- State when additional review is required, optional, or out of scope.
- Define what a review checks (evidence traceability, service boundary, clarity, consistency, unsupported certainty), who records it, and how disagreements are resolved.
- Do not advertise routine second-editor review unless operationally true for the service being sold.

## QA performed on this update
Source-level checks should confirm route imports, navigation links, responsive CSS presence, no invented team member credentials, no universal second-review promise, and correct sample-vs-full-manuscript confirmation wording. Production build, live form delivery, and browser visual QA require a configured runtime and must be checked separately.
