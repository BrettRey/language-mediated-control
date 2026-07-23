# Case Harvest, 2026-07-23 (handoff-priority run)
<!-- SUMMARY: Fleet harvest, 37 raw → 16 ranked candidates; handoff concept now best-covered (Epic Sepsis flagship); adversarial-pragmatics is the thin concept; all entries sources-identified, none verified · status: sources-identified · updated: 2026-07-23 -->

Run `wf_1d2b8ec9-4f1`, five sonnet sweepers (AIID, AIAAIC, courts, regulators, press) + strong-model triage, with the premortem's priority target: an eval claim reaching a decision-maker and failing to warrant the decision. 37 raw candidates, deduped to 16. **Status of every entry: sources identified by fleet; nothing here is verified.** Duplicate clusters disagreed on specific figures (Moffatt award, Robodebt counts, Dutch DPA fine, Epic's claimed AUC), which is itself the book's point: numbers get pinned only by case-verify against archived primaries.

## Headline (triage's coverage notes)

**The priority handoff concept is the best-covered in the pool.** Flagship: Epic Sepsis Model external validation, "the exact requested shape": a vendor-reported eval number (claimed AUC 0.76-0.83, per-source variance noted) crossed the handoff to hundreds of hospital deployment decisions, and a peer-reviewed JAMA Internal Medicine external validation (reported AUC 0.63, sensitivity 33%, PPV 12%; all figures unverified here) quantifies what the number could not warrant. Triangulation variants with different structure: Ofqual 2020 (distribution → individual), State v. Loomis (group-validated score → individual sentencing, the only case where the warrant question is argued inside the primary record), Robodebt (annual average → fortnightly liability, Royal Commission record), Michigan MiDAS, Optum/Obermeyer (proxy → target).

**Gaps the triage named:** (1) adversarial-pragmatics has NO strong documented candidate: Chevrolet-Watsonville (score 5) and DPD (4.5) are textbook concept fits but press/screenshot-grade, "fails the project's chapter-opener bar as it stands"; a targeted harvest for litigated or officially reported injection incidents is required if that chapter needs a case opener. (2) confused-deputy has no dedicated candidate. (3) confident-citation's canonical fabricated-citation case was absent from the pool (Mata v. Avianca is already in hand and probed VIABLE, so this gap is closed outside the harvest). (4) undiagnosable: NEDA/Tessa is the best deliberate candidate (deployer-vendor dispute about what the system even was, unresolvable from the public record).

## Ranked Candidates

