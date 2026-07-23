# Decision-Layer Spike: From Typed Verdicts to a Signature
<!-- SUMMARY: Note-scale method sketch for the book's payoff chapter (how assurance evidence becomes a sign-off under liability); premortem revision 4; awaiting review-board · status: draft-for-review-board · updated: 2026-07-23 -->

Premortem gap G4: every source paper refuses aggregation and stops short of the sign-off, and the book's climactic chapter is unauthored. This note tests whether the method can be assembled at all. If it survives a review board, chapter 6 has a spine; if it doesn't, the book's promise honestly narrows to "what to demand" and says so from the start.

Sourcing discipline: each component below is anchored to a paper or marked **[synthesis]**, meaning the book supplies it and must defend it. All numbers in the worked example are stipulated for illustration, not data.

## 1. What the decision actually is

Not "is the system safe," and not even "deploy or don't." Three corrections come straight from the papers:

1. **The decision is indexed.** It accepts one declared projection (claim, population, conditions, time/version range, use) at a stated risk acceptance, per the projection declaration (schema draft, this folder). A different matter mix, model version, or use is a different decision (AGI: a changed endpoint is a new query; EA: a changed mandate or meaning creates a new target claim).
2. **The action set is declared, not binary.** AGI's own example enumerates release, restricted use, mandatory review, no deployment. Sign-off means choosing from a prospectively declared action set.
3. **The signature is itself an authority operation.** The signer needs standing under the firm's regime, the decision gets a record meeting the applicable record specification, and the revision rule gets a named owner (DA: Stand_R and the authorization record; EA: S_action). The sign-off document is not a summary of the decision; it is the decision's evidence layer, produced at signing time.

## 2. The two-layer method [synthesis, from anchored parts]

**Layer 1: eligibility (noncompensatory, regime-relative).** Before any weighing, typed preconditions must hold. Required verdict-family nodes at support where the regime or the validated use is conjunctive (EA's use rule: support at every required node, some single answerable bearer, some single forum; DA: noncompensation applies exactly where the regime is conjunctive, and nowhere else). Evidence marked NOT_ESTIMATED is not evidence. A record gap at a prospectively required node blocks. Eligibility does not judge the deployment; it judges whether the evidence is admissible for this decision. A vendor eval that fails eligibility does not yield a "no": it yields a demand list, the exact missing fields, which is the book's what-to-demand checklist falling out of the method rather than being bolted on.

**Layer 2: declared-loss comparison (compensatory where the use permits).** For actions that pass eligibility, the choice follows declared losses over the declared risk measure, computed on the estimand posteriors, not on pass/fail labels. This layer is almost fully authored by AGI: report the estimate and its uncertainty continuously; the decision needs the posterior probability that the constrained quantity (for example a worst-tail rate) violates the declared constraint, together with the losses of the available actions; any action rule is justified against those declared quantities, not against an imported convention. DA post-C1 says the same: where a go/no-go is needed, it follows from the declared losses.

**Why the layers don't collapse into one** [synthesis, defends against the obvious objection]: a regime-required node can't be priced. Setting a gate violation's loss to "very large" still makes it purchasable in principle and invites exactly the compensation the regime forbade. Noncompensation is structural, DA insists, and only where the regime is conjunctive; encoding it as a loss both weakens it there and wrongly imposes it elsewhere.

## 3. Where graded projectibility enters [synthesis, anchored to AGI]

Not as a multiplier. Projectibility is the evidential support that observations plus revisable background assumptions give the declared source–target link (AGI). Operationally: for each declaration field, the sign-off records whether the link is carried by evidence or by an assumption the deployer now owns. Weakly supported links don't shrink a score; they move weight from the evidence column to the assumption column, and the target posterior widens or becomes explicitly assumption-driven. The signed document therefore contains an **assumption register**: which parts of the warrant are evidence-backed, which are assumed, who owns each assumption, and what observation would discharge or defeat it. Liability follows that register, which is what makes the document legible to counsel: it has the structure of a representation-and-warranty schedule, not a dashboard.

## 4. Worked toy: the law-firm contract-review assistant

Stipulated throughout; no real vendor or data.

The firm's CTO considers an assistant for first-pass NDA review. Declared action set: full deployment; restricted use (NDAs only, mandatory lawyer review); monitored pilot; no deployment. Declared risk measure: missed-material-clause rate per document, worst practice-area tail (tail fraction and minimum tail count declared). Declared constraint: tail rate at most 0.05, decided against the posterior (met only when the interval clears, EA-style). Declared losses: a missed clause costs fifty times a false flag (stipulated).

The vendor's eval report says "94% clause-detection accuracy." Layer 1 runs first: the declaration demands the source population, model version range, per-category and tail results, and scorer provenance. The report supplies none. **Eligibility fails, and the output is not "no": it is the demand list**, six named fields, sent back through procurement. This is the realistic first pass, and the book should say so: most sign-off processes today terminate here, and terminating here with a demand list is already a better outcome than either signature or refusal.

Suppose the vendor returns component results on a matched document population with tail reporting. Layer 2 now runs for the actions that pass: the firm computes the posterior probability that its worst practice-area tail exceeds 0.05, with the transport assumptions (document mix, version identity, prompt wrapper) entered in the assumption register as firm-owned. Expected losses over the four actions favour restricted use with monitoring (stipulated arithmetic). The CTO signs **that projection**: restricted use, NDA population, stated version range, tail constraint, with revision triggers named (any model-version change voids the claim; quarterly matter-mix check; an incident count threshold that forces re-review) and an owner for each.

The signed page is one side of paper: the claim, the eligibility verdicts, the posterior against the constraint, the loss comparison, the assumption register, the revision triggers, the signer's standing. That page is the book's deliverable.

## 5. What would defeat this note (for the review board)

1. **The collapse objection**: layer 1 is just layer 2 with big losses. Section 2's answer must survive a hostile decision theorist.
2. **The subjectivity objection**: the assumption register relabels arbitrariness. Answer to defend: it is Messick/Kane's interpretation-and-use argument made procurement-legible; the alternative is not objectivity but undeclared assumptions.
3. **The regress objection**: the sign-off record itself needs assurance (who audits the signature?). Answer: EA's machinery applies to it, and the book should show one loop of that regress and stop it by regime, not by pretending it terminates naturally.
4. **The practice objection**: no procurement office computes posteriors. Answer to defend: the demand-list outcome (the realistic terminus) requires no computation at all, and the full method is the standard the demand list is backed by. If the review board finds the posterior machinery does no work the demand list doesn't, chapter 6 should be the demand list, and this note's section 2 shrinks to an appendix.
5. **The novelty check**: is any of this already in the assurance/audit literature (SR 11-7 model risk management, PCAOB sufficiency/appropriateness, safety-case practice)? Inward-then-outward search required before the chapter claims the assembly as its own.
