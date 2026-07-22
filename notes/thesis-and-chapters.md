# Thesis and Chapter List (Gate 1 Working Doc)
<!-- SUMMARY: Pre-Gate-1 draft thesis paragraph and candidate chapter shapes; nothing here is pressure-tested or verified · status: draft · updated: 2026-07-22 -->

Gate 1 requires this document to survive a pressure test (premortem or review board) before any chapter drafting starts. Everything below is v0.1: candidate, not commitment. Case facts are memory-derived and unverified (see `source-verification.md` and `../cases/`).

## Thesis Paragraph (v0.1)

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
- The pragmatics and projection halves need explicit joints, not alternation for its own sake; Gate 1 should test whether the two-family thesis holds the chapters together or straddles two books.

## Gate 1 Checklist

- [ ] Thesis paragraph survives a premortem (what kills this book?)
- [ ] Chapter list cut to a committed sequence with a completion criterion
- [ ] Each retained chapter has a verified case file in `../cases/`
- [ ] Title decision explicitly deferred (confirm working label is harmless)
- [ ] License confirmed (CC BY-NC-ND vs CC BY) before first public release
