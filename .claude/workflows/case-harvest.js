export const meta = {
  name: 'case-harvest',
  description: 'Multi-modal sweep for documented AI incidents that could open book chapters',
  whenToUse: 'When the case file needs candidates; returns structured candidates for review, writes nothing',
  phases: [
    { title: 'Sweep', detail: 'parallel searchers, one per source modality, sonnet/medium' },
    { title: 'Triage', detail: 'dedup and score against chapter concepts' },
  ],
}

const CONCEPTS = [
  'confident-citation: fluent assertion vs evidentiary support (evidentiary assurance)',
  'delegation: whose words are these; agency and authority for system outputs',
  'adversarial-pragmatics: deployed agent manipulated via instruction/quotation/authority confusion; confused deputy',
  'assurance-unassured: audit or assurance evidence that itself fails assurance',
  'aggregate-scores: an eval number projected onto a deployment it cannot warrant',
  'undiagnosable: public record too thin to type the failure at all',
]

const MODALITIES = [
  { key: 'aiid', hint: 'the AI Incident Database (incidentdatabase.ai): browse/search incident entries and their cited reports' },
  { key: 'aiaaic', hint: 'the AIAAIC repository: entries with documented sources' },
  { key: 'courts', hint: 'court and tribunal records: CourtListener/RECAP, CanLII, BC Civil Resolution Tribunal, sanctions orders, judgments mentioning AI/chatbot/LLM output' },
  { key: 'regulators', hint: 'regulator, audit-office, and government statements: FTC actions, national audit offices, procurement post-mortems, data-protection rulings' },
  { key: 'press', hint: 'contemporaneous quality journalism and vendor/deployer postmortems, not aggregator rewrites' },
]

const SWEEP_SCHEMA = {
  type: 'object',
  required: ['queries', 'candidates'],
  properties: {
    queries: { type: 'array', items: { type: 'string' }, description: 'every search string actually run' },
    candidates: {
      type: 'array',
      items: {
        type: 'object',
        required: ['slug', 'summary', 'year', 'primarySources', 'recordRichness'],
        properties: {
          slug: { type: 'string', description: 'kebab-case incident identifier' },
          summary: { type: 'string', description: 'what happened, one to three sentences, only what the sources state' },
          year: { type: 'string' },
          actors: { type: 'string', description: 'deployer, vendor, system, affected parties, adjudicator if any' },
          primarySources: { type: 'array', items: { type: 'string' }, description: 'URLs to filings, decisions, official statements, or contemporaneous reporting' },
          recordRichness: { type: 'string', enum: ['thin', 'moderate', 'rich'], description: 'how much primary documentation exists' },
          conceptFit: { type: 'string', description: 'which chapter concept(s) this could serve and why' },
        },
      },
    },
  },
}

const TRIAGE_SCHEMA = {
  type: 'object',
  required: ['ranked', 'merged', 'notes'],
  properties: {
    ranked: {
      type: 'array',
      items: {
        type: 'object',
        required: ['slug', 'concept', 'score', 'rationale'],
        properties: {
          slug: { type: 'string' },
          concept: { type: 'string' },
          score: { type: 'number', description: '0-10: record richness x concept fit x audience legibility' },
          rationale: { type: 'string' },
          primarySources: { type: 'array', items: { type: 'string' } },
          risks: { type: 'string', description: 'what could make this case unusable: contested facts, thin record, ongoing litigation' },
        },
      },
    },
    merged: { type: 'array', items: { type: 'string' }, description: 'duplicate slugs merged, and into what' },
    notes: { type: 'string', description: 'coverage gaps: concepts with no strong candidate' },
  },
}

phase('Sweep')
const perMax = (args && args.perSourceMax) || 8
// Barrier justified: triage needs the full candidate set to dedup across modalities.
const sweeps = await parallel(MODALITIES.map(m => () =>
  agent(
    'Find documented AI incidents suitable as opening cases for a book on language-mediated control and AI assurance. ' +
    'Search modality: ' + m.hint + '. Use web search/fetch. Up to ' + perMax + ' candidates. ' +
    'STRICT RULES: real incidents only; if you cannot confirm an incident exists in an actual source, omit it. ' +
    'Prefer incidents with rich primary records (filings, tribunal decisions, official statements). ' +
    'Candidate chapter concepts: ' + CONCEPTS.join('; ') + '. ' +
    'Report every search query you ran (required even if you found nothing: an unevidenced negative is treated as no information). ' +
    'Summaries state only what the sources state.',
    { label: 'sweep:' + m.key, phase: 'Sweep', model: 'sonnet', effort: 'medium', schema: SWEEP_SCHEMA }
  )
))

const found = sweeps.filter(Boolean)
const allCandidates = found.flatMap(s => s.candidates)
const allQueries = found.flatMap(s => s.queries)
log(allCandidates.length + ' raw candidates from ' + found.length + '/' + MODALITIES.length + ' modalities')
if (!allCandidates.length) return { candidates: [], queries: allQueries, note: 'no candidates found; see queries' }

phase('Triage')
const triage = await agent(
  'Dedup and triage incident candidates for a book on language-mediated control and AI assurance. ' +
  'Merge duplicates (same incident found via different modalities keeps the union of its primary sources). ' +
  'Score each unique candidate 0-10 on: primary-record richness, fit to one of these chapter concepts (' +
  CONCEPTS.join('; ') + '), and legibility to a dual audience of eval leads and legal/executive readers. ' +
  'Flag risks (contested facts, ongoing litigation, thin record). Note which concepts have no strong candidate. ' +
  'Candidates as JSON:\n\n' + JSON.stringify(allCandidates),
  { label: 'triage', phase: 'Triage', effort: 'high', schema: TRIAGE_SCHEMA }
)

return { ranked: triage.ranked, merged: triage.merged, coverageNotes: triage.notes, queries: allQueries }
