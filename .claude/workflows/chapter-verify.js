export const meta = {
  name: 'chapter-verify',
  description: 'Pre-release audit of a chapter: facts vs case files, citations, style, adversarial review',
  whenToUse: 'Before any chapter release; args.chapter = path to the .qmd relative to repo root',
  phases: [
    { title: 'Audit', detail: 'six dimensions in parallel, sized per task' },
    { title: 'Merge', detail: 'rank surviving findings' },
  ],
}

const ROOT = '/Users/brettreynolds/projects/LLM-CLI-projects/books/active/language-mediated-control'
const chapter = args && args.chapter
if (!chapter) return { error: 'args.chapter required, e.g. {chapter: "chapters/01-confident-citation.qmd"}' }

const FINDINGS_SCHEMA = {
  type: 'object',
  required: ['findings'],
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['line', 'issue', 'severity'],
        properties: {
          line: { type: 'number' },
          issue: { type: 'string' },
          severity: { type: 'string', enum: ['blocker', 'major', 'minor'] },
          fix: { type: 'string' },
        },
      },
    },
  },
}

const DIMENSIONS = [
  {
    key: 'facts',
    model: 'sonnet',
    effort: 'medium',
    prompt:
      'Fact audit. Read ' + ROOT + '/' + chapter + ' and every file in ' + ROOT + '/cases/ plus ' +
      ROOT + '/notes/source-verification.md. Every case fact, quotation, date, name, and number in the chapter must ' +
      'trace to a case file with verified status or a verified ledger entry. Flag as blocker: any factual claim with ' +
      'no verified backing, any quote that differs from the case file, any fact from a case file marked candidate or ' +
      'unverified. Flag as major: facts stated more strongly than the case file supports.',
  },
  {
    key: 'citations',
    model: 'haiku',
    effort: 'low',
    prompt:
      'Citation audit. Read ' + ROOT + '/' + chapter + '. Extract every citation key (@key / [@key]). Check each ' +
      'exists in ' + ROOT + '/references.bib or ' + ROOT + '/references-local.bib (grep is fine). Blocker: key missing ' +
      'from both files. Minor: key present but never used elsewhere, possible typo variants.',
  },
  {
    key: 'style',
    model: 'haiku',
    effort: 'low',
    prompt:
      'Style audit. Run: cd ' + ROOT + ' && python3 ../../../.house-style/check-style-md.py ' + chapter + ' and report ' +
      'its findings verbatim as minor (major if a paragraph exceeds 120 words). Additionally scan the chapter for the ' +
      'AI-tic clusters in the house rules: praise-as-structure, restatement-as-revelation, unsupported evaluative ' +
      'participial tags, high-signal AI vocabulary. One finding per occurrence with the line number.',
  },
  {
    // 2026-07-23 premortem patch: dual-audience register gate (dive 5 had no mitigation).
    // A chapter is not releasable if either persona abandons before the diagnosability close.
    key: 'register-eval-lead',
    model: 'sonnet',
    effort: 'medium',
    prompt:
      'Register audit, eval-lead persona. Read ' + ROOT + '/' + chapter + ' cover to cover as a busy evaluation ' +
      'team lead: fluent in benchmarks, Messick, and bootstrap intervals; has already read the incident coverage; ' +
      'reads to learn what to do differently. If there is a line where you would stop reading, report it as a ' +
      'blocker ("abandonment: <reason>"). Major: passages restating what this reader already knows (case recaps ' +
      'running past the argument, methods-101 checklists), and closes that read as obvious given the argument ' +
      'above them. Minor: hedges or late-defined terms that slow this reader. If you would finish the chapter, ' +
      'say so in one minor finding ("finished: <what the chapter gave you>").',
  },
  {
    key: 'register-cto',
    model: 'sonnet',
    effort: 'medium',
    prompt:
      'Register audit, deployment-decision persona. Read ' + ROOT + '/' + chapter + ' cover to cover as a law-firm ' +
      'CTO or general counsel: fluent in evidence standards, agency law, and procurement liability; not fluent in ' +
      'formal notation or statistics; reads to learn what to demand before signing off. If there is a line where ' +
      'you would stop reading, report it as a blocker ("abandonment: <reason>"), especially the first formula, ' +
      'verdict-vector, or estimand passage that assumes training this reader lacks and is not carried by the ' +
      'surrounding prose. Major: passages where an available legal analogue (hearsay, agency, evidence standards) ' +
      'goes unused, and any stretch longer than two paragraphs with no concrete consequence for the deployment ' +
      'decision. Minor: jargon glossed too late. If you would finish the chapter, say so in one minor finding ' +
      '("finished: <what you would now demand>").',
  },
  {
    key: 'adversarial',
    effort: 'high',
    prompt:
      'Adversarial review. Read ' + ROOT + '/' + chapter + ' and ' + ROOT + '/notes/thesis-and-chapters.md. ' +
      'Try to refute the chapter: (1) does the opening case actually show what the chapter claims it shows, or would ' +
      'a skeptical eval lead or a litigator read it otherwise? (2) are typed claims kept separate (normative / finding / ' +
      'interpretation / projective / causal), or does the prose slide? (3) does any projection fail to declare its ' +
      'bearer, population, conditions, and revision rule? (4) does the chapter close with the diagnosability question, ' +
      'and is the answer specific enough to act on? Report only findings that survive your own attempt to dismiss them; ' +
      'severity blocker for a failed central claim, major for typed-claim slides.',
  },
]

phase('Audit')
// Barrier acceptable: four small audits, and Merge needs all of them for cross-ranking.
const audits = await parallel(DIMENSIONS.map(d => () =>
  agent(d.prompt, {
    label: 'audit:' + d.key,
    phase: 'Audit',
    model: d.model,
    effort: d.effort,
    schema: FINDINGS_SCHEMA,
  }).then(r => (r.findings || []).map(f => Object.assign({ dimension: d.key }, f)))
))

phase('Merge')
const all = audits.filter(Boolean).flat()
const order = { blocker: 0, major: 1, minor: 2 }
all.sort((a, b) => (order[a.severity] - order[b.severity]) || (a.line - b.line))
const blockers = all.filter(f => f.severity === 'blocker').length
log(all.length + ' findings, ' + blockers + ' blocker(s)')

return { chapter: chapter, releasable: blockers === 0, findings: all }
