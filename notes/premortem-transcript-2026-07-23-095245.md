# Premortem Transcript: Gate 1, Language-Mediated Control
<!-- SUMMARY: Full Gate 1 premortem record: 10 failure dives + synthesis; verdict: Gate 1 must not close as-is, five revisions required · status: complete · updated: 2026-07-23 -->

Run 2026-07-23 (timestamp 095245). Frame: it is late January 2027, six months out; the book has failed; we are looking back at why.

## Context Gathered

- **What:** *Language-Mediated Control* (working label), an open-access, built-in-public, chapter-serialized book synthesizing four papers (AP, DA, EA, AGI). Gate 1 asks whether the thesis paragraph and six-chapter candidate list survive pressure-testing before drafting.
- **Who:** eval team leads (producers of assurance evidence) and deployment decision-makers, exemplarily a law-firm CTO (consumers carrying liability). Same chapters serve both. Author: Brett Reynolds, academic linguist, active AI-evaluation job search.
- **Success:** Gate 1 = thesis + committed chapter list sturdy enough to draft against, each retained chapter with a verified case file. Gate 2 = two released chapters with real readership + ≥2 papers peer-reviewed. Career capital is the dominant payoff channel.
- **Sources consulted:** `notes/thesis-and-chapters.md`, `notes/project-brief.md`, `notes/paper-concordance.md` (incl. gaps G1/G4/G6/G10 and this week's C1–C3 resolutions), `notes/projection-declaration-schema.md`, `STATUS.md`, `DECISIONS.md`, `cases/README.md`, current repo state (public, preface only, zero chapters, zero verified cases, fleet harness committed).

## Raw Failure Reasons (10, as dispatched)

1. **Security orphan (G1):** the thesis's "security is the stress case" clause has no parent paper; the security chapter fails as amateur or the clause demotes and the thesis deflates.
2. **Unauthored decision layer (G4):** the climactic sign-off chapter required original decision-theoretic work; the book stalled at its payoff.
3. **Verification bottleneck:** the primary-source non-negotiable made per-chapter cost unbounded; cadence died.
4. **Case-to-thesis mismatch:** four confabulation/liability openers, zero documented handoff cases; the distinctive book died inside a generic AI-failure casebook.
5. **Dual-audience register failure:** same chapters served neither reader; comment margins bifurcated.
6. **Two books stapled:** the pragmatics and projection halves never joined inside any chapter; a publisher's reader named it.
7. **Silent launch:** no distribution habit, no list, no instrumentation; Gate 2 misread empty reach as failed content.
8. **Sequencing starvation + public stall:** papers/REB/job search kept first claim; the public repo sat visibly abandoned during interview cycles.
9. **Source-paper drift under peer review:** referees attacked claim architecture, not wording; the changelog read as instability.
10. **AI-authorship optics:** the public fleet harness next to an empty chapters/ directory framed the book as "the Claude book" before content existed.

## Deep Dives (10 parallel sonnet investigators, verbatim)

### 1. Security orphan

THE FAILURE STORY: By September the concordance's G1 flag stopped being a footnote and became the chapter. Brett drafted the Tahoe-dealership chapter fast, because it was the most vivid case, and reached for "adversary," "attack surface," and "confused deputy" to make the thesis's stress-case clause work. None of that vocabulary existed in AP, DA, EA, or AGI: AP's own "adversarial" meant evaluation conditions, not a hostile party with a budget. The chapter shipped anyway, because Gate 1 pressure-testing happened on the thesis paragraph, not on chapter drafts, so nobody re-ran the check once prose existed.

Two reviewers who work AI red-teaming professionally read the released chapter in October. Neither engaged the pragmatics argument. Both flagged the same thing: no adversary cost model, no capability bound, treating "the chatbot said something embarrassing" as equivalent to an attack. One review used the word "amateur" in a thread that got quoted. Brett pulled the chapter back to revise, discovered the fix required either a fifth source paper he didn't have or genuinely learning attacker-economics from scratch, and by December had rewritten "security is the stress case" down to "security is illustrative." The thesis paragraph lost its sharpest clause. What was left, evaluation evidence needs typed claims and a documentation standard, was true and defensible but no longer had a hook a security-adjacent reader would forward to anyone.

THE UNDERLYING ASSUMPTION: Brett assumed that because AP used the word "adversarial" and he could write fluently about pragmatics, he already had a security chapter, when he had a chapter about miscommunication that borrowed security's vocabulary without its object.

EARLY WARNING SIGNS: (1) A chapter draft using "adversary," "attack," or "exploit" where the cited source paper is AP, DA, EA, or AGI, none of which define an adversary. (2) Gate 1's pressure test log shows no line item for G1 specifically closed before the Chevy Tahoe chapter is drafted.

### 2. Unauthored decision layer

THE FAILURE STORY: By September, five of six candidate chapters had cleared case-verify and released: Mata, Moffatt, the Chevy Tahoe bot, Deloitte, "94% of what." Each closed with the promised move, "what documentation would have made this diagnosable," a negative result and a checklist. Readers liked them; eval-team leads shared them. Then came the chapter the whole book pointed at: the one where the CTO reader learns how to actually sign. Brett opened a doc, wrote the schema fields again (risk measure, decision criterion, losses), and stopped. The projection-declaration schema named the slots; it never said how a typed verdict vector and a graded projectibility score combine into something a general counsel could act on. That combination didn't exist in AP, DA, EA, or AGI (the concordance had flagged this as G4 in July, noting all four papers deliberately refuse aggregation). Writing it meant new decision-theoretic work, not synthesis, and the sequencing rule against becoming "the conceptual-mode escape hatch" meant this chapter, being genuinely hard, kept losing to paper deadlines. By December the repo held five polished chapters and one file, chapters/06-decision-layer.qmd, reopened a dozen times with no paragraph surviving two sessions. A reader comment on chapter 5 asked, plainly, "so what am I supposed to do with a 94%?" The book never answered.

THE UNDERLYING ASSUMPTION: Brett assumed that naming the schema's fields in July meant the hard work of chapter 6 was mostly done, when naming slots and authoring a method to fill them are different orders of difficulty.

EARLY WARNING SIGNS: (1) Git log on chapters/06 shows repeated deletions and rewrites of the opening section, no complete draft surviving, across successive months. (2) Gate 2's peer-review threshold gets hit while chapter 6 is still unwritten, and nobody flags it, because "the book runs behind the papers" quietly absorbs the stall as normal sequencing rather than as the failure it is.

### 3. Verification bottleneck

THE FAILURE STORY: August: Brett opens Mata v. Avianca. PACER wants an account and per-page fees for a docket that runs to hundreds of entries across multiple motions; the sanctions order alone is easy, but "verified against primary sources" means the exhibits too, and pulling those between a day job and job-search interviews eats three weekends. Chapter 1 archives in week six, later than planned but survivable.

September: the Tahoe chatbot chapter, chosen for its virality, turns out to have no primary layer at all. The vendor never published anything. The dealership never confirmed the pricing terms happened as described. What exists is Twitter screenshots and press that cites the screenshots. The non-negotiable has no source to point at, so the chapter can't be written, but nobody had budgeted time to discover that before committing the slot. Two weeks vanish confirming a negative.

October: Deloitte looks easier (a government department statement, a corrected report exist) until the number that makes the case a case, the refund figure, sits only in press coverage, not in either primary document. Brett spends a week deciding whether "press-reported, department-unconfirmed" clears the bar, then rewrites the case file to flag it as unverifiable-as-headlined rather than force it.

By January: one chapter shipped, a second half-verified, three of six candidates disqualified or stalled at "sources identified." The two-week Brand cadence never starts. Readership, which needed cadence to build, never builds.

THE UNDERLYING ASSUMPTION: That "verify against primary sources" is a fixed, boundable cost per case rather than a variable one that can run from a day to indefinite, with no way to know which in advance.

EARLY WARNING SIGNS: (1) Zero case files move from "sources identified" (fleet output) to "verified" (human-archived, hashed) in the first three weeks after case-harvest runs. (2) The cases/ directory has more candidate entries flagged "primary source thin/unavailable" than entries with a recorded file path and hash.

### 4. Case-to-thesis mismatch

THE FAILURE STORY: By September, the case-harvest fleet workflow had been authored but never run against the book's actual target: a documented instance of an eval number reaching a deployment decision-maker who acted on a warrant it never carried. Instead, effort went to hardening the four easy cases already in hand (Avianca's court filings, Moffatt's tribunal ruling, the Tahoe chatbot screenshots, Deloitte's correction notice) because they had primary sources sitting right there. Chapters 1-4 came in polished and adversarially reviewed. Chapter 5 stayed "TBD from harvesting" through October: nobody could find a named, dated, paper-trailed case of a benchmark score misleading a real deployer. Chapter 6, defined by an absence of documentation, was never going to have one.

