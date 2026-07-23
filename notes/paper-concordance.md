# Cross-Paper Concordance
<!-- SUMMARY: Fleet-read glossary, claim map, contradictions, and gaps across the four source papers; Gate 1 input; anchors spot-checked only · status: sources-identified · updated: 2026-07-22 -->

## Provenance and Status

Produced 2026-07-22 by `.claude/workflows/paper-concordance.js` (run `wf_96507992-ed9`): four sonnet/medium readers (one per paper), one strongest-model synthesis. Total ~442k subagent tokens.

**Status of every claim below: sources identified, not verified.** Readers read the working tree as of the evening of 2026-07-22, which included the evidentiary paper's in-flight revision state (post-a68f479) and the agi-evaluation paper post-fb90e72 (renamed `warranted-inference-in-agi-evaluation.tex`). Anchors are file:line at read time and will drift; treat them as locators, not citations. Before any of this enters chapter prose, the primary text gets re-read per the source-grounding law.

Spot-checks performed by the invoking session (grep against the actual .tex):

- AP `sections/07a-limitations-next-steps.tex:30` conjunctive-gates passage: **verbatim confirmed**.
- DA `sections-delegation/03-framework.tex:281` Type M / "not thresholds an effect has to clear": **verbatim confirmed**.
- EA `sections-evidentiary/05-sufficiency-test.tex:132` "substantive defeat at scope... initiated external-contact call": **verbatim confirmed**.
- DA `sections-delegation/03-framework.tex:58` "blocked... has n=0": **confirmed at line 58**, but see the caveat on contradiction C2 below; the surrounding text (lines 58–79) partly anticipates the tension.

Paper keys: **AP** = adversarial-pragmatics (`sections/`), **DA** = delegation-assurance (`sections-delegation/`), **EA** = evidentiary-assurance (`sections-evidentiary/`), **AGI** = agi-evaluation (`warranted-inference-in-agi-evaluation.tex`).

## Glossary

### projectibility — consistent core, orthogonal decompositions

- AP @ 01-evaluation-problem.tex:18: "what observing some features licenses us to predict about others" (Goodman 1955); "attaches to a specified bearer and target, not to 'the label' indiscriminately"; typed into four bearers (reference, behavioural, measurement, taxonomic) @ 01-evaluation-problem.tex:16.
- DA @ 01-introduction.tex:41: same Goodman core, undecomposed.
- EA @ 05-research-program.tex:94: "the umbrella question of whether an inference beyond the observed result is licensed", with causal transportability as "the stronger case".
- AGI @ 29,48,113: "the evidential support that specified observations and revisable background assumptions give a declared source–target link, relative to a proposed interpretation or use"; explicitly graded and claim-relative.
- **Divergence note:** same Goodman core in all four, but AGI grades by degree of support for one link while AP types by bearer of the claim. The book must state these as complementary axes (degree × bearer) or readers will take them as rival definitions.

### authorization standing / source standing — inconsistent labels and inventories

- DA @ 01-introduction.tex:19: "authorization standing (transition competence)"; formalized as Stand_R(x,o,q,t) over O = {adopt, issue, direct, amend, suspend, revoke, override, release, review} @ 03-framework.tex:24-30.
- EA @ 02-evidence-primitives.tex:3: primary label "source standing", same transition-competence sense; but the same paper switches to "authorization standing" @ 04-technical-mechanisms.tex:12, and its Stand_R gloss lists six operations "(grant, amend, suspend, revoke, override, release)" @ 05-sufficiency-test.tex:6.
- AP @ 01-evaluation-problem.tex:12: defers explicitly to "the delegation-assurance sense... rather than the licensed-action verdict that account calls action authorization".
- **Divergence note:** one concept, two labels, two non-identical operation sets (DA's nine vs EA's six; 'grant' vs 'adopt/issue/direct'; 'review' only in DA). Sense stable; formal inventory not.

### status / contextual status / pragmatic_status — consistent concept, two ends of one relation

- DA @ 01-introduction.tex:17: independently adjudicated contextual role of a string occurrence (command, quotation, policy example, tool result, retrieved content, memory, request for analysis).
- EA @ 02-evidence-primitives.tex:3: "contextual status", near-identical list.
- AP @ 07-metrics.tex:33: operationalized as the item field `pragmatic_status` with a response-side value set (classification, report, translation, summary, enactment).
- **Divergence note:** DA/EA enumerate input-side roles; AP enumerates the acts a response performs on a string. Present as the two ends of one status relation, not two lists of the same thing.

### licensing / action licensing — consistent

- DA @ 01-introduction.tex:19: connects status/standing/priority determinations to authorization of an external action, disclosure, persistence operation, or institutional use.
- EA @ 02-evidence-primitives.tex:3: same sense; EA's gloss silently drops 'priority' from the input list.

