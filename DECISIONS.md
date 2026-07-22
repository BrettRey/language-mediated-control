# DECISIONS: Language-Mediated Control
<!-- SUMMARY: Date-stamped decision log for the open-access book project · status: active · updated: 2026-07-22 -->

2026-07-22 — Project created as an open-access book, built in public, chapter-serialized. Decision owner: Brett (conversation, 2026-07-22); assisting system: Claude Fable 5. Rationale: chapter-by-chapter release pays out during the job search rather than two years after it; public building acquires the platform a publisher would otherwise require; precedents are Stewart Brand's *Maintenance: Of Everything* serialization (Books in Progress, free and commentable, print later) and *Fairness and Machine Learning* (open web edition first, MIT Press later).

2026-07-22 — Location `books/active/language-mediated-control`; slug stable regardless of final title. Title decided late; "The Philosophical Foundations of AI Security" rejected as main title (occupied field term "security" covers ~half the material; "philosophical foundations" undersells the operational artifacts and repels the CTO reader).

2026-07-22 — Dual audience fixed: eval leads (producers of assurance evidence) and deployment decision-makers such as a law-firm CTO (consumers who carry liability). Same chapters serve both; no segregated practitioner chapters. The book's subject is the handoff between them.

2026-07-22 — Chapters open with actual documented cases, not invented scenarios. Brett's explicit call. Reasons: lawyers discount hypotheticals; documented incidents show the failure taxonomy isn't speculative; invented openers would violate the project's own source-grounding standard. Corollary: the public record's inability to type most failures is itself thesis-demonstrating, so each chapter closes with what documentation would have made the case diagnosable.

2026-07-22 — Quarto book, HTML-first; PDF and print formats deferred. One source, rendered site; case data and any numbers computed at render time. Vendored `.house-style` snapshot (v2.1.2) and vendored central-bib snapshot because the repo is public and symlinks don't survive clone.

2026-07-22 — License: text CC BY-NC-ND 4.0, **provisional**; approval status: pending Brett's explicit sign-off. ND preserves print-deal optionality during serialization; CC BY (Brett's habit elsewhere: Language Landscapes, lingputation) remains the alternative if maximal reuse wins. Revisit at public launch. Build tooling MIT.

2026-07-22 — No per-chapter micropayments. Stripe-class fixed fees eat sub-dollar transactions, and per-chapter friction kills the distribution that is the strategic point. Monetization: free reading; aggregated/voluntary support (supporter subscription, pay-what-you-want compiled PDF); print edition later on the fairmlbook path; career capital as the dominant channel.

2026-07-22 — Versioned-release protocol: chapters release at reviewable-draft quality only; released chapters never silently rewritten; substantive changes bump versions and log in a changelog. Public annotation/disagreement treated as data in the project's own methodological sense.

2026-07-22 — Standing model-sizing policy (Brett's instruction "appropriately sized models and efforts"): haiku/low for hygiene sweeps, sonnet/medium for case harvesting and first-pass verification, strongest model for thesis, structure, and drafting. Fleets verify; one session drafts.

2026-07-22 — Two-gate commitment structure. Gate 1: thesis paragraph + chapter list pressure-tested before drafting. Gate 2: full-book commitment only after two released chapters show traction and ≥2 of the 4 source papers land peer-reviewed. Sequencing: after current paper-revision obligations. Exclusion: no Nefdt-collaboration material anywhere in the project (no-LLM agreement).
