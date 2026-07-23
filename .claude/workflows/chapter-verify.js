export const meta = {
  name: 'chapter-verify',
  description: 'Pre-release audit of a chapter: facts vs case files, citations, style, adversarial review',
  whenToUse: 'Before any chapter release; args.chapter = path to the .qmd relative to repo root',
  phases: [
    { title: 'Audit', detail: 'four dimensions in parallel, sized per task' },
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
