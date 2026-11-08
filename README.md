# Second Pair Editorial — website

A Next.js/React/TypeScript editorial studio site for **Second Pair Editorial**, founded by Harry Stones. Current source package: **5.21.3**.

## Positioning
**Find out what your manuscript is actually doing to a reader.**

The site now reflects a problem-first, diagnostic commercial journey with the editorial services downstream:
READ → DIAGNOSE → DEVELOP → REFINE → POLISH → REVISE → COMPLETE

## Feedback to Final Manuscript

The public offer includes one integrated, manuscript-specific editorial question package with three distinct guides: guided beta-reading questions for real readers, guided critique questions for craft-focused partners, and guided self-editing questions for the author. Feedback interpretation and line/copy editing remain later services when the author has responses and the manuscript is ready. The private intake captures author intention, current uncertainty, beta-reader evidence, critique-partner evidence, manuscript context and editing expectations.

## Services
- Alpha Reading — $0.006/word (minimum $350)
- Beta Reading — $0.0045/word (minimum $300)
- Manuscript Diagnostic — custom scope
- Developmental Editing — $0.030/word (minimum $1,800)
- Revision Review — custom scope
- Line Editing — $0.025/word (minimum $1,200)
- Copy Editing — $0.022/word (minimum $900)
- Proofreading — $0.016/word (minimum $600)
- Complete Manuscript Development — custom scope

## Included
- Brand migration from Harry Stones Editorial to Second Pair Editorial
- Plain-language, problem-first homepage positioning
- Full editorial journey and service routing
- Sample read CTA
- Author’s Manuscript Readiness Checklist resource
- Resources / Second Pair Insights page
- Transparent pricing with custom-scope handling
- Expanded FAQ and About positioning
- Responsive mobile navigation
- Existing secure sample-request workflow
- Session-only enquiry attribution (first landing page, last page, referrer and UTM tags), included in enquiry emails
- Clearer sample-read expectations on the homepage
- Client-acquisition operating playbook and empty lead-pipeline CSV template

## Client acquisition operations

- `CLIENT-ACQUISITION-OPERATING-PLAYBOOK.md` explains lead stages and a monthly review loop.
- `LEAD-PIPELINE-TEMPLATE.csv` is a blank manual tracker. Do not store private manuscript content in it.
- Enquiry emails include best-effort source context. Paid outcomes and conversion stages still need to be recorded manually; no analytics vendor or CRM was added.

## Cookie consent and Google Analytics

- The consent banner offers **Accept all**, **Reject optional**, and **Cookie settings**.
- Google Analytics (`G-RB9DS44MBZ`) and first-party enquiry-attribution storage are enabled only after the visitor allows analytics, or on a later visit if a saved permission exists.
- Rejecting optional analytics does not load the Google Analytics script.
- Visitors can reopen Cookie settings from the footer and change or withdraw their choice.
- Consent is stored in the browser's local storage. If storage is unavailable, the banner remains available and analytics is not enabled unless accepted during that visit.
- This is a lightweight, site-specific consent control, not a certified third-party Consent Management Platform (CMP). Review legal requirements for the countries you target before relying on it for all jurisdictions.

## Google Analytics

- Google tag `G-RB9DS44MBZ` is installed once in the shared Next.js root layout, so it is included across the site's routes.
- The tag is loaded client-side using `next/script` with the `afterInteractive` strategy.
- Verify incoming traffic and route activity in the corresponding Google Analytics 4 property after deployment. This code change does not itself confirm that events are being received.

## Run
```bash
npm install
npm run dev
```

## Environment
Copy `.env.example` to `.env.local` and set:
- `RESEND_API_KEY`
- `ADMIN_EMAIL`
- `FROM_EMAIL`

`FROM_EMAIL` must be a sender/domain authorized by your transactional email provider. Keep the API key server-side.

## Note
The local fallback in `config/site.ts` remains `REPLACE-BEFORE-LAUNCH@example.com` if `NEXT_PUBLIC_CONTACT_EMAIL` is absent. The production deployment environment has the real contact email and HTTPS site URL configured, as confirmed by the site operator on 2026-10-15. Do not commit credentials or rely on local fallbacks in production. If either public environment variable is missing at build/runtime, metadata or contact details may fall back to local/placeholder values.

## Brand assets
The rebrand includes five logo treatments under `public/brand/`:
- `second-pair-header.png` — legacy light-background header lockup (retained as an asset, not used in the current UI)
- `second-pair-primary.png` — legacy primary light-background lockup (retained as an asset, not used in the current UI)
- `second-pair-dark.png` — current full logo treatment used throughout the site
- `second-pair-mono.png` — legacy monochrome treatment (retained as an asset, not used in the current UI)
- `second-pair-symbol.png` — compact SP symbol used as the favicon/app icon

