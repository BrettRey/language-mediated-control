# The Case File
<!-- SUMMARY: Verified real-world incidents, one per file; the book's evidentiary spine and the fleet's main workspace · status: empty, awaiting first verified case · updated: 2026-07-22 -->

Every chapter opens with a case from this directory. A case earns a file here only through the workflow below; until then it lives in `../notes/source-verification.md` as an unverified candidate.

## Workflow

1. **Harvest** (sonnet-tier fleets): candidates from the AI Incident Database, AIAAIC, court dockets, regulator publications, primary journalism. Record the search queries used.
2. **Verify** (sonnet-tier, adversarial): read the primary sources (filings, tribunal decisions, official statements). Every factual sentence in the case file needs a primary source. Archive each source to the shared literature archive; record exact path and hash here.
3. **Type** (strongest model): classify the failure per the taxonomy (capability failure, scaffold failure, policy/compliance failure, misreporting, goal drift, evaluator failure), and, separately, record what the public evidence *cannot* determine. The undeterminable list is content, not residue.
4. **Assign**: link the case to a chapter in `../notes/thesis-and-chapters.md`, or hold it in reserve.

## File Naming

`kebab-case-short-slug.md`, e.g. `mata-v-avianca.md`. One incident per file. Use `template.md`.

## Discipline

- No case facts from memory or news aggregation alone; primary sources or it doesn't ship.
- Quoted material is quoted exactly, with page or paragraph cites.
- Sensitive or restricted material: stop and invoke the restricted-data-intake rules before archiving.
- A case file is never edited to fit a chapter's argument; if the argument needs different facts, it needs a different case.
