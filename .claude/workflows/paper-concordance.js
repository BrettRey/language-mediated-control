export const meta = {
  name: 'paper-concordance',
  description: 'Map claims, terms, examples, and contradictions across the four source papers',
  whenToUse: 'Before Gate 1 chapter planning, or after any source paper is substantially revised',
  phases: [
    { title: 'Read', detail: 'one reader per paper, sonnet/medium' },
    { title: 'Synthesize', detail: 'cross-paper glossary, claim map, contradictions' },
  ],
}

const ROOT = '/Users/brettreynolds/projects/LLM-CLI-projects'
const PAPERS = [
  { key: 'adversarial-pragmatics', path: ROOT + '/papers/development/adversarial-pragmatics-for-ai-safety-evaluation/sections/' },
  { key: 'delegation-assurance', path: ROOT + '/papers/development/adversarial-pragmatics-for-ai-safety-evaluation/sections-delegation/' },
  { key: 'evidentiary-assurance', path: ROOT + '/papers/development/adversarial-pragmatics-for-ai-safety-evaluation/sections-evidentiary/' },
  { key: 'agi-evaluation', path: ROOT + '/papers/retarget/agi-evaluation/' },
]

const READ_SCHEMA = {
  type: 'object',
  required: ['claims', 'terms', 'examples'],
  properties: {
    claims: {
      type: 'array',
      items: {
        type: 'object',
        required: ['claim', 'anchor', 'kind'],
        properties: {
          claim: { type: 'string', description: 'one-sentence statement, faithful to the text' },
          anchor: { type: 'string', description: 'file:line or file+section locator' },
          kind: { type: 'string', description: 'normative / recorded / finding / interpretation / projective / causal' },
          hedges: { type: 'string', description: 'scope restrictions or hedges the text itself states' },
        },
      },
    },
    terms: {
      type: 'array',
      items: {
        type: 'object',
        required: ['term', 'definition', 'anchor'],
        properties: {
          term: { type: 'string' },
          definition: { type: 'string', description: 'as defined or used in THIS paper, quoted where possible' },
          anchor: { type: 'string' },
        },
      },
    },
    examples: {
      type: 'array',
      items: {
        type: 'object',
        required: ['example', 'anchor'],
        properties: {
          example: { type: 'string' },
          anchor: { type: 'string' },
          usedFor: { type: 'string' },
        },
      },
    },
  },
}

const SYNTH_SCHEMA = {
  type: 'object',
  required: ['glossary', 'claimMap', 'contradictions', 'gaps'],
  properties: {
    glossary: {
      type: 'array',
      items: {
        type: 'object',
        required: ['term', 'senses'],
        properties: {
          term: { type: 'string' },
          senses: { type: 'array', items: { type: 'string' }, description: 'per-paper senses with anchors; note divergence explicitly' },
          consistent: { type: 'boolean' },
        },
      },
    },
    claimMap: {
      type: 'array',
      items: {
        type: 'object',
        required: ['theme', 'claims'],
        properties: {
          theme: { type: 'string' },
          claims: { type: 'array', items: { type: 'string' }, description: 'claim + paper key + anchor' },
        },
      },
    },
    contradictions: {
      type: 'array',
      items: {
        type: 'object',
        required: ['description', 'sideA', 'sideB'],
        properties: {
          description: { type: 'string' },
          sideA: { type: 'string', description: 'paper key + anchor + the claim' },
          sideB: { type: 'string' },
          severity: { type: 'string', description: 'terminological / emphasis / substantive' },
        },
      },
    },
    gaps: { type: 'array', items: { type: 'string' }, description: 'book-relevant themes no paper covers' },
  },
}

phase('Read')
const readings = await parallel(PAPERS.map(p => () =>
  agent(
    `Read every .tex/.md/.qmd source file under ${p.path} (skip build artifacts, .bbl, .aux, PDFs). ` +
    `Extract: (1) the paper's substantive claims, each typed per the project's typed-claims discipline ` +
    `(normative reference / recorded representation / finding / interpretation / projective claim / causal claim), ` +
    `with any hedges or scope restrictions THE TEXT ITSELF states; (2) key terms with the definition this paper ` +
    `actually uses, quoted where possible; (3) recurring examples and what they are used to show. ` +
    `Every item needs a file:line or file+section anchor. Report what the text says, not what it should say. ` +
    `Exclude anything sourced from the Nefdt Grammar_and_emergence collaboration if encountered.`,
    { label: 'read:' + p.key, phase: 'Read', model: 'sonnet', effort: 'medium', schema: READ_SCHEMA }
  ).then(r => ({ paper: p.key, reading: r }))
))

const ok = readings.filter(Boolean)
if (ok.length < PAPERS.length) {
  log('WARNING: only ' + ok.length + '/' + PAPERS.length + ' papers were read; concordance is partial')
}

phase('Synthesize')
const concordance = await agent(
  'You have structured readings (claims, terms, examples, all with anchors) from ' + ok.length + ' related papers ' +
  'by the same author, which a book will synthesize. Build the cross-paper concordance: ' +
  '(1) a glossary noting, term by term, whether the papers use it in the same sense, with divergences quoted; ' +
  '(2) a claim map grouping claims by theme across papers; ' +
  '(3) contradictions and tensions BETWEEN papers, each with both sides anchored and a severity call ' +
  '(terminological / emphasis / substantive) — hunt for these actively, they are the most valuable output; ' +
  '(4) gaps: themes a book on language-mediated control and assurance needs that no paper covers. ' +
  'Preserve anchors throughout. Readings follow as JSON.\n\n' + JSON.stringify(ok),
  { label: 'synthesize', phase: 'Synthesize', effort: 'high', schema: SYNTH_SCHEMA }
)

return { papersRead: ok.map(r => r.paper), concordance }