The previous placeholder `editorial-mark.svg` has been removed so the old mark is not reused accidentally.

## Build validation
V5.16 release audit: static routes, internal links, metadata, canonical URLs, public-language claims, assets and sample-read safeguards were checked. V5.21.3 includes a copy/content pass and still requires the current TypeScript, lint, route/link and production-build checks in a dependency-complete environment. Do not treat this source update as deployed or production-certified.

## SEO implementation (V4)
The SEO layer now includes:
- Per-route titles and descriptions
- Canonical URLs derived from `NEXT_PUBLIC_SITE_URL`
- `sitemap.xml` and `robots.txt`
- Open Graph and X/Twitter metadata
- Branded 1200×630 social preview image
- ProfessionalService/Organization structured data
- Service structured data on individual service pages
- Breadcrumb structured data on service and checklist pages
- FAQ structured data on the FAQ page
- A crawlable HTML landing page for the manuscript-readiness checklist
- Server-rendered request-sample page with a client-only interactive form

### Required production environment
Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS production domain and `NEXT_PUBLIC_CONTACT_EMAIL` to the real business inbox before launch. The example values are intentionally placeholders.

## Service architecture update

The V5 service architecture is based on the Second Pair Editorial Intelligence review. Public service routing now follows READ → DIAGNOSE → DEVELOP → REFINE → POLISH → REVISE → COMPLETE, with an explicit smallest-sufficient-service principle and reader-experience methodology.

## V5.1 — Service Sales Copy & SEO Structure

- Expanded service detail pages with service-specific search metadata, clearer author-question positioning, methodology, related services, and service-specific FAQs.
- Expanded `/services` into a problem-first routing page so authors can identify the right editorial stage without knowing the service name.
- Added internal links between related services and stronger conversion paths to the sample read and pricing pages.
- Added reusable service-page methodology language: Experience → Evidence → Pattern → Diagnosis → Priority → Author Decision.
- Added responsive routing/methodology/service-card styling.
- Published pricing remains available for predictable services, while diagnostic/development routes are increasingly scope-led. No rates were invented during this transformation.

Note: a fresh production build still requires `npm install` in the project environment; the previous environment timed out during dependency installation, so this package is not represented as freshly production-built here.

## V5.3 conversion infrastructure

- Sample requests now require explicit manuscript-handling consent.
- Successful sample requests send the manuscript to the configured editorial inbox and send a separate confirmation email to the author.
- The author confirmation does not promise a turnaround or booking outcome; it confirms receipt and points the author back to the editorial approach.
- Privacy copy now documents the sample-request handling workflow and clarifies that a sample request does not automatically subscribe the author to marketing.


## V5.4 humanization pass

The public website copy was reviewed using the supplied manuscript-development pipeline humanization guidance. Customer-facing language was simplified, repeated AI-like phrasing was reduced, and headings and explanations were rewritten in plain professional language without changing service scope, pricing, claims or workflow. See `HUMANIZATION-AUDIT.md`.


## V5.5 — Corpus-informed improvements

- Added a corpus-informed author-concerns section to the homepage.
- Expanded the FAQ with common questions about openings, feedback disagreement, and diagnosing problems.
- Expanded the Author's Manuscript Readiness Checklist from 30 to 70 checks.
- Checklist now covers opening momentum, character choices, dialogue/voice, worldbuilding clarity, POV, prose, structure, emotional effect, and feedback readiness.
- Added `CORPUS-INTELLIGENCE-AND-BUSINESS-APPLICATIONS.md` documenting recurring concerns and how they can inform services, content, outreach, sample reads, and future lead magnets.


## V5.6 — Author Problems Library

- Added `AUTHOR-PROBLEMS-LIBRARY.md`, a corpus-informed internal library of recurring author concerns, sample-read questions, intake prompts and future content/service ideas.
- Added `/resources/author-problems`, a public plain-language guide built from the same concerns.
- Added the guide to the resource hub and sitemap.
- Updated the homepage checklist reference from 30 points to 55.
- The corpus is treated as qualitative editorial intelligence, not as a statistical survey or universal rulebook.

## Corpus-informed business system

This version includes an internal knowledge layer built from the supplied editorial corpus:
- `AUTHOR-PROBLEMS-LIBRARY.md` — recurring author concerns and reader questions
- `EDITORIAL-KNOWLEDGE-SYSTEM.md` — shared method for problem → evidence → pattern → priority → decision
- `CONTENT-ENGINE.md` — how one real author problem becomes useful content across platforms
- `SAMPLE-READ-PROTOCOL.md` — sample-read standards and question bank
- `CLIENT-INTAKE-AND-SERVICE-ROUTING.md` — problem-first intake and service routing

