# Distribution Floor
<!-- SUMMARY: The minimum distribution machinery required before any chapter releases (premortem revision 5); decisions and status per channel · status: in-progress · updated: 2026-07-23 -->

Premortem dive 7's failure story: chapters released into silence, no list, no analytics, Gate 2's readership criterion unmeasurable, project shelved on a misdiagnosis. This note is the floor that prevents it. Nothing here is optional before chapter 1 releases; each item is a Gate 1 checklist line.

## Items

### 1. Mailing list (decision needed: provider)

The one channel that survives a quiet launch: people who asked to be told about chapter 2. Requirements: free-tier or cheap, no tracking bloat, easy signup embed in the Quarto site, exportable subscriber list.

Candidates to evaluate (verify current pricing and features before choosing; do not trust this note's memory): Buttondown, Ghost (heavier than needed), GitHub-native watch/releases as a supplementary channel (real but insufficient alone: it only reaches GitHub users who know the repo exists). Decision: Brett picks provider; signup link goes in the book's preface and each chapter's footer.

### 2. Analytics (decision needed: provider)

Gate 2 says "real readership"; without instrumentation that phrase is unfalsifiable and the premortem showed it defaults to GitHub stars and gut feeling. Requirements: privacy-respecting (no cookie banner), page-level counts and referrers, cheap or self-hostable. Candidates to evaluate (same caveat): GoatCounter, Plausible. Where the site is hosted decides what is installable; hosting itself (GitHub Pages presumably) is not yet configured and needs deciding first.

### 3. Books in Progress: RESOLVED, closed channel

Brett confirmed 2026-07-23: Books in Progress is not open to outside work. Draft superseded unsent (`../correspondence/2026-07-23-books-in-progress-outreach.md`). Consequence: distribution is fully self-hosted, which raises items 1 and 2 from useful to necessary; there is no platform audience to borrow, so the list and the announcement habit are the entire reach mechanism.

### 4. Announcement plan (standing rule)

Every release gets its announcement written before the release, as part of the release checklist, not after. Channels: Brett's existing networks (the same places the papers get announced), plus any list built under item 1. The chapter-release checklist gains a line: announcement drafted, scheduled, and posted within 24 hours of the chapter going live. A release without an announcement counts as unreleased for Gate 2 purposes.

### 5. The methods page (done 2026-07-23)

`../how-this-book-is-made.qmd`, in the book nav. Frames the public fleet harness before outside attention does (premortem dive 10). Kept public per Brett's decision.

## Open Decisions for Brett

1. Mailing-list provider (item 1).
2. Site hosting (GitHub Pages?) and analytics provider (item 2).