Brett released chapters 1-2 in November to build audience, per the plan. They landed well; one thread called it "AI Snake Oil with footnotes." But reviewer comments on the draft noted the "handoff" thesis was "interesting but untested" by chapters 3-4, which were just more chatbot-liability stories. Nobody asked where chapter 5 was, because 1-4 already read as a complete, satisfying book. Gate 1's pressure test never actually convened; four working drafts had already overtaken the thesis paragraph they were meant to test.

THE UNDERLYING ASSUMPTION: Brett assumed a case matching the book's real subject (assurance evidence failing at the producer-to-deployer handoff) would turn up from the same harvesting process that surfaced the easy chatbot-liability cases.

EARLY WARNING SIGNS: (1) Chapter 5 stays labeled "TBD from harvesting" past the point 1-4 have verified case files with hashes. (2) The concordance's G10 finding (no litigated incident run end-to-end through the typed framework) sits unactioned rather than blocking Gate 1.

### 5. Dual-audience register failure

THE FAILURE STORY: Chapter 1 (Avianca) shipped in September. Its case recap ran long: eval-lead readers had already read the sanctions order and three newsletter write-ups of it, so the opening felt like a delay before the argument. Chapter 2 (Moffatt v. Air Canada) introduced Stand_R(x,o,q,t) in a display block, glossed in two sentences, then used for the rest of the chapter to derive J_A and J_R. Analytics showed a scroll-and-return pattern right at that block: CTO-reader dwell time spiked, then dropped to zero. They never reached the "what would make this diagnosable" close, the one section built for them.

