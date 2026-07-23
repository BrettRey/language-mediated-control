# Workflow Harness
<!-- SUMMARY: The book's loops/agents machinery: four executable workflows implementing fleets-verify-one-session-drafts, with model sizing per stage · status: authored, unrun · updated: 2026-07-22 -->

The Cherny "loops" model, inverted for a book: mass parallelism goes to research and verification, where checking is objective; drafting stays with one strong session. Each script here is a self-contained Workflow-tool program with model sizing baked into its stages.

## The Four Workflows

| Script | Job | Fleet sizing |
|--------|-----|--------------|
| `paper-concordance.js` | Map claims, terms, examples, and contradictions across the four source papers | sonnet readers, strongest-model synthesis |
| `case-harvest.js` | Multi-modal sweep for documented incidents (AIID, AIAAIC, dockets, regulators, press) | sonnet sweepers, strongest-model triage |
| `case-verify.js` | Per-case pipeline: read primary sources → adversarial refutation → failure typing | sonnet read/refute, strongest-model typing |
| `chapter-verify.js` | Per-chapter audit: facts vs case files, citations, style, adversarial review | haiku hygiene, sonnet facts, strongest-model refuter |

## Invocation

From a session in this repo, run by script path:

```
Workflow({ scriptPath: ".claude/workflows/paper-concordance.js" })
Workflow({ scriptPath: ".claude/workflows/case-verify.js",
           args: { cases: [{ slug: "mata-v-avianca", summary: "...", sourceUrls: ["..."] }] } })
```

Workflows are opt-in: Brett asks for one, or has standing ultracode on. They are **on-demand, not cron**: the project is sequenced behind paper revisions, and standing loops on a subscription burn usage windows for no one. When the book is in active serialization, revisit whether `chapter-verify` should run as a pre-release hook.

## Discipline

- **Workflows return data; they do not write project files.** The invoking session reviews the returned structures, then materializes case files, concordance notes, or findings, so nothing enters the repo without a human-supervised step.
- **Negative claims require stated searches**: every sweeper and verifier reports its exact queries; an unevidenced "not found" is treated as no information.
- **Nothing verified by a fleet is *verified***: fleet output moves a claim from "memory-derived" to "sources identified." Verified status still requires the primary source read and archived per `cases/README.md`.
- **No Nefdt-collaboration material** enters any workflow prompt or output.