The public Author Problems resource and the manuscript-readiness PDF are also informed by this system.

## V5.8 client journey

- Added `CLIENT-JOURNEY-OPERATIONS.md` for inquiry-to-follow-up workflow.
- Added `INQUIRY-REVIEW-CHECKLIST.md` for consistent inquiry handling.
- Added `EMAIL-TEMPLATES.md` for sample, routing, quote, delivery and feedback messages.
- Added `PROJECT-HANDOFF-AND-FEEDBACK.md` for project setup, delivery and learning loops.
- Expanded the sample request form with start-window and discovery-source fields.
- Added a clear “what happens next” section to the sample request page.
- Improved the confirmation email to explain the actual next step in plain language.
- Added an internal routing hint to the sample-request admin email; it is a starting point, not an automatic service decision.


## V5.18.5 — Beta-reader discovery and supporting guides

**Release scope:** Add a practical, problem-led resource cluster around finding beta readers, getting useful feedback, choosing the right feedback role, and deciding between free and paid options. The content is intended to help authors make a good decision, not to imply that every author needs to hire an editor.

### Public resources added or updated

- `/resources/where-to-find-beta-readers` — cornerstone guide with five Goodreads groups and four user-verified Discord communities.
- `/resources/how-to-get-useful-beta-reader-feedback` — focused questions, reader expectations, and a method for separating reaction, explanation, and suggested fix.
- `/resources/free-vs-paid-beta-readers` — balanced comparison of volunteer readers, reciprocal exchanges, and paid services.
- `/resources/beta-reader-critique-partner-editor` — guidance on choosing alpha readers, beta readers, critique partners, advance readers/reviewers, and editors.
- `/resources/how-to-ask-someone-to-beta-read-your-novel` — request template, scope/timing guidance, and advice for low-response situations.

The four supporting guides are linked from the Resources hub and the discovery guide. Relevant existing problem pages link to the feedback guide; the beta-reading service page links to the new guidance. The new guide routes readers toward services only where the service fits the question.

### Community directory

Goodreads groups included:

1. FREE BOOKS for Book lovers: ARC & Polished Manuscript Readers for Authors
2. Get Honest Book Reviews without Review Swaps
3. Advance & Beta Readers
4. Alpha Betas
5. Beta readers and author

Discord communities included (community relevance verified by the site operator):

1. The Writing Hub — `https://discord.com/channels/764663217624055818/1419115911436173453`
2. Writer's Retreat — `https://discord.com/channels/1481323868865171528/1492339256306434199`
3. Writer Roundtable — `https://discord.com/channels/1311383674088067163/1351524018842370090`
4. Words Alike — `https://discord.com/channels/569145294676164608`

The page describes these as starting points, not endorsements or guarantees. Readers are instructed to verify current group rules and access conditions before posting or sharing a manuscript. Directory links should be rechecked periodically because community rules, activity, and access can change.

### Content principles and corpus safeguards

- Guides address concrete audience situations: unanswered requests, mismatched genre expectations, unrealistic workload/deadline assumptions, unclear feedback requests, conflicting reactions, and difficulty prioritising comments.
- The supplied author/reader/editor corpus is used as qualitative editorial intelligence, not a representative survey. It does not substantiate prevalence or search-volume claims.
- No usernames, identifiable private conversations, or manuscript excerpts are reproduced in the public guides.
- Free feedback is treated as a legitimate choice. Paid reading is presented as potentially useful for a defined scope, timeline, deliverable, or structured investigation—not as a guarantee of quality or publishing success.
- Role definitions are described as common conventions rather than universal rules.
- Search-query priorities are hypotheses until validated with Search Console or a keyword-data source. No monthly search-volume figures are claimed.

### End-to-end audit — 2026-10-15

The v5.18.5 archive was compared with the v5.18.4 base. Changes were confined to the four new guide routes, the discovery guide, the Resources hub, sitemap, beta-reading service page, problem-page template, twelve long-form drafts, twelve newsletter drafts, the CMS map, and the release/audit documentation.

Checks performed:

