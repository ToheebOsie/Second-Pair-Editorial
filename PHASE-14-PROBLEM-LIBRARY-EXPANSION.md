# Phase 14 — Problem Library Expansion and Build-Error Fix

## Implemented
- Expanded the manuscript problem library from 12 to 24 focused guides.
- Added twelve reader-centred topics across opening/setup, reader orientation, hook follow-through, protagonist connection, inciting incident timing, scene momentum, rushed pacing, endings, chapter continuity, scene redundancy, character motivation, and protagonist agency.
- Added all twelve entries to the public `/problems` index.
- Added all 24 problem-detail URLs to the sitemap.
- Kept the existing page template, question-led approach, service-routing links, and editorial positioning.
- Normalized the problem data strings to double-quoted literals so contractions and possessives (for example, `reader's`) cannot prematurely terminate TypeScript strings. This directly addresses the reported `Expected ',', got 's'` compile failure.
- Cleaned several first-person reader-reaction phrases for consistency with the site's reader-centred, team-voice approach.

## Validation
- Source-level TypeScript parse check: no syntax errors reported in the three changed TypeScript files. The global TypeScript compiler reported only unresolved imports because project dependencies were not installed.
- `npm install --ignore-scripts --no-audit --no-fund` timed out in this environment, so a full `npm run build` could not be completed here. Do not treat this as a successful production build; run the build in Railway after deploying this package.
- Pricing, service definitions, brand assets, and the deliberately unstated AI-manuscript policy were not changed.