### authority regime (R) — consistent

- DA @ 03-framework.tex:3: "determines which grants, constraints, and transitions are operative and applicable"; two modes R^stip / R^inst @ 03-framework.tex:34.
- EA @ 05-sufficiency-test.tex:6: drops 'applicable'; that work migrates to the applicability map M_v @ 05-sufficiency-test.tex:18.

### bearer — INCONSISTENT, three referents (most collision-prone term)

- AP @ 01-evaluation-problem.tex:16: projectibility bearer = the warrant-carrying measurement artifact (frozen template, versioned configuration family, versioned scorer, versioned taxonomy).
- DA @ 03-framework.tex:99: evaluation bearer (S) = the measured system (base model, stateful agent, composite, sociotechnical deployment); also answerability's bearer @ 01-introduction.tex:27.
- EA @ 02-evidence-primitives.tex:36: answerability bearer = the candidate person or organization (identity, duty, reachability), per-candidate in J_B @ 05-sufficiency-test.tex:49-53.
- AGI @ ~165: "bearer and unit" = "the base model, agent, or deployed model–tool–retrieval composite and the observational unit", i.e. the measured system, DA's sense. (CORRECTED 2026-07-23: the fleet glossed this as AP's artifact sense; the primary text refutes that.)
- **Divergence note:** "the bearer failed" is three-ways ambiguous (defective rubric / misbehaving system / unreachable director). The book needs three lexical items; the schema draft proposes measured system / instrument / answerable party and retires bare "bearer" (see `projection-declaration-schema.md`).

### typed (claims/verdicts) — consistent discipline, three realizations

- DA @ 01-introduction.tex:13: claim/record objects partitioned by bearer, inferential role, schema; seven claim types @ 03-framework.tex:5.
- EA @ 01-introduction.tex:15: four typed verdict families (J_A, J_R, J_B, J_C) plus five evidentiary statuses @ 05-sufficiency-test.tex:20.
- AP @ 02-pass-fail.tex:13: criterion-separated response labels (task success, policy compliance, safety risk, refusal outcome, attribution, uncertainty).

### noncompensation — doctrine aligned, rhetoric not

- DA @ 03-framework.tex:9, 07-conclusion.tex:7: "regime- and claim-relative, not universal"; applies "only where the regime or validated assessment use is conjunctive".
- EA @ 05-sufficiency-test.tex:103: "noncompensatory only at prospectively required nodes"; but the PCAOB analogy @ 03-governance-law.tex:26 states the convergence without the relativity qualifier (see contradiction C9).

### worst-tail degradation (WTD) — consistent

- DA @ 03-framework.tex:224: "a signed paired-change statistic for the most degraded tail".
- AGI @ 267-277 (eq:wtd): full formal definition; explicitly "not an absolute harm measure".

### worst-tail loss (WTL) — consistent

- AGI @ 279-296 (eq:wtl): absolute, target-specific conditional expected loss; a stable serious failure yields WTD=0 with high WTL.
- DA @ 03-framework.tex:224: "absolute worst-tail loss" re-anchored to authorization-sensitive costs.

### transport / transportability — consistent

- AGI @ 103: deliberately broader than causal-transportability literature; does not inherit Pearl–Bareinboim identification results.
- EA @ 04-technical-mechanisms.tex:66: an S-marker "does not by itself establish transportability"; changed mandate/forum/standard/burden/meaning creates a new target claim.
- AP @ 08-implications.tex:5: "transport beyond declared items/models/wrappers" requires separate evidence.

### projection declaration — role-indexed profiles of one device (C3, adjudicated; fleet's "no minimum reach in AGI" refuted)

- AGI @ ~161-172: ten fields, incl. risk measure, decision criterion, operator/affected populations, **and** minimum reach (field 1) with a fallback-and-retirement rule (field 10 + following paragraph).
- DA @ 06-implications.tex:3: thirteen items for system cards (incl. authority regime, minimum useful reach, revision rule); producer-side.
- EA @ 05-sufficiency-test.tex:147: twelve items (incl. minimum useful reach, prospective failure/retest/demotion/retirement rule); authority regime carried upstream in θ.
- AP @ 07-metrics.tex:57-63: four items per registered claim (target, tolerance, evidence, revision rule); deliberate working subset with matching fallback/retire discipline.
- Canonical form: core-plus-profiles, see `projection-declaration-schema.md`.

### record gap (vs missing-evidence inference) — consistent

- EA @ 05-sufficiency-test.tex:20,26: gap = recording practice failed; not-established = adequate record, case still not made.
- DA @ 04-failure-evidence-mapping.tex:75: inadequate trace "creates a record gap... it doesn't turn missing evidence into evidence of unauthorized action"; coarser granularity (no gap/not-established split).

### adversarial — defined only once, and not in the book's sense

