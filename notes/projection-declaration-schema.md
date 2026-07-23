# Projection Declaration: Canonical Schema (Draft v0.1)
<!-- SUMMARY: Core-plus-profiles unification of the four papers' declaration field inventories; book artifact resolving C3, executing C4's lexical repair · status: draft · updated: 2026-07-23 -->

Adopted form (Brett, 2026-07-23, see DECISIONS.md): one canonical declaration with a shared core and station-specific profiles, replacing the appearance of four rival checklists. This is a book artifact; the papers keep their role-scoped lists, mapped below. All mappings verified against primary text read 2026-07-23 (AGI `warranted-inference-in-agi-evaluation.tex` ~161-180; DA `06-implications.tex:3`; EA `05-sufficiency-test.tex:147`; AP `07-metrics.tex:57-63`). Field numbering "AGI f1" etc. follows AGI's enumerated list.

## Design Principles

1. **One declaration, many stations.** The field inventories differ across the papers because each paper stands at a different point on the producer-to-deployer handoff. The schema makes that explicit: a core everyone declares, plus profiles by station. AGI already licenses this ("the declaration assigns responsibility for each part of the source–target warrant" when developer and deployer differ).
2. **No bare "bearer".** The C4 collision is resolved by giving each referent its own field: **measured system** (DA's evaluation bearer, AGI's f5), **instrument** (AP's projectibility bearers: versioned template, configuration family, scorer, taxonomy), **answerable party** (EA's J_B candidates; DA's "potentially answerable roles").
3. **Review parameters are not declaration fields.** EA's θ = (R, F_review, ρ, b, v, c, u) sits upstream: the regime, forum, evidential standard, and burden allocation parameterize the review that will evaluate the declaration. This is why EA's list has no authority-regime item and why the schema doesn't duplicate θ into the core.

## Core (every projection declares)

| # | Field | AGI | DA (card) | EA (program claim) | AP (register) |
|---|-------|-----|-----------|--------------------| --------------|
| 1 | Claim: projected outcome or interpretation | f1 "the outcome, interpretation, or explanation to be inferred" | "outcome" | "projected outcome" | "target" (per claim) |
| 2 | Source result and evaluation universe | f1 "the source evaluation universe" | "source result" | "source result" | register binds each claim to Study B evidence |
| 3 | Measured system and unit | f5 "bearer and unit" (base model, agent, or composite; observational unit) | "evaluation bearer, unit" | "claim carrier, unit" (referent query hooked to EA agent) | tested models/configurations, implicit |
| 4 | Instrument (versioned) | in the companion sampling audit (scorer, template, facets) | partially via "allowed transformations" | via "conditions" | explicit: the four projectibility bearers (frozen template, configuration family, scorer, taxonomy) |
| 5 | Target population(s) | f1 "bounded target range" + f2 system population + f4 task population | "target cases" | "target population" | predeclared target per claim |
| 6 | Conditions, transformations, intervention range | f6 intervention range ("cover the variations the intended use makes foreseeable rather than only those that make success likely") | "allowed transformations" | "conditions and transformations" | wrapper/configuration families |
| 7 | Time and version range | f7 time horizon + versions in f2 | "time and version range" | "time and version range" | carried by versioned instruments |
| 8 | Tolerance and evidential standard | f10 "the evidence and tolerance that could support the claim" | "tolerance" | "tolerance" | "tolerance" |
| 9 | Intended use | f1 (via minimum-reach clause) + f9 | "intended use" | "intended use" | register-declared diagnostic use |
| 10 | Minimum useful reach | f1 "the minimum reach that would serve the intended use" | "minimum useful reach" | "minimum useful reach" | absent (candidate addition; see open questions) |
| 11 | Warrant: who supplies which evidence | f10 "who supplies the source evidence, and who can perform target-specific testing" | "warrant" | "warrant plan" | "evidence" |
| 12 | Revision rule: failure, fallback, retest, demotion, retirement | f10 + retirement paragraph ("retired for that use rather than narrowed again" below declared minimum reach) | "prospective revision rule" | "prospective rule for failure, independent retest, demotion, or retirement" | "revision rule"; "invokes its prospectively declared fallback, if any, or retires it" |

## Profiles

### Producer / system-card profile (DA's station)

Adds to the core, for claims about authorized action under a regime:

- **Authority regime** for the projected deployment (DA card list; the one field genuinely absent from AGI's declaration, principled because AGI isn't about authorization).
- **Typed layers reported separately**: normative references, recorded representations, item findings, sample results (DA 06:3).
- **Answerable parties**: "potentially answerable roles" identified, not asserted as liable (DA 06:3; EA's J_B machinery evaluates candidates).
- Companion artifact: the **temporal delegation matrix** (DA 06:5).

### Deployer / decision profile (AGI's station)

The columns the decision-maker completes; no source paper besides AGI names them, and no producer can fill them:

- **Operator and affected populations** with exposure strata (AGI f3).
- **Risk measure**: loss indexing, consequence bearer(s), exposure measure, tail specification (AGI f8).
- **Decision criterion**: objectives, feasible actions and alternatives, preferences or loss, constraints, action threshold (AGI f9). Post-C1 doctrine everywhere: decisions follow declared losses; floors are design floors, and "no verdict is conditioned on an interval clearing a floor."
- **Responsibility assignment** across producer and deployer for each part of the source–target warrant (AGI, post-list paragraph).

### Register profile (AP's station)

The minimal working subset for preregistered claims in an active study: fields 1, 8, 11, 12 per claim, each claim bound to a versioned instrument (field 4). A narrower instrument, scoring route, repaired item, or split category is a new claim requiring independent retest (AP 07-metrics).

## The Handoff Column

The schema's point for the book: each field has an owner, and the failure mode the book documents is fields nobody owned.

| Fields | Declared by | Completed by |
|--------|-------------|--------------|
| 1, 2, 4, 6, 7, 8, 11 | producer | — |
| 3 | producer (system) | deployer (deployed configuration) |
| 5, 9, 10 | producer (candidate) | deployer (actual use and reach) |
| Deployer profile | — | deployer |
| 12 | joint, with a prospectively named owner per trigger | |

## Open Questions (for the annex and the premortem)

1. Canonical term for field 3: "measured system" (proposed) vs keeping DA's "evaluation bearer" portfolio-wide.
2. Does minimum useful reach (field 10) belong in the register profile? AP's register omits it; its claims are diagnostic, so reach may be carried by the declared use instead.
3. EA's "claim carrier": measured system (list position) or warrant-carrying artifact (lexical reading)? Hooked to the EA agent; schema currently reads it as measured system.
4. Where the deployer's decision concerns authorized action, does the deployer profile also import the authority regime field, or reference the producer's declaration of it?
