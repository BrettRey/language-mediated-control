# CLAUDE.md

This file provides project-specific guidance for Brett Reynolds's open-access book:

**Language-Mediated Control** (working label; the final title gets decided late, at public launch or with an editor)

## Project Frame

An open-access book, built in public and released chapter by chapter. Precedents: Stewart Brand's *Maintenance: Of Everything* serialization on Books in Progress (free, commentable, print edition later), and *Fairness and Machine Learning* (free web edition built the audience, MIT Press printed it later).

Dual audience, one handoff: eval team leads, who produce assurance evidence, and deployment decision-makers (the law-firm CTO), who consume it and carry the liability. The book is about that handoff: what an evaluation result licenses someone to conclude, and what to demand before signing off.

Working thesis: control of AI systems and evidence about AI systems both run through natural language. Language-mediation imports two problem families that engineering treats as solved: pragmatics (what counts as an instruction, whose authority, quoted versus commanded) and projection (what observing this licenses you to predict about that). Security is where an adversary exploits both at once.

## Role

Editor and researcher, not PM. Deep editorial work is welcome here.

## Non-Negotiables

1. **Cases, not scenarios.** Every chapter opens with an actual documented case, verified against primary sources (court filings, tribunal decisions, incident reports) before chapter prose is drafted. No invented hypotheticals as chapter openers. Each chapter closes with what documentation would have had to exist for the failure to be diagnosable.
2. **Source grounding (LAW).** Case facts enter chapters only from `cases/` files whose primary sources are verified and archived (exact path and hash recorded). The candidate cases in `notes/` are memory-derived and unverified until their case files say otherwise.
3. **No Nefdt-collaboration material.** The Grammar_and_emergence collaboration is no-LLM by agreement. Its material stays out of this book's notes, concordance, and chapters entirely.
4. **Versioned releases.** A chapter releases only at reviewable-draft quality. Released chapters are never silently rewritten: substantive changes bump the chapter version and go in the changelog. The book practices the assurance standard it argues for.
5. **Typed claims.** Inherited from the assurance papers: keep normative references, recorded representations, findings, interpretations, projective claims, and causal claims typed separately. Every nontrivial projection declares bearer, unit, population, conditions, time/version, tolerance, use, and revision rule.
6. **House style applies to `.qmd` files.** The central Quarto rules load via `.claude/rules/`; run the markdown style checker after edits (`make check`).

## Model Sizing (Standing Fleet Policy)

Brett's standing instruction: use appropriately sized models and efforts.

| Task | Model / effort |
|------|----------------|
| Link checks, bib validation, style sweeps, file hygiene | haiku / low |
| Case harvesting (AIID, AIAAIC, dockets), first-pass verification, summarizing primary documents | sonnet / medium |
| Chapter drafting support, case adjudication, thesis and structure work | strongest available / high |

Fleets verify; one session drafts. Mass parallelism goes to the case file and verification, never to prose.

## Gates

- **Gate 1 (open):** thesis paragraph and chapter list pressure-tested before any chapter drafting. Working doc: `notes/thesis-and-chapters.md`.
- **Gate 2:** full-book commitment only after the first two released chapters attract real readership and at least two of the four source papers land peer-reviewed.
- Sequencing: this project runs after the current paper-revision obligations, not instead of them.

## Source Papers

- `papers/development/adversarial-pragmatics-for-ai-safety-evaluation/` (adversarial pragmatics; delegation assurance; evidentiary assurance)
- `papers/retarget/agi-evaluation/` (aggregate scores and the projectibility of evaluation claims)

## Build

```bash
make          # quarto render (HTML)
make preview  # live preview
make check    # markdown style check
```

## Layout

```text
_quarto.yml           # Quarto book config, HTML-first
index.qmd             # preface: what this is, how releases work
chapters/             # chapters (empty until Gate 1 passes)
cases/                # case file: one incident per file; template.md
notes/                # project brief, thesis working doc, source verification
references.bib        # vendored snapshot of the central bibliography (public repo; do not edit)
references-local.bib  # project-specific additions
.house-style/         # vendored style snapshot (quarto-theme.scss, style-rules.yaml)
```

## Licensing and Money

Text is CC BY-NC-ND 4.0, provisional until public launch (see DECISIONS.md; CC BY remains on the table). Reading is free. No per-chapter payments ever: transaction fees eat micropayments and the friction kills the distribution that is the point of building in public. Support channels, when live: aggregated and voluntary (supporter subscription, pay-what-you-want compiled PDF), with a print edition later on the fairmlbook path.