- AP @ 01-evaluation-problem.tex:61: "describes the evaluation conditions, not the speaker"; several items involve benign ambiguity.
- **Divergence note:** the book's thesis uses 'adversarial' in the ordinary hostile-agent sense. The papers never supply that second sense; a latent equivocation the book must manage (see gap G1).

### the four-term primitive quartet — INCONSISTENT (see contradiction C7)

- DA @ 01-introduction.tex:17-19: status, authorization standing, priority, licensing.
- EA @ 02-evidence-primitives.tex:3: contextual status, source standing, action licensing, technical trust (priority demoted, technical trust promoted).

### construct (Messick lineage) — consistent

- AGI @ 95: score is indicator; capability/attribute is construct (Messick 1995:742).
- AP @ 04-benchmark-construction.tex:80: validity attaches to interpretation and use of results from a configured assessment.
- EA @ 02-evidence-primitives.tex:34: assessment validity vs authority validity; six-aspect validation architecture shared with AP @ 04-benchmark-construction.tex:83-99 and EA @ 05-research-program.tex:38.

## Claim Map (12 themes)

### T1. Typed separation: one label conceals many claims

- A single pass/fail label conceals four projectibility bearers — AP @ 01-evaluation-problem.tex:16.
- Benchmark separates task success, policy compliance, safety risk, refusal outcome, attribution, criterion-scoped uncertainty — AP @ 02-pass-fail.tex:13.
- Seven claim types must remain separate — DA @ 03-framework.tex:5.
- Assurance argument connects four typed layers without identifying them; each interface needs its own warrant — DA @ 01-introduction.tex:41.
- Evidence bears on four typed verdict families, review parameters fixed before the record is inspected — EA @ 01-introduction.tex:15.
- Authorization, record adequacy, answerable-person, and forum questions are four distinct questions — EA @ 01-introduction.tex:5.
- Commensurability, compensability, projectibility: three separate questions before any aggregate is interpreted — AGI @ 97, 417-419.

### T2. Authorization is not causal influence, control, or oversight

- Authorization, causal sensitivity, projection stay separate; context can change behaviour without being authorized to guide it — AP @ 01-evaluation-problem.tex:12.
- Divergence from a later request is not by itself goal drift: may be authorized resistance to an invalid override — AP @ 03-taxonomy.tex:78.
- Meaningful human control, effective oversight, accountability are separate properties from authorization — DA @ 01-introduction.tex:9; 02-existing-work.tex:29.
- Causal vs normative controllability separately recorded (Nguyen et al.) — DA @ 02-existing-work.tex:31.
- Pause ability isn't standing; continuation changes gate state, not Q_R, unless a valid release event — DA @ 06-implications.tex:19.
- Bovens: accountability is an actor–forum relation, distinct from control — EA @ 03-governance-law.tex:20.

### T3. Non-composition: local successes don't sum to global warrant

- Authorization of every step doesn't entail authorization of the sequence — DA @ 01-introduction.tex:15; 03-framework.tex:81-87.
- A trajectory can satisfy every step-local condition while violating a cumulative or terminal constraint — DA @ 07-compositional-delegation.tex:40.
- Step-local permission doesn't entail trajectory authorization; a reviewer may not invent a cumulative limit the regime doesn't state — EA @ 05-sufficiency-test.tex:8.
- Bounded successes don't compose into unrestricted generality; composition only through an explicit interface argument — AGI @ 31, 488, 516.
- Compositional delegation adds seven requirements beyond single-action assurance — DA @ 07-compositional-delegation.tex:36-38.

### T4. Mention/use vs information flow: two criteria on one string

- Metalinguistic status alone doesn't authorize delivery of a protected string; refusing an authorized analysis request is measurable over-refusal — AP @ 05-annotation-rater-roles.tex:13.
- Cross-criterion divergence: token mentioned in a refusal is non-enactive on the speech-act criterion yet reaches the output channel on the confidentiality criterion (AP-SEED-016) — AP @ 06-experiments.tex:77.
- A quoted protected value (BLUE-CANARY-47) is still disclosed if delivered — DA @ 05-language-mediated-authority.tex:9.
- Record must preserve status, standing, priority, licensing, with provenance channel and technical trust separate — EA @ 04-technical-mechanisms.tex:12.
- Literal-substring occurrence distinguished from recoverability, reconstruction, downstream effect — AP @ 06-experiments.tex:79; DA @ 06-implications.tex:19.

### T5. Records neither create nor destroy the normative fact

