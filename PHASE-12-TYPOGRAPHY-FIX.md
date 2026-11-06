# Phase 12 — Typography Fix

## Problem addressed

The deployed site showed typography that was visually inconsistent with the intended premium editorial presentation, especially on problem pages.

## Changes

- tightened and normalized page-title scale;
- reduced oversized section headings on problem pages;
- established explicit display/body font roles;
- added robust system fallbacks so typography remains coherent if Google Fonts are delayed or unavailable;
- improved body copy size and line-height for long-form reading;
- constrained headline measure to prevent awkward long lines;
- corrected `.method-grid` so its actual `<article>` children receive the intended card styling;
- improved mobile typography separately rather than relying on desktop scaling;
- added font smoothing and text rendering improvements.

## Design intent

The site should read as a premium editorial practice: serif display typography for editorial judgment and headlines, restrained sans-serif typography for navigation, labels, forms and explanatory copy.

The change does not alter the business positioning, acquisition architecture, service routing or content strategy.

## Deployment

Redeploy this package to Railway. After deployment, hard-refresh the page and test:

- /problems/character-makes-sense-to-me
- /problems
- /
- /services
- /start

Check desktop at approximately 1440px and mobile at approximately 390px.
