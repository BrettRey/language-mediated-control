# Project Brief: Language-Mediated Control
<!-- SUMMARY: Full strategic brief for the open-access book: audience, thesis, form, publication model, money, gates, risks · status: reference · updated: 2026-07-22 -->

Origin: conversation of 2026-07-22, starting from the Boris Cherny "loops" model of orchestrated subagents and arriving at the book the assurance/evaluation papers hint at. This brief is the durable record of what was decided and why.

## The Concept, and What It Replaced

Brett's opening frame was *The Philosophical Foundations of AI Security*. Rejected as the main title, kept as ancestry. Two reasons: "AI security" is an occupied term (adversarial ML, model theft, cyber) that honestly covers about half the material, and "philosophical foundations" files the book next to commentary when its differentiator is that the conceptual work ships with operational artifacts. The genre precedent that works is Cappelen and Dever's *Making AI Intelligible* (OUP); the philosophy-of-AI-safety literature is crystallizing now (D'Alessandro, *Philosophy Compass* 2025; Goldstein and Kirk-Giannini, *Philosophical Studies* 2025), so a foundations argument lands in a forming field with named interlocutors. All four citations unverified until read; see `source-verification.md`.

## Thesis (working, v0.1; Gate 1 pressure-tests this)

Control of AI systems and evidence about AI systems both run through natural language. Language-mediation imports two problem families that engineering treats as solved: pragmatics (what counts as an instruction, whose authority it carries, whether a string is quoted or commanded) and projection (what observing this result licenses you to predict about that deployment). Security is the stress case where an adversary exploits both gaps at once. The book's subject is the handoff: eval producers generate evidence, deployment decision-makers consume it and carry the liability, and neither side currently has a shared standard for what the evidence warrants.

## Audience

Two readers on opposite sides of the same transaction: the eval team lead (produces assurance evidence) and the deployment decision-maker, exemplarily a law-firm CTO (consumes it, answers for it). Not a compromise: the handoff is the subject. Same chapters serve both; no segregated "for practitioners" material. The legal reader is a natural fit because the core distinctions have native legal analogues: quoted-versus-commanded is use/mention but lawyers have it as hearsay; delegation assurance maps onto agency law; evidentiary assurance lands on people who live in evidence standards; the security term of art *confused deputy* (legitimate authority tricked into misuse) is adversarial pragmatics plus delegation in one phrase.

## Chapter Form

Open with an actual documented case (never an invented scenario), verified against primary sources before drafting. Casework discipline lives in `../cases/`. The public record usually can't type a failure (capability failure vs scaffold failure vs policy failure vs misreporting), and that poverty is thesis-demonstrating: each chapter closes with what documentation would have had to exist for the case to be diagnosable. Minimal pairs from the benchmark papers become analytical spine, not openers. The typed-claims machinery surfaces as what-to-demand checklists (the thing a CTO photocopies), with the construct-validity argument underneath for the eval reader.

## Publication Model

Built in public, chapter-serialized, versioned. Precedents:

- Stewart Brand, *Maintenance: Of Everything*: new sections every two weeks for six months (2023) on Books in Progress (Stripe Press/Works in Progress platform), free and commentable, announced publicly, reader annotation fed revisions; print Part One from Stripe Press, January 2026. Verified via web search 2026-07-22 (see `source-verification.md`).
- *Fairness and Machine Learning* (Barocas, Hardt, Narayanan): free at fairmlbook.org for years, became standard reference, MIT Press print later. The open web edition is what builds the platform a publisher buys. Print-history details unverified.
- Jurafsky and Martin, *Speech and Language Processing*: decades of public draft chapters establishing default authority.

Protocol: release at reviewable-draft quality only; no silent rewrites; versions and changelog; public annotation treated as data (reader disagreement about what a case shows is construct-level disagreement happening in the open, feeding chapters the way rater disagreement feeds the benchmark). The book thereby instantiates its own assurance standard: typed claims, declared versions, prospective revision rules, exposed evidence bundles.

Comp title for register: *AI Snake Oil* (Narayanan and Kapoor, Princeton UP): academic authors, trade-legible, read by executives and researchers. This book is its constructive counterpart: what it would take for a claim about an AI system to be worth acting on.

## Money

No per-chapter micropayments: Stripe-class fixed fees eat sub-dollar payments (standard rate ~2.9% + $0.30; a micropayments rate reportedly exists behind sales contact), and per-chapter friction kills distribution, which is the entire strategic point. The Brand precedent monetized print, not chapters. Channels, when live: supporter subscription (Ghost-style, Stripe rails), pay-what-you-want compiled PDF, GitHub Sponsors, print edition later. Dominant channel in truth: career capital; one engagement generated by a chapter outweighs all micropayments.

## Distribution

An open book has no publisher pushing it. Requirement: a distribution habit (chapter announcements, a page explaining the program, occasional pieces pointing at it). A repo nobody knows about tests nothing. Books in Progress itself is worth an email when the time comes (unknown whether they take outside authors).

## Fleet Policy

From the loops conversation: Cherny-style mass parallelism works where verification is cheap and objective. For a book, invert it: few agents draft, fleets verify. The case file, docket retrieval, primary-source verification, citation checking, and consistency sweeps are loop-shaped; voice and judgment are not. Model sizing per CLAUDE.md table.

## Gates and Sequencing

- Gate 1 (open): thesis + chapter list pressure-tested (premortem/review-board) before drafting. Working doc: `thesis-and-chapters.md`.
- Gate 2: full-book commitment after two released chapters attract readership and ≥2 of the 4 source papers land peer-reviewed.
- Sequencing: after the current paper-revision cycle's obligations. The empirical work (benchmark, Study B) stays first among the papers; this book must not become the conceptual-mode escape hatch that project's CLAUDE.md warns against.

## Known Risks

1. **Never-finished trap**: open books rot into blogs wearing book costumes. Mitigation: declared chapter list at launch, completion criterion, release gate.
2. **Draft-quality first impressions**: mitigated by the reviewable-draft release gate and visible versioning.
3. **Distribution failure**: mitigated only by the habit; nothing structural saves an unannounced book.
4. **Source-paper drift**: chapters built on claims the papers later revise. Mitigation: chapters cite paper versions explicitly; revision rules propagate.

## Exclusions

No material from the Nefdt collaboration (Grammar_and_emergence; no-LLM agreement), anywhere in this project.