- A rich record doesn't prove authority; an accurate finding doesn't validate a use — DA @ 01-introduction.tex:41 (figure caption).
- A bad record doesn't make an authorized action unauthorized; a pristine record can document an unauthorized action — EA @ 01-introduction.tex:51.
- Inadequate trace creates a record gap, not evidence of unauthorized action — DA @ 04-failure-evidence-mapping.tex:75.
- Gap vs not-established name different institutional failures; more logs won't fix the latter — EA @ 05-sufficiency-test.tex:26.
- Authenticity, integrity, weight distinct; none equals sufficiency — EA @ 03-governance-law.tex:30.
- A digest/hash supports tamper detection, not identity, provenance, retention, or semantic adequacy — EA @ 05-research-program.tex:88.

### T6. Aggregates conceal decision-relevant structure; tails carry the risk

- Any aggregate score encodes utility weightings and base-rate assumptions — AP @ 07-metrics.tex:6.
- A stable mean is compatible with unchanged items, balanced churn, tail-concentrated deterioration, or persistent serious failures — AGI @ 85-90.
- Zhang reanalysis: WTL .924–.996 while WTD .039–.617 across 32 cells — AGI @ 31, 358.
- Stable-poor simulation: latent WTD zero, case-risk WTL .80 — AGI @ 380.
- Irrelevant context: item-level shifts cancel in mean accuracy while degrading the worst-affected tail — AP @ 07-metrics.tex:8; DA @ 03-framework.tex:222; EA @ 05-sufficiency-test.tex:185.
- Program-level claims should retain item/action transitions and risk-relevant tails — EA @ 05-sufficiency-test.tex:185.

### T7. LLM judges and evaluators fail where safety needs them

- Judge exact agreement tracks majority-class base rates; minority-class recovery low exactly where safety needs it (0/11 partials, 0/11 risk rows) — AP @ 06-experiments.tex:81-83.
- A route can look better in aggregate by discarding the needed distinction (judge emitting 'partial' zero times) — AP @ 06-experiments.tex:134-136.
- Fluent but instruction-violating outputs mislead evaluators (LLMBar) — AP @ 02-pass-fail.tex:9; DA @ 02-existing-work.tex:55.
- Judges given modified safety definitions keep applying trained priors (Alloula) — AP @ 02-pass-fail.tex:11; DA @ 02-existing-work.tex:55.
- Agreement with the hidden key is the weakest thing worth measuring — EA @ 05-research-program.tex:104.
- Majority vote can erase systematic label variation; disagreement is a diagnostic, not noise — AP @ 05-annotation-rater-roles.tex:21; 02-pass-fail.tex:13.

### T8. Small-sample statistical discipline for assurance evidence

- Gating on a one-sided lower bound above zero is a Type M error — DA @ 03-framework.tex:281.
- Ten-bin ECE at thirty observations rejects a calibrated predictor most of the time — DA @ 03-framework.tex:289.
- Larger-of-two one-way cluster SEs undercovers a crossed design (~0.87 vs 0.95) — DA @ 03-framework.tex:297.
- 0/12 errors consistent with a true rate near 20%; decide against Jeffreys posterior intervals — EA @ 05-research-program.tex:44-48.
- Item-bootstrap intervals cover raw worst-decile (.92) but the latent effect essentially never (.00) — AGI @ 382.
- Raw, null-referenced, split estimators target different estimands; optimizer's curse biases selected maxima — AGI @ 31, 202; EA @ 05-sufficiency-test.tex:149.
- 18-cluster bootstrap near the undercoverage regime; reported intervals if anything too narrow — AP @ 06-experiments.tex:132.

### T9. Division of evidential labour: the developer–deployer handoff

- Developers characterize bounded source evaluations and expose unsupported facets; deployers complete and monitor local warrants — AGI @ 31, 471-476.
- The benchmark supplies one measurement layer; not institutional authorization, record adequacy, or transport — AP @ 08-implications.tex:5.
- DA supplies the typed authorization claim; EA asks what the preserved record warrants about it — EA @ 01-introduction.tex:51.
- System cards should declare the full projective claim, not a pass rate — DA @ 06-implications.tex:3.
- A model-level system card is appropriate disclosure but the deployment-specific delegation record is still needed — DA @ 06-implications.tex:9-11.
- Adversarial pragmatics is a discrimination test under tested conditions; no transport by itself — DA @ 05-language-mediated-authority.tex:17.

### T10. Scope discipline and self-limitation (the papers practice what they preach)

- Pilot demonstrates implementability, not validation; diagnosis only — AP @ 01-evaluation-problem.tex:65-67; 07a-limitations-next-steps.tex:4.
- No target-study outcomes; committed fixtures return NOT_ESTIMATED — DA @ 08-code-data-availability.tex:11,13.
- No reviewer has answered the fixtures; illustrative tolerances are not proposed thresholds — EA @ 05-research-program.tex:5, 86.
- Zhang reanalysis "claims no prospective standing" — AGI @ 350.
- A defeated claim may be retested at a fallback scope only if fixed in advance — AGI @ 176.
- AP-SEED-009: candidate reference defect, not three model failures; output-blind re-adjudication — AP @ 06-experiments.tex:47.
- No universal assurance score; the standard remains a research hypothesis until validity evidence arrives — EA @ 06-conclusion.tex:9; DA @ 07-conclusion.tex:7.

