# Thesis and Chapter List (Gate 1 Working Doc)
<!-- SUMMARY: Gate 1 working doc: thesis v0.2 post-premortem-surgery (security demoted, handoff sharpened), chapter menu pending source-viability probes · status: draft-v0.2 · updated: 2026-07-23 -->

Gate 1 requires this document to survive a pressure test before any chapter drafting starts. The premortem ran 2026-07-23 (`premortem-transcript-2026-07-23-095245.md`); its verdict: do not close Gate 1 on v0.1. The revised plan was adopted the same day; v0.2 below implements the thesis surgery and awaits Brett's sign-off. Case facts remain memory-derived and unverified until probes and case files say otherwise.

## Thesis Paragraph (v0.2, post-premortem draft, pending Brett's approval)

Control of AI systems and evidence about AI systems both run through natural language. That single channel imports two problem families that engineering practice treats as solved. The first is pragmatics: what counts as an instruction, whose instruction carries authority, whether a string is quoted or commanded, whether a request is literal or indirect. The second is projection: what observing a result on an evaluation licenses anyone to predict about a deployment. Prompt injection and the confused deputy show that an adversary can exploit both at once, and the book uses those cases where the record supports them, but it offers no threat model and defers to the security literature where that literature owns the question. Its subject is the quieter failure that needs no adversary at all: evidence produced by evaluators reaches decision-makers who cannot tell what it warrants, and decisions get made on evidence that was never able to support them.

**Surgery rationale (premortem dive 1):** v0.1's "security is the stress case" promised a chapter no source paper can parent (G1: no threat model, no adversary economics anywhere in AP/DA/EA/AGI). v0.2 keeps the adversary as demonstration, scoped to what the papers actually support (injection, confused deputy), states the non-claim explicitly, and moves the book's weight onto the handoff, which is where its evidence lives.

## Thesis Paragraph (v0.1, superseded 2026-07-23)

Control of AI systems and evidence about AI systems both run through natural language. That single channel imports two problem families that engineering practice treats as solved. The first is pragmatics: what counts as an instruction, whose instruction carries authority, whether a string is quoted or commanded, whether a request is literal or indirect. The second is projection: what observing a result on an evaluation licenses anyone to predict about a deployment. Security failures are the stress case where an adversary exploits both at once, and assurance failures are the quiet case where nobody exploits anything and the handoff fails anyway: evidence produced by evaluators reaches decision-makers who cannot tell what it warrants, and decisions get made on evidence that was never able to support them.

## Candidate Chapter Shapes (case → concept pairs, all unverified)

Not an outline yet; a menu for Gate 1 to cut. Each entry: opening case candidate → the concept it carries.

1. **The confident citation** ~-- *Mata v. Avianca* (sanctioned lawyers, fabricated citations) → what a fluent assertion licenses; evidence vs confidence; the evidentiary-assurance frame.
2. **Whose words are these?** ~-- *Moffatt v. Air Canada* (tribunal rejects "the chatbot is a separate entity") → delegation, agency, and authority; who speaks when a system speaks.
3. **The dollar Tahoe** ~-- Chevrolet dealership chatbot talked into a $1 sale → adversarial pragmatics in deployed agents; instructions vs quotations vs performances; the confused deputy.
4. **Assurance unassured** ~-- Deloitte Australia refunding a government report with fabricated references → assurance evidence that itself fails assurance; who audits the audit.
5. **94% of what?** ~-- a vendor eval report case, TBD from harvesting → aggregate scores, projection, and what a benchmark number can and cannot warrant.
6. **The undiagnosable incident** ~-- a case chosen precisely because the public record cannot type the failure → the documentation standard; what would have had to be recorded; the book's constructive proposal.

## Structural Notes

- Each chapter closes with the diagnosability question: what documentation would have made this case typable?
- Typed-claims machinery appears as procurement-grade checklists with the construct-validity argument underneath.
- The pragmatics and projection halves need explicit joints, not alternation for its own sake. **Premortem requirement (dive 6): at least one committed early chapter's case must need both problem families to resolve.** Candidate: Deloitte, where fabricated references in an assurance report are simultaneously a whose-words case and an evidence-reach case.
- Chapter menu status (2026-07-23, probes and harvest done): Avianca VIABLE; Moffatt VIABLE; Deloitte VIABLE-WITH-COST (Hansard for the refund figure, PDF-version archaeology); Tahoe VIABLE-WITH-COST but demoted to in-chapter illustration (the $1 exchange rests on an uncorroborated screenshot; harvest triage scored it 5, below the opener bar). **Chapter 5 is no longer TBD:** Epic Sepsis Model external validation is the handoff flagship (harvest score 9), with Ofqual, Loomis, Robodebt, MiDAS, and Optum/Obermeyer as structural variants; see `case-harvest-2026-07-23.md`. The harvest's inverse finding: adversarial-pragmatics now lacks a documented opener, consistent with v0.2's demotion of the security clause; chapter 3 either runs on Moffatt-adjacent delegation material with Tahoe as illustration, or waits on a targeted injection-case harvest.

## Gate 1 Checklist (expanded 2026-07-23 per premortem)

- [x] Thesis paragraph pressure-tested: premortem run 2026-07-23; v0.2 surgery drafted (Brett's sign-off pending)
- [ ] Source-viability probe completed per candidate case; every committed chapter has a confirmed primary layer
- [ ] One verified handoff case in `../cases/`, or an explicit thesis reframe on record
- [ ] Decision-layer spike note (typed verdicts + graded projectibility + declared losses → worked toy sign-off) survives a review board
- [ ] Joint demonstration: at least one committed early chapter needs both problem families
- [ ] Chapter list cut to a committed sequence with a completion criterion
- [ ] Each retained chapter has a verified case file in `../cases/`
- [ ] Distribution floor: mailing list live, analytics wired, announcement plan written (Books in Progress resolved 2026-07-23: not open to outside work; fully self-hosted path)
- [ ] Methods page live in repo; visible prose beyond the preface
- [ ] Title decision explicitly deferred (confirm working label is harmless)
- [ ] License confirmed (CC BY-NC-ND vs CC BY) before first public release

Standing discipline (not checklist items): weekly book slot with referee-deadline status; kill-or-continue review 2026-10-01; week-8 tripwire on the preface placeholder ("nothing here but this page" still true past mid-September = fired tripwire).
