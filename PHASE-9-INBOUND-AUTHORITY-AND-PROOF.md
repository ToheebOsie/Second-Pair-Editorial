# Second Pair — Phase 9 Inbound Authority & Proof

Status: Implemented static/content layer; production deployment remains build-gated.

## Objective

Turn the repositioned site into an inbound authority system where authors discover Second Pair through manuscript problems, learn something useful before being sold anything, see the method demonstrated, and then choose to make a private inquiry.

## Implemented

- Expanded all 12 canonical problem pages with:
  - symptom explanation;
  - why the obvious diagnosis may be incomplete;
  - author self-checks;
  - explanation of what professional investigation adds;
  - relevant route;
  - related problem;
  - method and inquiry paths.
- Added `/tools` hub.
- Added Reader Friction Diagnostic.
- Added Feedback Conflict Analyzer.
- Added tools to sitemap and Resources.
- Preserved the problem-first architecture and existing editorial service stack.
- Corrected the checklist count from the stale 55 label to 70.

## Proof rule

No fabricated client cases, testimonials, outcomes, or before/after claims.

Until permission exists for real client material, the public Proof page uses clearly labelled method demonstrations. Real case studies must follow the case-study template and consent rules in `CASE-STUDY-TEMPLATE.md`.

## Content rule

Every problem page must answer the author's question before introducing a paid route. It should distinguish symptom from cause, preserve uncertainty, provide useful self-checks, and show what professional investigation adds.

## Acquisition model

Problem → Education → Demonstration → Trust → Private inquiry → Diagnosis → Premium engagement.

The core model remains inbound. No cold outreach, unsolicited manuscript critiques, mass author lists, generic marketplace bidding, or promotional solicitation is required for the core acquisition engine.

## Next gate

Run the production build in a normal networked/dependency-complete environment, then execute browser-level QA and analytics event validation.
