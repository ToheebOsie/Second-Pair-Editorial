# Feedback to Final Manuscript — Three-Perspective Positioning Update

## What changed

The public package is now presented as one integrated, manuscript-specific question package with three distinct guides:

1. Guided beta-reading questions for real readers to describe their experience.
2. Guided critique questions for critique partners to examine craft and construction.
3. Guided self-editing questions to help the author compare intention with execution and make revision decisions.

The landing page now uses author-facing problems and language reflected in the supplied editorial corpus, including uncertainty about slow openings, a character feeling difficult to like or flat, dialogue sounding alike across characters, over-description, confusing scenes and conflicting feedback. It demonstrates how one concern can be investigated through all three perspectives.

## Connected surfaces updated

- `/start/feedback-to-final-manuscript`: replaced the beta-calibration-only positioning with the three-guide offer, specific examples, deliverables, process, service boundaries, FAQs and existing pricing section.
- Homepage package feature: now names beta reading, critique and self-editing as the three perspectives.
- Start hub and Resources hub: updated their package descriptions.
- Private onboarding: now introduces all three question guides and captures optional critique-partner feedback as well as beta-reader evidence.
- Onboarding confirmation email and internal intake summary: now describe all three guides.
- `docs/internal-calibration-brief.md`: expanded to operationalise the distinct purposes, boundaries, evidence and question-level requirements of all three guides.

## Commercial terms and unresolved source conflict

No price or payment rate was changed. The public page in the supplied source displayed $12 per 1,000 words with a $750 minimum for the first stage, and $35 per 1,000 words for later editorial work. Its payment line displayed 50% to begin and 50% before delivery.

Some older internal release notes in the supplied archive refer to a 20% deposit or 20% / 40% / 40% milestones. The private onboarding now refers generically to the required starting payment rather than choosing between conflicting historic payment instructions. Confirm the controlling payment schedule with the business/finance owner before deployment or issuing client quotes.

## Validation status

- ZIP source archive integrity: passed before modifications.
- TypeScript/TSX parser diagnostics for the changed source files: no parse errors.
- Search checks: public package, homepage, intake and email surfaces no longer describe the paid entry package as beta-reader questions only.
- Full dependency installation did not complete within the available execution window; a production Next.js build and browser-level test were therefore not run.
- The source archive is provided for review and deployment through the existing release workflow; it has not been deployed.
