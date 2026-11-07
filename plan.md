# Feedback-to-Final Manuscript Landing Page Plan

## Implementation approach

Add a dedicated App Router page at `/start/feedback-to-final-manuscript` using the existing Second Pair Editorial page shell, typography, palette, CTA conventions, and evidence-led voice. The page will explain one modular pathway—Calibrate, Interpret, Polish—with Full-Manuscript Beta Calibration as the standalone paid entry stage, the cost-saving rationale, readiness gate, optional later stages, calibration pricing, fee credit, boundaries, and FAQ.

Register the route in the sitemap and expose it through the existing conversion paths: the footer Start here group, the Start hub, the Resources hub, and a prominent homepage feature immediately below the hero. Add a secondary hero link so visitors can discover the package without weakening the primary manuscript-question CTA. Keep all primary enquiry CTAs pointed to the existing `/request-sample` route. Do not add payment processing, promises of guaranteed savings, or unsupported operational claims.

## Project structure

- `app/start/feedback-to-final-manuscript/page.tsx`: landing-page route, metadata, structured page sections, FAQs, pricing and CTAs.
- `app/sitemap.ts`: crawlable route registration.
- `components/SiteChrome.tsx`: footer discovery link.
- `app/start/page.tsx`: start-hub package card.
- `app/resources/page.tsx`: resources-hub package card.
- `app/globals.css`: responsive package-page styles.
- `app/page.tsx`: homepage package feature and discovery CTA.
- `app/globals.css`: responsive homepage package feature styles.
- `TODO.md`: implementation outcomes and acceptance clauses.

## Design direction

Use the existing Second Pair Editorial aesthetic: editorial, restrained and evidence-led. The package page should feel like a careful decision pathway rather than a discount sales page.

- Design movement: editorial decision architecture.
- Core principles: calm authority, visible evidence, clear stages, cost transparency.
- Color philosophy: existing warm paper, ink navy and restrained gold accent.
- Layout paradigm: stacked editorial sections with route cards, milestone panels and full-width decision gates rather than dense marketing grids.
- Signature elements: numbered stages, thin rules, serif decision headings, bordered evidence panels.
- Interaction philosophy: clear next steps without urgency; route authors to the manuscript question first.
- Brand voice: candid, humane, specific and transparent about limits.
- Brand essence: help authors decide what their manuscript needs before they pay for the wrong edit.