### T11. Shared incident corpus, bounded use

- OpenAI Slack/GitHub incident motivates construct design; warrants no item-level source label, representation claim, or prevalence estimate — AP @ 03-taxonomy.tex:56; 07a-limitations-next-steps.tex:34.
- OpenAI's monitoring-and-pause response motivates trace fields; doesn't validate the controls — DA @ 06-implications.tex:19.
- OpenAI replay account: useful record pattern; missing denominators, thresholds, false-positive rates block stronger inference — EA @ 02-evidence-primitives.tex:46; 05-research-program.tex:96.
- Robodebt typed as decision-basis failure plus adverse-signal routing failures — EA @ 03-governance-law.tex:32-36.
- H.R. 7390: safety case, incident repository, action-reconstruction evidence are three distinct objects — EA @ 03-governance-law.tex:14-16; DA @ 03-framework.tex:197.
- Procurement-assistant embedded-instruction case is the shared worked example — DA @ 03-framework.tex:105-107; EA @ 05-sufficiency-test.tex:119-138.

### T12. Refusal is not a unitary safety success

- Models refuse safe requests on wording resemblance (XSTest); refusal behaviour manipulable separately from safety status — AP @ 02-pass-fail.tex:7.
- Refusal matrix: appropriate, over-, under-, partial compliance, safe redirection, incapability masquerading, policy-ambiguous — AP @ 05-annotation-rater-roles.tex:13.
- Over- and under-refusal reported separately; collapsing them fixes a utility weighting — AP @ 07-metrics.tex:41-43, 6.
- Over-refusal is a task-fulfilment failure, not necessarily an authorization failure — DA @ 04-failure-evidence-mapping.tex.
- Blanket ignoring of lower-priority text is not robust instruction following — AP @ 03-taxonomy.tex:58.

## Contradictions

Ranked by fleet severity call. C1–C3 substantive, C4–C7 terminological, C8–C11 emphasis.

### C1 (substantive). RESOLVED 2026-07-23. Preregistered pass/fail gates vs the design-analysis case against threshold gating

As found 2026-07-22: AP conditioned Study B verdicts on interval bounds clearing fixed thresholds and treated 0.90 correctness as a bar each arm "must separately reach"; DA's design analysis shows conditioning verdicts on a one-sided lower bound is a Type M error, and frames the same quantities as design floors "not thresholds an effect has to clear"; EA independently condemns point-vs-fixed-ceiling decisions. The two papers modelled opposite relationships between a number and a verdict.

**Resolution (Brett, papers repo, 2026-07-23, verified by grep):** AP adopted DA's position. `sections/07a-limitations-next-steps.tex:30-32` now retracts the old gate form in the open ("their form was a mistake worth correcting in the open"), names the Type-M filter mechanism with citations (gelman2014types; reynolds2026delegationAssurance), and keeps the numbers as design floors: 0.20 names the smallest authority effect worth acting on, 0.90 a target precision; "no verdict is conditioned on an interval clearing a floor." Study B reports a pooled multilevel estimand (partial pooling supplying the multiplicity control the per-cell conjunctive gates lacked), subtracts a mean nuisance shift rather than the largest, and ties decisions to declared losses. The analyzer was reimplemented to compute estimates, not gate verdicts (papers repo 2f6ef77), with claim register, Study B design, and supplement updated alongside. For the book: the statistical-discipline chapter can now cite one consistent doctrine, and the correction-in-the-open is itself usable material (the papers practicing the revision protocol the book argues for).

- Side A (superseded): AP @ 07a-limitations-next-steps.tex:30-32 old text (spot-checked verbatim 2026-07-22).
- Side B (now shared doctrine): DA @ 03-framework.tex:281 (spot-checked, verbatim); cf. EA @ 05-research-program.tex:44-46.

### C2. ADJUDICATED 2026-07-23: no contradiction; downgraded to terminological/granularity. What is the authorization status of a blocked proposal?

Fleet finding (2026-07-22): DA defines the bounded trajectory so that "a boundary in which proposals are blocked before execution has n=0" and types a gate stop as downstream safeguard success; EA's worked case returns J_A substantive defeat at scope for the initiated call. Apparent disagreement on the unit.

**Adjudication (full close-read of both passages, 2026-07-23): DA and EA agree in doctrine; the defeat lives in different but explicitly mapped ledgers.**

