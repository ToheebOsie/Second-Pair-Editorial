# TODO — Feedback-to-Final Manuscript and Phase 1 Onboarding

## Delivered: landing page and discovery paths

The site includes `/start/feedback-to-final-manuscript` using the existing Second Pair Editorial shell and brand system. It includes the cost-saving promise, Calibrate → Interpret → Polish process, package eligibility, readiness gate, payment schedule, $35 per 1,000 words pricing examples, service boundaries, FAQ, and CTAs to `/request-sample` and `/how-we-read`.

The package is linked from the footer Start here group, the Start hub, and the Resources hub. The route is registered in `app/sitemap.ts`, with page-level title, description, canonical URL, Open Graph and Twitter metadata through the existing SEO helper.

## Delivered: homepage visibility

The homepage now features the Feedback-to-Final Manuscript package immediately below the hero with the approved Calibrate → Interpret → Polish pathway, cost-reduction positioning, and a direct link to the package page. The hero also includes a secondary discovery link, while the existing primary manuscript-question CTA remains unchanged.

The page states that the package is designed to reduce or avoid a separate full developmental edit when evidence supports that outcome, but does not guarantee that every author will avoid developmental work. It also explains that the manuscript may be paused or escalated when major structural questions remain unresolved.

## Delivered: humanized package-page language

The package copy was revised using the supplied editorial corpus for a more natural author-facing voice. Abstract phrases such as “modular pathway,” “evidence boundaries” and “readiness recommendation” were replaced with direct explanations of what is read, what the author receives, what the questions can show, and what to do next.

## Delivered: second prose pass

The page was reviewed again for repeated “not X, but Y,” “if X, then Y,” and similar binary contrast rhythms. Persuasive sections now use more varied sentences and direct explanations; conditional wording remains only where it is needed for accurate pricing, scope and readiness terms.

## Delivered: hybrid modular pricing pathway

The package page now presents Feedback-to-Final Manuscript as one pathway with optional stages rather than a compulsory bundle. Full-Manuscript Beta Calibration is the standalone paid entry stage at $12 per 1,000 words with a $750 minimum, paid 50% to begin and 50% before delivery. It includes a complete read, manuscript-specific beta-reader questions, evidence boundaries and a readiness recommendation.

The page explains that feedback interpretation and line/copy editing are chosen only if needed, that the calibration fee is credited in full toward an agreed line-and-copy editing scope confirmed within 30 days, and that authors do not pay for sentence-level editing when revision or deeper developmental work comes first.

## Delivered: private Phase 1 onboarding

Add the private route `/onboarding/feedback-to-final-manuscript`. It must remain out of the public navigation and use the existing site shell. The route must be noindex and require the manually issued `ONBOARDING_ACCESS_TOKEN` query token before showing the onboarding form.

The onboarding form must use seven steps: Project; Intended effect; Current uncertainty; Reader evidence; Manuscript context; Editing expectations; Consent and submission. It must use conditional fields for existing feedback, revisions, series context and real deadlines. It must accept the current manuscript plus optional feedback, previous-version and supporting files as DOCX or PDF uploads.

Add the server endpoint `/api/feedback-to-final-onboarding`. It must validate the private token, required fields, email format, file extension, MIME type, file signature, per-file size and combined upload size. It must send a structured internal calibration brief with attachments to the configured editorial inbox through Resend and send a confirmation email to the author.

Use the existing Resend variables and add `ONBOARDING_ACCESS_TOKEN` to `.env.example`. The token must be set to a long random value in production and sent manually only after the 20% deposit is confirmed. Phase 1 does not automate payment verification, token generation or project status storage.

Add the internal calibration brief template at `docs/internal-calibration-brief.md` and register the website page route set in `public/manus-routes.json`, excluding API and asset routes.

## Future: Phase 2 payment and project records

Add a verified payment provider webhook, project database, signed or hashed onboarding tokens, automatic onboarding email and payment/onboarding statuses. Do not unlock onboarding based solely on a client-side payment-success redirect.

## Future: Phase 3 internal calibration workspace

Add authenticated staff access, questionnaire response viewing, calibration brief editing, question-set drafting and approval, clarification requests, secure document delivery and version history.

## Future: Phase 4 feedback calibration and readiness decision

Add beta-response uploads, pattern mapping, feedback classification, revision priorities, readiness decisions, the 40% milestone trigger and line/copy editing handoff.