| # | Slug | Concept | Score | Anchor sources (fleet-reported) | Key risks |
|---|------|---------|-------|--------------------------------|-----------|
| 1 | epic-sepsis-model-external-validation | aggregate-scores; assurance-unassured | 9 | JAMA IM 2781307; PubMed 34152373; PMC10317482 | Epic disputed methodology; vendor's claimed AUC needs a citable primary anchor (proprietary validation); model later revised (version discipline); single-site scope |
| 2 | australia-robodebt | aggregate-scores; assurance-unassured | 9 | robodebt.royalcommission.gov.au report; APRA-hosted overview PDF | Not ML (deterministic averaging): the book must make the connection explicit or it reads as scope creep; figures vary across sources, pin to Commission report; record size = extraction cost |
| 3 | moffatt-v-air-canada | delegation | 8.5 | 2024 BCCRT 149 (archive the decision itself, not summaries) | Low; small-claims tribunal, modest precedential weight; award figure varies in secondaries (650.88 vs 812.02 CAD), resolve from decision |
| 4 | ibm-watson-oncology-md-anderson | assurance-unassured | 8 | STAT 2018 investigation + STAT-hosted internal-slides PDF; UT System audit coverage | Internal documents known only via STAT; conflates two distinguishable incidents (MD Anderson procurement vs product-safety findings), keep typed separately |
| 5 | ofqual-2020-grading-algorithm | aggregate-scores | 8 | Hansard 2020-09-23; Ofqual technical report + Select Committee report (swap in as primaries) | No adjudicated finding; harvest sources lean secondary; statistical model, not AI (same framing burden as Robodebt) |
| 6 | state-v-loomis-compas | aggregate-scores | 8 | wicourts.gov opinion PDF (2015AP157-CR); Harvard L. Rev. note | Court upheld the use (warrant problem negotiated, not failure adjudicated); heavily worked ground, needs a fresh angle |
| 7 | michigan-midas-bauserman | aggregate-scores / delegation | 7.5 | Bauserman MSC opinion PDF; Michigan Auditor General report PDF | The circulating 93% error rate needs a primary anchor or gets dropped; overlaps Robodebt (one carries a chapter, the other comparators) |
| 8 | optum-algorithm-racial-bias-obermeyer | aggregate-scores (proxy→target) | 7.5 | Science aax2342 | Single primary; vendor naming comes from journalism, not the (anonymized) paper; the handoff side is inferred, not documented |
| 9 | evolv-weapons-detection-ftc-utica | assurance-unassured / aggregate-scores | 7.5 | FTC complaint + consent order (2024-11-26 timeline item) | Test statistics need verification against underlying investigations; missed-knife/stabbing causal link must stay typed (finding vs causal); consent order = no adjudicated facts |
| 10 | ftc-rite-aid-facial-recognition | assurance-unassured (zero-testing pole) | 7 | FTC complaint PDF 2023190 | Allegations unadjudicated; not language-mediated, comparator only |
| 11 | zillow-offers-ibuying-shutdown | aggregate-scores | 6.5 | SEC 8-K Nov 2021, 10-K 2021 (company's own filings) | Evaluator = deployer, so the handoff structure is weak; litigation status unverified; internal accuracy claims not public |
| 12 | dutch-childcare-benefits-toeslagenaffaire | assurance-unassured / aggregate-scores | 6.5 | Dutch DPA decision (via GDPRhub); "Ongekend onrecht" parliamentary report | Core primaries in Dutch; fine amount varies across sources; high verification cost, comparator until then |
| 13 | eeoc-itutorgroup | delegation (nearest confused-deputy, imperfect) | 6.5 | EEOC settlement release + consent decree | Explicitly programmed rule: delegation-of-policy, not instruction/authority confusion; consent decree, no adjudicated findings |
| 14 | ftc-donotpay-robot-lawyer | confident-citation (marketing variant) | 6.5 | FTC complaint + final order 2025-02 | Consent order; covers claims about outputs, not fluent-fabricated-support itself; modest stakes |
| 15 | ftc-intellivision-facial-recognition | confident-citation (marketing variant) | 6 | FTC complaint + final order 2025-01 | No downstream harm narrative; supporting example only |
| 16 | neda-tessa-chatbot | undiagnosable (deliberate exhibit) | 6 | NPR, CNN, AIID 545 (journalism-only, which is the point) | Central fact contested and unadjudicated; usable only if the chapter's point is the record's insufficiency itself |
| 17 | chevrolet-watsonville-dealer-chatbot | adversarial-pragmatics | 5 | VentureBeat; AIID 622 (plus probe: Fullpath CEO on record, BI original reporting) | No filing, regulator, or deployer confirmation of the $1 exchange; in-chapter illustration, not an opener |
| 18 | dpd-chatbot-prompt-injection | adversarial-pragmatics | 4.5 | Trade press only | Thinnest record in pool; footnote-grade; redundant if Chevrolet is used |

## Dedup Notes

Epic (x3), Watson (x3), Moffatt (x4), Robodebt (x4), Ofqual (x2), Dutch benefits (x2), Loomis (x3), Zillow (x2), MiDAS (x2), NEDA (x2) merged with sources unioned; figure disagreements recorded above.

## Query Appendix (negative-claims evidence)

48 sweep queries recorded in the run output; representative coverage: AIID and AIAAIC entity searches; court/tribunal searches (Moffatt/BCCRT, Loomis/Wisconsin, Bauserman/Michigan, Robodebt Royal Commission); regulator sweeps (FTC actions: Evolv, Rite Aid, DoNotPay, IntelliVision; Dutch DPA; UK Ofqual/Select Committee); vendor-claim litigation probes ("AI vendor benchmark score lawsuit breach of contract 'did not perform' procurement audit government"); press sweeps for Epic/JAMA, Watson/STAT, Zillow/SEC, NEDA, DPD, Chevrolet. The full 48-query list is preserved in the workflow output and should be copied here if this note outlives the session directory: run `wf_1d2b8ec9-4f1`, `tasks/wzluiiq68.output`.

## Next Actions

1. Case-verify the chapter-1-tier candidates in chapter order once Brett cuts the list: Avianca and Moffatt (probed VIABLE), Epic Sepsis (handoff flagship), Deloitte (probed VIABLE-WITH-COST: close Hansard, Wayback PDF capture, AusTender via browser).
2. Targeted second harvest if the adversarial-pragmatics chapter needs a documented opener (litigated/officially-reported injection incidents), or accept Tahoe as in-chapter illustration under thesis v0.2's demotion of the security clause.
3. Deloitte time-sensitive item, partially closed 2026-07-23: Wayback holds a 2025-08-14 snapshot of the DEWR assurance page (pre-correction era); whether the original PDF itself is captured needs a CDX check before relying on it.