- **Archive and scope:** inspected the supplied v5.18.5 archive and diffed it against v5.18.4 to identify changes.
- **TypeScript/TSX syntax:** transpiled 41 `.ts`/`.tsx` files with the installed TypeScript transpiler; zero syntax diagnostics.
- **Internal route references:** checked static local links in the resource pages and hub against app routes, service slugs, and the dynamic problem library; no unresolved local route references were found in that check.
- **Canonical/metadata:** each of the five beta-reader resource pages has a page title, description, canonical URL, and Open Graph metadata.
- **Sitemap:** all five beta-reader resources are listed, alongside the 24 manuscript-problem routes and the Team page. `/resources/author-problems` is intentionally omitted because it permanently redirects to `/problems`.
- **Community details:** verified that all five Goodreads links and all four named Discord entries appear in the discovery guide.
- **Content map/draft references:** corrected numbered problem paths in all twelve long-form drafts and, during this end-to-end audit, found and corrected the same stale numbered paths in all twelve newsletter drafts. Canonical paths now match the actual unnumbered problem slugs. Six existing problem pages now include a practical test/exercise; three feedback-related problem pages link to the feedback guide.
- **Environment documentation:** clarified that local fallback values remain placeholders while the production environment variables are configured. Never commit secret values.
- **Privacy/claims review:** guides avoid presenting the corpus as statistical evidence, avoid identifiable source material, and do not guarantee community safety, response, or professional outcomes.

### Validation limits and remaining actions

- **Production build not verified.** `npm install --ignore-scripts --no-audit --no-fund` timed out in the audit environment. The syntax transpilation check is not a substitute for `npm run build`; run both in the normal development environment before deployment.
- **No package lockfile is included.** Dependency resolution is therefore less reproducible than it would be with a committed lockfile. Generate and commit the appropriate lockfile in the normal project environment after a successful install, if that matches the team's deployment workflow. `package.json` also retains the legacy package name `harry-stones-editorial` and version `0.1.0`; these do not change public URLs, but should be updated in a planned maintenance pass if release metadata is expected to reflect the current brand/version.
- **No live production crawl was performed as part of this repository audit.** After deployment, check each guide's HTTP response, canonical URL, rendered mobile/desktop layout, sitemap output, robots/indexability, external community links, and request-sample flow.
- **No analytics or ranking result is claimed.** Use Search Console and conversion tracking to measure impressions, clicks, guide-to-service navigation, sample requests, qualified enquiries, paid projects, and repeat work.
- **External community verification ages.** The site operator verified the Discord communities for relevance. Check the current access and rules again before treating the list as permanently current; do not imply that Second Pair guarantees safety or reader quality.

### Deployment checklist

1. In a dependency-complete environment, run `npm install` and `npm run build`.
2. Review the five resource pages on mobile and desktop.
3. Confirm production `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` remain set in the deployment environment; keep secrets out of source control.
4. Inspect the generated production sitemap and verify all five resource URLs are present and canonical.
5. Check the five page URLs return successfully and are indexable.
6. Click every Goodreads/Discord link and confirm access/rules have not changed.
7. Submit a test sample request using the production workflow and confirm the expected receipt/admin notifications without exposing real manuscript material.
8. After crawling, monitor Search Console queries and the commercial conversion path rather than using page count or raw traffic as the sole success metric.

## V5.18.8 — trust, tool behaviour, and release-readiness remediation (2026-10-15)

### Changes in this release
- Updated privacy, About, Team, and submission-form wording to state that, when editorial work is complete, the team confirms completion/deletion with the author and then deletes the manuscript and copies downloaded or created for the work. Manuscript contents are not reused for another purpose without the owner's permission and approval.
- Removed duplicated editorial-review language from the privacy page.
- Removed the implication that a secure large-file transfer method is already available. The form and API now explain that files over 10 MB cannot be submitted through this form and invite the author to contact the team to discuss whether an appropriate transfer method is available.
- Reworked `/tools/feedback-conflict` so it sorts each entered line using transparent, simple browser-side keyword rules. It explicitly states that this is a rough first pass, not AI or an editorial verdict, and says the entered comments are not sent to the server by the tool.
- Added a manuscript-deletion operational checklist and clarified known release-validation limits.

### Verification status
- Source-level checks and archive integrity checks are performed for this release.
- A passing TypeScript/Next.js production build, real-browser QA, and live Railway submission test are **not claimed** unless separately recorded after running them in a dependency-complete environment.
- The API's rate limiter remains in-memory and process-local. It is a basic abuse deterrent, not a durable/shared limit across multiple instances or restarts. Use a shared persistent rate-limit store before treating it as production-grade protection.
- Analytics/conversion tracking is not claimed to be implemented merely because `MEASUREMENT-SPEC.md` exists. Confirm the live analytics setup before using funnel metrics for decisions.
- The project archive does not include a dependency lockfile. Generate and commit the appropriate lockfile after a successful install in the normal development environment to improve reproducibility.

### Required operational follow-through
- Follow `MANUSCRIPT-DELETION-SOP.md` for each completed project, including inbox attachments and downloaded/working copies.
- Do not tell an author that deletion is complete until the relevant copies have actually been deleted or any exception has been explained accurately.
- Do not accept a file larger than 10 MB through the existing form; do not imply that an alternative transfer service is available until one has been selected and tested.