Meanwhile the eval-lead readers reached that close fine and found it thin: "record the authorization scope in writing before deployment" read as Messick 101, obvious because the formal argument above it had already done the real work, just not for them. By chapter 3, GitHub issues carried two tags nobody created on purpose: "more law" and "more math." A sidebar softening the notation satisfied neither camp: the CTO thread called it "still a formula," the eval-lead thread called it "decorative." The comment margins had split into two audiences asking for two different books, and the site analytics said the same thing in numbers: strong chapter-1 traffic, steep chapter-2 abandonment.

THE UNDERLYING ASSUMPTION: Brett assumed a shared case opener and a shared closing question would produce a shared reading experience, when each reader actually hit their difficulty ceiling at a different sentence in between.

EARLY WARNING SIGNS: (1) Comment language bifurcates by chapter 2: eval-lead comments say "obvious," "well-known"; CTO comments say "lost me at" and quote the exact formula that stopped them. (2) Dwell-time analytics show a cliff, not a slope, at a specific display equation, with chapter-2 abandonment far exceeding chapter-1's despite chapter 2 being shorter.

### 6. Two books stapled

THE FAILURE STORY: Chapter 1 (Avianca) posted in September, read as sharp AI-liability commentary. Chapter 5 ("94% of what?") posted seven weeks later, read as eval-methodology critique, cited by a different set of people, on different lists. Neither set of readers saw the other chapter; the preface's joint claim had nothing to reactivate it week to week. By November, Brett noticed the two reader clusters weren't merging, but Gate 1 had already passed (thesis + chapter list "survived pressure test" on the strength of an outline, not a demonstrated case), so the serialization schedule kept running.

