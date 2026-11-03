/**
 * Replaces {placeholders} in a string with values.
 * formatText('Photo {current} of {total}', { current: 1, total: 2 }) → 'Photo 1 of 2'
 */
export function formatText(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  )
}

/**
 * Splits a template around one placeholder so the parts can be styled
 * separately, e.g. splitTemplate('at {company}', 'company') → ['at ', '']
 * Word order differs between languages, so text may sit on either side.
 */
export function splitTemplate(template, key) {
  const [before = '', after = ''] = template.split(`{${key}}`)
  return [before, after]
}
