# Phase 2 — Beta-reader discovery content audit and implementation

Date: 2026-10-14
Source website: `v5.18.2-manuscript-confidentiality`

## Decision

Create one canonical, evergreen resource at `/resources/where-to-find-beta-readers`. It targets discovery intent that is not directly served by the existing 12 long-form drafts. Link it from `/resources` and include it in the sitemap. Do not create separate pages for every supplied community.

## Overlap audit

The existing first-12 long-form cluster is primarily manuscript-problem content:

- Opening feels slow
- Readers understand but do not care
- Beta readers disagree
- Pacing problem
- Character makes sense to author but not readers
- Characters sound the same
- Too much worldbuilding
- Confusing vs productive mystery
- Slow middle
- Whether revision worked
- Editor and beta readers disagree
- Too much feedback

The closest overlaps are:

- `03-beta-readers-disagree.md`: concerns how to interpret conflicting feedback. The new guide should link to `/problems/beta-readers-disagree`, not repeat its diagnostic framework.
- `11-editor-and-beta-disagree.md`: concerns differences between professional editorial judgment and reader reaction. Link to `/problems/editor-and-beta-disagree` when explaining what to do after receiving feedback.
- Existing beta-reading service page: describes Second Pair's paid offer. The new guide should explain the broader ecosystem fairly and link to the service only in the section about when structured paid feedback may fit.
- Resources hub: introduces existing checklist, problem library and tools but did not provide a browsable discovery guide. The new guide fills that gap.

The 12 long-form drafts and newsletters should remain focused on their canonical manuscript problems. They are not substitutes for a page answering where to find readers, how to ask, or how free and paid options differ.

## Corpus-derived editorial insights

The supplied author-reader/editor corpus contains recurring examples of authors:

- struggling to get responses to requests;
- unsure where to post or how to approach a community;
- seeking feedback on a small unit (such as a blurb, first chapter or excerpt) rather than an entire manuscript;
- negotiating critique exchanges and realistic timelines;
- finding that genre, format and feedback goals affect reader fit;
- disagreeing about whether review swaps are worthwhile.

Use these as qualitative examples of questions and friction points, not as representative statistics. The public guide should not quote identifying conversation details, usernames or private manuscript material. It should explain that critique exchanges can be useful when expectations, fit and time commitments are agreed, but may disappoint when the exchange is mismatched or poorly scoped.

## Communities included

### Goodreads

- FREE BOOKS for Book lovers: ARC & Polished Manuscript Readers for Authors
- Get Honest Book Reviews without Review Swaps
- Advance & Beta Readers
- Alpha Betas
- Beta readers and author

Use descriptions and rules conservatively. Explain the distinction between public reviews, ARCs and private manuscript feedback. Readers must check current group rules and fit.

### Discord

Four user-supplied community/channel links are included. The user explicitly verified that all four meet the guide's requirements. Current code uses neutral numbered labels because descriptive server names were not supplied; replace these labels with the public server names if/when available. Discord channel links may require joining the relevant server.

## Implemented changes

1. Added `app/resources/where-to-find-beta-readers/page.tsx` with SEO metadata, canonical URL, community directory, request guidance, a request template, free-vs-paid decision guidance, FAQs and internal links.
2. Added a card linking to the new guide on `app/resources/page.tsx`.
3. Added `/resources/where-to-find-beta-readers` to `app/sitemap.ts`.
4. Added `/team` to the sitemap because it was previously missing.

## Before deploying

- Run the production build and fix any TypeScript, lint or rendering issues.
- Check the page at desktop and mobile widths.
- Test all external links and internal service links.
- Consider replacing numbered Discord labels with the actual public server names for clarity.
- Verify the guide appears in the production sitemap after deployment and inspect indexing in Search Console.
- Re-check community rules periodically; page copy says rules and access can change.
