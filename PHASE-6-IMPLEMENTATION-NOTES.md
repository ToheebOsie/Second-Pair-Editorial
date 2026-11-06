# Phase 6 implementation notes

Implemented against the actual Second Pair v5.8 source tree.

## Commercial changes
- Reframed homepage around manuscript intelligence and author problems.
- Changed primary navigation to How We Read / Problems / Services / Proof / About.
- Kept pricing available but removed it from the homepage conversion hierarchy.
- Reframed sample read as a bounded demonstration of method.
- Added How We Read page.
- Added Proof page with an explicitly labelled methodology demonstration, not a fabricated client case.
- Added Problem Library hub and 12 problem-led pages.
- Reframed pricing as transparent for known-scope work and scope-led for diagnostic work.
- Reframed service pages around the question each service answers.
- Reworked Start Here language around the author's problem rather than service selection.
- Updated sitemap for the new public architecture.

## What was deliberately preserved
- Existing service definitions and specialist delivery architecture.
- Existing sample-read form/API infrastructure.
- Existing pricing calculator infrastructure.
- Existing resource/checklist infrastructure.
- Existing SEO and structured-data framework.
- Existing brand assets and site styling.

## Important limitation
The environment could not complete `npm install` within the available execution window, so `next build` could not be run because dependencies were not installed. This is a deployment QA gate, not evidence of a build failure. Run `npm install` followed by `npm run build` in the normal development/deployment environment before publishing.

## Strategic rule
The website is being used as an inbound manuscript-intelligence system: author problem -> useful diagnosis education -> proof -> private inquiry -> assessment -> smallest sufficient service -> premium engagement.