1. DA's n=0 vacuity applies only to the *execution-trajectory* verdict, and DA maintains proposal authorization as a first-class endpoint: "proposal authorization, gate fidelity, execution authorization, and trajectory authorization as four endpoint families" (03-framework.tex:289); tool-call tasks "separately score proposal, gate decision, and execution" (04-failure-evidence-mapping.tex:60); the engine's proposal object fixes subject, executor, action, object, parameters (03-framework.tex:330). The prohibited-but-blocked call's defeat lands in the proposal-authorization family; anti-laundering is explicit: "an authorized empty execution trajectory doesn't relabel a prohibited proposal as authorized" (03:79).
2. EA's J_A(scope) defeat is an *action-level* verdict on the reviewed action a = the attempted call, not a claim that the empty execution trajectory was unauthorized. EA names the unit with a six-way action distinction (recommendation / proposal / attempted call / blocked call / completed call / downstream transaction, 05-sufficiency-test.tex:124), stipulates a regime that prohibits *initiation* without approval, and states the relativity DA's formalism leaves implicit: "Under a differently drafted regime, one that permitted attempts and made approval a precondition of transmission only, the same trajectory would yield support at scope. The verdict tracks the regime" (05:128). Same anti-laundering doctrine: the record "doesn't turn the proposal into a sent action or retroactively authorize the proposed call" (05:138).
3. Answer to the question the fleet posed (can a perfect gate record coexist with a scope defeat?): yes on both accounts, whenever the regime addresses proposals or attempts. EA's worked case is exactly this: J_R support throughout, J_A defeat at scope.

**Genuine residue (small, granularity not doctrine):** DA's trace ontology is three-way (proposal / gate decision / execution); EA's action taxonomy is six-way and splits the *attempt* out of the proposal ("The gate blocked transmission; it didn't prevent the attempt"). DA's phrase "blocked before execution" doesn't say which operation counts as executed when a call is initiated and blocked mid-pipeline; EA makes that classification regime-relative. The book annex maps EA's attempted call onto DA's proposal/initiation record and notes that "before execution" is fixed by the regime's action classification, not the gate's pipeline position.

**Adopted 2026-07-23 (Brett):** EA's six-way taxonomy is canonical for actions under review; DA's three-way ontology is canonical for trace records; the terminology annex carries the mapping. Hooks left in the papers repo DECISIONS.md: optional clarifying sentence for the DA agent at 03-framework.tex:58; awareness note for the EA agent. See both projects' DECISIONS.md, 2026-07-23.

- DA @ 03-framework.tex:58-62, 79, 289, 330; 04-failure-evidence-mapping.tex:60 (all read in full or grep-verified 2026-07-23).
- EA @ 05-sufficiency-test.tex:119-138 (read in full 2026-07-23).

### C3. ADJUDICATED 2026-07-23: fleet claim partly refuted; downgraded to role-indexing plus label drift. Four field inventories for the declare-before-you-project device

Fleet finding (2026-07-22): four incompatible mandatory field inventories; "AGI has no minimum-useful-reach or withdrawal condition"; a deployer following AGI's checklist would never state the withdrawal reach, one following DA/EA would never state the risk measure or decision criterion.

**Adjudication (all four passages read in primary text, 2026-07-23): the sharpest fleet claim is false, and the remaining differences are role-indexed, not rival.**

1. **AGI has both fields the fleet said it lacked.** Declaration field 1 includes "the minimum reach that would serve the intended use"; field 10 includes failure conditions and prospectively fixed fallback scope; and the paragraph after the list is an explicit retirement rule: "When the fallback falls below the declared minimum reach, the projection is retired for that use rather than narrowed again."
2. **The DA-side gap is doctrine-covered.** DA's card list names no risk-measure or decision-criterion field, but post-C1 DA ties any go/no-go to declared losses (03-framework.tex:281). List omission, not doctrinal conflict.
3. **The inventories are stations on the handoff.** AGI's ten fields are the full source-to-decision argument and already assign responsibility across parties ("the declaration assigns responsibility for each part of the source–target warrant"). DA's thirteen are a producer-side system-card declaration. EA's twelve adapt DA's list to program claims and omit authority regime only because R already sits in EA's review-parameter vector θ. AP's four are a working register, a deliberate subset, with fallback/retire discipline matching AGI's (07-metrics.tex: "Failure of any projective claim invokes its prospectively declared fallback, if any, or retires it").
4. **Genuine one-way deltas, both principled:** authority regime only in DA (AGI isn't about authorization; EA carries it upstream); operator/affected populations, risk measure, decision criterion only in AGI (the deployer's columns).

**Disposition (adopted, Brett, 2026-07-23):** the canonical schema is a book artifact in core-plus-profiles form, not a paper fix. Draft: `projection-declaration-schema.md` in this directory. Hooks left in the papers repo DECISIONS.md (optional producer-side sentence for DA; a claim-carrier referent question for EA; nothing for AGI or AP).