The concordance work had already flagged the mechanism in July: DA/EA and the AGI paper shared a projectibility core but disjoint formal machinery, authorization predicates versus generalizability facets, and no source paper forced both through one case. That gap was supposed to get closed in the writing. It didn't, because each chapter had its own clean case and each case fully resolved on one family alone. The joint stayed a paragraph in the preface, restated in the index chapter, never necessary to any chapter's argument. When the publisher's reader read all six in sequence for the print decision in January, the seam that serialization had hidden, one reader per chapter, one family per reader, became visible as a structural verdict: two books.

THE UNDERLYING ASSUMPTION: Brett assumed that naming the shared mechanism (natural-language channel, Goodman-style projectibility) in the preface would function as connective tissue even though no chapter's case required both problem families to resolve it.

EARLY WARNING SIGNS: (1) By chapter 3, no single case file cites both an authorization predicate and a generalizability facet as jointly necessary to its verdict. (2) Referrer/citation clusters per chapter: pragmatics chapters and the projection chapter draw disjoint audiences with near-zero overlap.

### 7. Silent launch

THE FAILURE STORY: Chapter 1 went up in September, announced with one LinkedIn post that got eleven likes, mostly people Brett already knew. No mailing list existed to capture the handful of eval-team leads who did click through, so there was no way to reach them again for chapter 2. Books in Progress was still "worth an email when the time comes" in July; by January it still hadn't been sent, because no trigger ever forced the decision, and the plan's own hedge ("unknown whether they take outside authors") quietly became permission to defer indefinitely. Chapter 2 released in November with no post at all; the job search and paper revisions ate the week it would have taken. No analytics were wired up, so Gate 2's "real readership" was assessed from GitHub stars and a gut feeling. Both read as near-zero. The retro concluded the synthesis wasn't landing and the project was shelved, without anyone able to distinguish "nobody read it" from "everybody who read it shrugged."

THE UNDERLYING ASSUMPTION: Brett assumed that writing a distribution habit into the plan was equivalent to having one, and that quality work would generate its own visibility the way academic papers accrue citations through indexing.

EARLY WARNING SIGNS: (1) By mid-August (three weeks post-scaffold), no mailing-list signup exists anywhere on the site and no one has been asked to subscribe. (2) The Books in Progress email is still a bullet point in notes/, not a sent message with a timestamp, two weeks before chapter 1 ships.

### 8. Sequencing starvation + public stall

THE FAILURE STORY: Late July: the concordance is done, cases folder empty. Brett opens the repo maybe twice a week, always after an agent finishes a revision pass on one of the three papers under active review. September: Study B moves into data collection and starts eating the evening slots the book was living on. Referee reports land on two papers in the same week in October, both wanting substantive revision; the book gets zero attention for three weeks. The REB clears in November, and the two experiments unblock exactly when the plan predicted, absorbing the remaining discretionary hours. Meanwhile the job search intensifies: an interview loop in December means prep time cannibalizes the last slack. No one chapter is ever explicitly deprioritized. Each week the book loses to something with a harder deadline, and by January the repo still reads "there is nothing here but this page," now five months stale, sitting in Google search results next to Brett's name during the exact interview cycle it was meant to support.

THE UNDERLYING ASSUMPTION: Brett assumed evening momentum from a good scaffolding session would translate into a recurring weekly slot, without ever putting a slot on a calendar or assigning it a deadline the way the papers have referee deadlines.

