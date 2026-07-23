export const meta = {
  name: 'case-verify',
  description: 'Per-case pipeline: read primary sources, adversarially refute, type the failure, draft the case file',
  whenToUse: 'After case-harvest (or manual candidates); args.cases = [{slug, summary, sourceUrls}]',
  phases: [
    { title: 'Read', detail: 'fetch and extract the factual record, sonnet/medium' },
    { title: 'Refute', detail: 'adversarial audit of every factual sentence' },
    { title: 'Type', detail: 'failure typing + diagnosability + case-file draft' },
  ],
}

const RECORD_SCHEMA = {
  type: 'object',
  required: ['facts', 'sourcesRead', 'unreachable'],
  properties: {
    facts: {
      type: 'array',
      items: {
        type: 'object',
        required: ['fact', 'source', 'locator'],
        properties: {
          fact: { type: 'string', description: 'one factual sentence' },
          source: { type: 'string', description: 'URL actually read' },
          locator: { type: 'string', description: 'paragraph/page/section within the source' },
          quote: { type: 'string', description: 'exact supporting quotation where wording matters' },
        },
      },
    },
    sourcesRead: { type: 'array', items: { type: 'string' } },
    unreachable: { type: 'array', items: { type: 'string' }, description: 'URLs that could not be fetched or read' },
    betterSources: { type: 'array', items: { type: 'string' }, description: 'primary sources discovered that beat the ones supplied' },
  },
}

const AUDIT_SCHEMA = {
  type: 'object',
  required: ['verdicts'],
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        required: ['fact', 'verdict', 'reason'],
        properties: {
          fact: { type: 'string' },
          verdict: { type: 'string', enum: ['supported', 'unsupported', 'contradicted'], description: 'default to unsupported when uncertain' },
          reason: { type: 'string' },
        },
      },
    },
  },
}

const CASEFILE_SCHEMA = {
  type: 'object',
  required: ['typing', 'undeterminable', 'diagnosability', 'draft'],
  properties: {
    typing: { type: 'string', description: 'failure type per taxonomy (capability / scaffold / policy / misreporting / goal drift / evaluator failure) with confidence and level of explanation used' },
    undeterminable: { type: 'array', items: { type: 'string' }, description: 'what the public record cannot determine, and what evidence would settle each' },
    diagnosability: { type: 'string', description: 'what documentation would have had to exist for clean typing' },
    draft: { type: 'string', description: 'complete case file in the cases/template.md format, supported facts only' },
  },
}

const cases = args && args.cases
if (!cases || !cases.length) {
  return { error: 'args.cases required: [{slug, summary, sourceUrls: [...]}]' }
}
log('verifying ' + cases.length + ' case(s)')

const results = await pipeline(
  cases,
  c => agent(
    'Case: ' + c.slug + '. Claimed summary (UNVERIFIED, do not trust): ' + c.summary + '. ' +
    'Fetch and read these sources: ' + (c.sourceUrls || []).join(' ; ') + '. ' +
    'Prefer primary documents (filings, decisions, official statements); if a supplied source is secondary and it cites ' +
    'a primary one, chase the primary and record it under betterSources. Extract the factual record as discrete ' +
    'one-sentence facts, each tied to a source you actually read, with locator and exact quote where wording matters. ' +
    'Include only what the sources state. Report unreachable URLs rather than substituting memory.',
    { label: 'read:' + c.slug, phase: 'Read', model: 'sonnet', effort: 'medium', schema: RECORD_SCHEMA }
  ),
  (record, c) => agent(
    'Adversarial audit for case ' + c.slug + '. For each fact below, re-check it against its cited source ' +
    '(fetch the source again) and try to REFUTE it: is the sentence fully supported by that source at that locator? ' +
    'Default to unsupported when uncertain or when the source cannot be reached. Facts as JSON:\n\n' +
    JSON.stringify(record.facts),
    { label: 'refute:' + c.slug, phase: 'Refute', model: 'sonnet', effort: 'medium', schema: AUDIT_SCHEMA }
  ).then(audit => ({ record, audit })),
  (ra, c) => {
    const supported = ra.record.facts.filter(f =>
      ra.audit.verdicts.some(v => v.fact === f.fact && v.verdict === 'supported'))
    return agent(
      'Case ' + c.slug + ': type the failure and draft the case file. Use ONLY the audited-supported facts below. ' +
      'Classify per the taxonomy (capability failure / scaffold failure / policy failure / misreporting / goal drift / ' +
      'evaluator failure), state the level of explanation you are using, and do not slide between levels. ' +
      'List what the record CANNOT determine (this is chapter content, not residue) and what documentation would have ' +
      'made the case cleanly typable. Then draft the full case file in the cases/template.md format, status ' +
      '"sources-archived pending" (archive paths and hashes are filled in by the human step). ' +
      'Supported facts:\n\n' + JSON.stringify(supported) +
      '\n\nUnsupported/contradicted (mention in the file as unverified, never as fact):\n\n' +
      JSON.stringify(ra.audit.verdicts.filter(v => v.verdict !== 'supported')),
      { label: 'type:' + c.slug, phase: 'Type', effort: 'high', schema: CASEFILE_SCHEMA }
    ).then(d => ({ slug: c.slug, record: ra.record, audit: ra.audit, casefile: d }))
  }
)

return results.filter(Boolean)