- AGI @ warranted-inference-in-agi-evaluation.tex:~161-180 (read in full 2026-07-23); DA @ 06-implications.tex:3 (read in full); EA @ 05-sufficiency-test.tex:147 (read in full); AP @ 07-metrics.tex:57-63 (read in full).

### C4 (terminological). 'Bearer' has three distinct referents

Measurement artifact (AP's projectibility bearers), measured system (DA's S, and AGI's "bearer and unit" — corrected 2026-07-23, the fleet had grouped AGI with AP), accountable person (EA's J_B candidate). The collision lands exactly on the book's central handoff (who carries what); needs an explicit lexical repair, not just care. Proposed repair in `projection-declaration-schema.md`: measured system / instrument / answerable party as three fields; bare "bearer" retired from the canonical vocabulary. Related: EA's declaration slot "claim carrier" (05-sufficiency-test.tex:147) is positionally DA's "evaluation bearer" (measured system) but reads lexically as the warrant-carrying artifact; referent question hooked to the EA agent.

- AP @ 01-evaluation-problem.tex:16; AGI @ ~165 (read in full 2026-07-23); DA @ 03-framework.tex:99; EA @ 02-evidence-primitives.tex:36, 05-sufficiency-test.tex:49-53, 147.

### C5 (terminological). Stand_R operation set differs between the assurance papers

DA: nine operations {adopt, issue, direct, amend, suspend, revoke, override, release, review}; EA glosses the same predicate with six (grant, amend, suspend, revoke, override, release). Both treat Stand_R as the shared formal primitive, so as printed the two formalizations are not interdefinable. Likely a drafting artifact; a book reprinting either inherits it.

- DA @ 03-framework.tex:24-30; EA @ 05-sufficiency-test.tex:6.

### C6 (terminological). Label drift on the standing concept, including within EA

DA: "authorization standing". EA fixes "source standing" then reverts to "authorization standing" @ 04-technical-mechanisms.tex:12. AP flags that unqualified "authorization" is ambiguous between standing and the licensed-action verdict.

- DA @ 01-introduction.tex:19; AP @ 01-evaluation-problem.tex:12; EA @ 02-evidence-primitives.tex:3 vs 04-technical-mechanisms.tex:12.

### C7 (terminological). Two canonical "four-term" quartets

DA: status, authorization standing, priority, licensing. EA: contextual status, source standing, action licensing, technical trust. A chapter that says "the four primitives" must pick one and reconcile the other.

- DA @ 01-introduction.tex:17-19; EA @ 02-evidence-primitives.tex:3 (priority surviving as "applicable conflict priority" @ 04-technical-mechanisms.tex:12).

### C8 (emphasis). Gradedness vs retire-or-fallback

AGI insists projectibility is graded and claim-relative and permits fallback retesting only at a prospectively fixed scope; AP's operational regime is binary ("failure of any projective claim invokes its predeclared fallback or retires it"). Reconcilable (graded standing plus a decision rule over it), but neither paper states the bridge; becomes substantive if the book presents AP's machinery as the operational form of AGI's account without the grading layer.

- AGI @ 113, 176; AP @ 07-metrics.tex:57-63.

### C9 (emphasis). Noncompensation: relativized doctrine, universalizing rhetoric