EARLY WARNING SIGNS: (1) Repo commit history: zero commits to chapters/ or cases/ for any 3-week window after the scaffold commit. (2) The preface's placeholder sentence ("nothing here but this page") still literally true at any date more than 6-8 weeks after 2026-07-23; treat a positive grep past week 8 as a fired tripwire, not a status update.

### 9. Source-paper drift under peer review

THE FAILURE STORY: Chapter 2 (on Stand_R and delegation) released in September 2026, built on DA's then-current four-primitive quartet and the canonical action vocabulary adopted at scaffolding. AP went out for review in October; the referee at the target venue rejected the Study B decision rule's second life (the one rebuilt in a day back in July) and forced a full renaming of the pass/fail predicate plus a restructured verdict system. That rewrite didn't stop at AP's PDF: it broke the concordance the book's canonical schema was supposed to insulate against, because the schema had frozen vocabulary, not the underlying claim architecture the referee actually attacked.

By November, the changelog had four entries reading like postmortems: "Chapter 2 revised: predicate renamed following AP peer review," "Chapter 3 revised: quartet reduced to three following referee objection to Stand_R redundancy." Each entry, individually, was the protocol working exactly as designed. Collectively, they read as a book that couldn't hold a formal claim stable for a full review cycle. A reader who'd bookmarked Chapter 2 in September needed a second read by December to know which predicate was live. Subscriber growth flattened in December, the same month a reviewer publicly noted that "the terminology has changed under me twice since I started this."

THE UNDERLYING ASSUMPTION: That version tags and a canonical vocabulary could absorb referee-driven changes to claim architecture, when referees attack arguments and formalisms, not just the wording layer the schema froze.

EARLY WARNING SIGNS: (1) Changelog entries citing "underlying paper changed" outnumbering entries citing the book's own editorial judgment, within the first two released chapters. (2) Any chapter released before its cited paper enters peer review at all.

### 10. AI-authorship optics

THE FAILURE STORY: August 2026: an eval-community account surfaces the repo in an "open-source AI safety projects worth watching" roundup. They open .claude/workflows/ before index.qmd. The screenshot that travels is the folder listing next to an empty chapters/ directory: case-harvest, case-verify, chapter-verify, paper-concordance, plus the model-sizing table naming Claude models by task tier. Caption: "AI safety book written by AI agents. Currently has zero chapters." It moves fast through exactly the eval-leads and hiring-manager networks the book is aimed at.

Brett's reply that disclosure isn't concealment and fleets verify rather than draft reads, correctly, as the nuanced clarification that never outruns a screenshot. Nobody in the reply thread distinguishes .claude/rules/ from .claude/workflows/; they see "fleet," "Claude," "agent," zero prose, and the compression wins: "the Claude book." The screenshot ages better than any future chapter, because it demands no reading.

By January, chapter 1 posts to a primed audience. Readers run it against an AI-tell checklist instead of the argument, quote-tweeting phrases straight off the house style's own banned list as gotchas, irony intact. Gate-2 readership arrives as drive-by mockery traffic, not engaged eval leads. The job-search channel is the first one poisoned: hiring managers google the author and find the meme before the book.

THE UNDERLYING ASSUMPTION: Brett assumed disclosure artifacts would read as evidence of rigor to an audience that, at trade-visibility scale, reads them as evidence of the crime.

EARLY WARNING SIGNS: (1) Repo traffic spikes with no corresponding preface reads (referrer logs show .claude/ paths outnumbering index.qmd). (2) Any external mention of the repo names "agents" or "Claude" before it names the book's subject.

## Synthesis

### The Most Likely Failure

**The stall that is already scheduled: verification-throttled cadence under sequencing starvation (dives 3 + 8).** This failure needs no adversary, no reader, and no bad luck; it is the default trajectory of the current plan. The verification non-negotiable makes each chapter's cost unbounded and unknowable in advance (the Tahoe case may have no primary layer at all); the sequencing rule guarantees the book gets only discretionary hours; and the public repo converts the resulting stall into a visible liability during the job search. Address first because every other failure mode needs released chapters to even occur.

