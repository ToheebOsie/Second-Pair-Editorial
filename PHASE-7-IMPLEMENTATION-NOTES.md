# Phase 7 — Conversion System Implementation

## Objective
Turn the Phase 6 website transformation into a stronger inbound acquisition and qualification system while preserving the useful v5.8 editorial/service infrastructure.

## Implemented
- Added a commercial `Start With the Question` layer with five entry points:
  - Reader Reality Check
  - Manuscript Diagnostic
  - Feedback Reconciliation
  - Revision Verification
  - Editorial Development
- Added `/start` hub and individual `/start/[slug]` pages.
- Changed homepage problem cards from generic library links to the relevant problem investigations.
- Kept services downstream of the problem/question architecture.
- Changed the sample/intake form so service selection is optional rather than required.
- Added diagnostic intake fields for:
  - what the author believes is not working;
  - why they believe it is a problem;
  - previous reader/editor feedback;
  - whether they already revised;
  - what a useful answer would allow them to decide.
- Expanded the server-side inquiry email with those diagnostic fields.
- Added an internal routing hint that treats an author-selected service as a starting point to verify, not as an automatic routing decision.
- Updated the site's public tagline to the manuscript-intelligence positioning.
- Added the new start routes to the sitemap.

## Strategic purpose
The implementation follows:

Author problem → useful investigation → method → proof → private inquiry → qualification → smallest sufficient service → premium engagement.

It deliberately does NOT introduce cold outreach, mass DM, marketplace bidding, scraped lead lists, or generic promotional acquisition.

## Preserved
- Existing specialist service definitions.
- Existing sample-read API and email delivery.
- Existing pricing calculator.
- Existing resources and readiness checklist.
- Existing SEO/structured-data infrastructure.
- Existing visual/brand system.

## Important implementation rule
The five new entry points are commercial entry routes, not new specialist editorial disciplines. They map to existing delivery services after review. This avoids artificially expanding the service catalogue.

## QA status
A full Next.js production build could not be completed in this environment because `npm install --no-audit --no-fund` exceeded the available execution window before dependencies were installed. Therefore this package must still pass `npm install` and `npm run build` in the normal development/deployment environment before publishing.

## Next gate
Phase 8 should be a rigorous production regression audit after the package builds successfully, covering routes, forms, API validation, SEO, links, mobile navigation, pricing, inquiry routing, and the commercial promise/capability alignment.