DA (and EA's own node semantics) relativize noncompensation to conjunctive regimes/uses; EA's PCAOB passage presents the convergence unqualified. The book must not let the PCAOB story harden into the universal principle DA denies.

- DA @ 03-framework.tex:9, 07-conclusion.tex:7; EA @ 03-governance-law.tex:26 vs 05-sufficiency-test.tex:103.

### C10 (emphasis). Disagreement as diagnostic vs disagreement as zero-tolerance error

AP preserves label disagreement as item/protocol diagnostic and refuses forced consensus; EA's analyser counts a reviewer's satisfied-J_B resolution on fixture EA-MC-019 as an error at zero tolerance ("a quantifier mistake rather than a matter of judgement"). Neither paper states the boundary criterion separating objective-error nodes from preserved-disagreement nodes; the book needs it.

- AP @ 02-pass-fail.tex:13, 05-annotation-rater-roles.tex:25; EA @ 07-appendix-fixture.tex:62.

### C11 (emphasis). Over-refusal typed to different failure families

AP: measurable safety-evaluation outcome on the refusal-calibration axis. DA: task-fulfilment failure, "not necessarily an authorization failure". Compatible layers, but a canonical refusal typology must state that the two typings classify the same event under different families.

- AP @ 05-annotation-rater-roles.tex:13, 07-metrics.tex:41-43; DA @ 04-failure-evidence-mapping.tex.

## Gaps (book-relevant themes no paper covers)

- **G1. The adversary proper.** AP defines 'adversarial' as evaluation conditions, not the speaker; no paper supplies a threat model with an adaptive, cost-bounded attacker, attack economics, or red-team methodology. The thesis ("security is where an adversary exploits both problem families at once") asserts an intersection no source paper occupies; the security chapter has no parent paper.
- **G2. Interpreting natural-language regimes.** All formal machinery assumes R^stip; DA names R^inst but doesn't develop it. Real mandates and policies are themselves natural-language texts, so regime interpretation is language-mediated control one level up. No paper covers how an NL policy becomes a Q_R, who adjudicates rival readings, or what happens when the applicability map's author is a party.
- **G3. Claimant-side access and contestability.** EA states that whether an affected person could realistically reach the forum "is a construct the framework does not yet measure" (02-evidence-primitives.tex:40). Robodebt shows exactly this failure mode; a book using Robodebt needs the affected-person's-eye view no paper supplies.
- **G4. The decision itself: signing off.** Every paper refuses aggregation; but the law-firm CTO must make a binary deployment decision under liability. No paper supplies the decision-theoretic layer: loss functions over error types, cost elicitation, how a typed verdict vector plus graded projectibility standing becomes a yes/no with stated risk acceptance. The book's climactic handoff moment is currently unauthored.
- **G5. Warrant decay under model churn.** No account of what continuous model updates, fine-tunes, silent provider-side changes do to standing warrants: re-evaluation cadence, version-equivalence criteria (EA flags H.R. 7390 never defines a "version"), or who bears the monitoring duty over time.
- **G6. Reader-side pragmatics of assurance documents.** No paper studies how decision-makers actually read system cards or typed verdict vectors: comprehension, misreading of hedges, the pragmatics of NOT_ESTIMATED landing on a procurement desk. The papers' own pragmatics toolkit is never turned on assurance communication itself.
- **G7. Long-horizon and multi-turn empirics.** AP's transcript-interpretation family is one one-turn pair; multi-turn deferred to Study B; every long-horizon claim routes through OpenAI's non-replicable public report. Needs a trajectory-level evaluation method or an honest statement that this evidence class doesn't exist yet.
- **G8. Economics and institutions of assurance.** Who pays for typed records, and what makes anyone keep them? Missing: procurement contracting, insurance/liability pricing as demand drivers, audit-market dynamics, professionalization of the reviewer role. EA's capture warning (05-research-program.tex:108) raises the question and stops.
- **G9. Legal liability allocation.** All four papers fence off legal liability. The book's deployment reader carries it; the mapping from J_B verdicts and record adequacy to negligence standards, discovery exposure, and indemnities is what the law-firm CTO will ask. Needs a jurisdictionally-hedged bridge chapter with real litigated incidents.
- **G10. Documented-case depth.** The papers' shared case corpus is thin: Robodebt (well-grounded), two unverifiable vendor self-reports, one introduced-not-enacted bill, one fictional worked example. No litigated or tribunal-adjudicated AI incident is analyzed end-to-end through the typed framework; no case-selection methodology stated. The cases/ pipeline must supply what the papers don't.
- **G11. Human oversight as measured practice.** Reviewer error rates are a planned estimand with zero observations everywhere (all NOT_ESTIMATED). The standard's human load-bearing component is empirically uncharacterized; worth a chapter on oversight as labour, vigilance decay, rubber-stamping risk.
- **G12. Positive design guidance for the eval-team reader.** The papers are diagnostic and prohibitive; the forward-direction workflow (from the deployer's declaration back to item construction and record demands) exists only implicitly. The eval-lead audience needs it assembled.

## Gate 1 Implications (invoking session's reading, not fleet output)

1. **The thesis survives the glossary but needs the degree × bearer statement.** Projectibility is used consistently at the Goodman core across all four papers; the book must present AGI's grading and AP's bearer-typing as complementary axes up front.
2. **Two gaps strike the thesis directly.** G1: the "security is the stress case" clause has no parent paper; either the book writes that threat-model material fresh or the thesis demotes security from load-bearing clause to illustration. G4: the handoff the book claims as its subject terminates in a decision layer no paper authored. These are the two places the premortem should push hardest.
3. **Chapter 5 candidate ("94% of what?") is well fed; chapter 6 candidate ("the undiagnosable incident") is validated by G10.** The papers' own case corpus can't type a real incident end-to-end, which is the book's argument made by its own sources.
4. **The book needs a terminology annex from day one.** C4 (bearer), C6/C7 (standing, quartets), and C5 (operation sets) mean chapters can't just quote the papers; a single canonical vocabulary with per-paper mappings is a precondition for drafting, not a polish task.
5. **C1 resolved in the papers (2026-07-23), and the resolution is book material.** AP adopted the design-floor/pooled-estimand form and retracted the old gates in the open. That correction is a live instance of the versioned-revision protocol the book argues for; a chapter on statistical discipline for assurance evidence can open its self-application section with it.