### The Most Dangerous Failure

**AI-authorship optics (dive 10).** Lower probability, highest damage, and the exposure is live now: the fleet harness is public and the chapters directory is empty, which is exactly the screenshot that travels. Unlike every other failure, this one damages the author and the job-search channel, not just the book, and it can fire before a single chapter exists to answer it. The insurance is cheap and available this week.

### The Hidden Assumption

**"The four papers contain the book."** Dives 1, 2, 4, and 6 are four instances of one assumption: that a synthesis-plus-cases project can deliver a thesis whose sharpest commitments are precisely the parts no source paper wrote. The adversary (G1), the sign-off method (G4), the documented handoff case (chapter 5's TBD), and the joint between the two problem families all have to be *authored or found*, not synthesized. The papers supply the book's diagnostic half in depth; the thesis promises a constructive and security half that currently exists nowhere.

### The Revised Plan

1. **Thesis surgery before Gate 1 closes (maps 1, 6).** Either demote the security clause from stress-case pillar to worked illustration, or commit to acquiring the missing base (security-literature grounding or a security-literate reader for that chapter). Add a joint-demonstration requirement: at least one committed early chapter's case must need both problem families to resolve (Deloitte is the natural candidate: fabricated references in an assurance report are simultaneously a whose-words case and an evidence-reach case).
2. **Harvest the handoff case first (maps 4).** Run case-harvest with chapter 5's target as the primary query, not the leftovers: a named, dated, paper-trailed instance of an eval claim reaching a decision-maker and failing to warrant the decision. Gate 1 does not close while chapter 5 reads "TBD." If N weeks of harvesting finds nothing, that is thesis-relevant information and forces an explicit reframe, not a quiet slide into the liability-casebook genre.
3. **Source-viability probes before chapter commitment (maps 3).** One bounded probe per candidate case, before the chapter list is committed: does a primary layer exist, where, at what access cost? Expect Tahoe to fail the probe; drop or demote to sidebar rather than discovering the absence mid-chapter.
4. **Spike the decision layer now, at note scale (maps 2).** A 2-3 page method sketch (typed verdict vector + graded projectibility + declared losses → a worked toy sign-off) goes through the review-board before Gate 1 closes. If the sketch doesn't survive, the book's promise honestly narrows to "what to demand," and the chapter list says so from the start.
5. **Distribution and optics floors as Gate 1 exit criteria (maps 7, 10).** Before any chapter releases: mailing list live, basic analytics wired, the Books in Progress email actually sent, an announcement plan written; and a prominent how-this-book-is-made page in the repo now, stating human responsibility, fleets-verify-not-draft, and the disclosure practice, so the first framing of the method is the author's. Decide explicitly whether the fleet harness stays in the public repo.
6. **Calendar defense with a kill-or-continue date (maps 8, 9).** A standing weekly book slot with referee-deadline status; the week-8 tripwire on the preface placeholder; a named review date (suggest 2026-10-01) at which the book is explicitly continued, rescoped, or paused, so the option cannot expire silently. Chapters whose spine depends on a formalism currently under peer review at a venue wait for that review.

### The Pre-Launch Checklist

1. Source-viability probe completed for all six candidate cases; every committed chapter has a primary layer confirmed to exist (Tahoe's fate decided by evidence, not vividness).
2. One verified handoff case in `cases/` (or an explicit thesis reframe on record) before Gate 1 closes.
3. Decision-layer spike note written and survived a review-board pass.
4. Distribution floor in place: list, analytics, Books in Progress email sent, announcement plan written.
5. Methods page live in the repo and visible prose published (expanded preface or first case file) so the repo is never "agents, zero chapters."

**Verdict for Gate 1: do not close it on the current thesis and chapter list.** The vocabulary and claim-map work says the synthesis is sound; the premortem says the plan's sharpest promises are unauthored and its calendar is undefended. Close Gate 1 only after revisions 1-5 are in place; the sixth is standing discipline.
