function supportedValuesOf (key) {
  const supportedValues = ['calendar', 'collation', 'currency', 'numberingSystem', 'timeZone', 'unit']
  if (supportedValues.includes(key)) {
    return []
  }
  throw new RangeError(`The key must be one of the following values: ${supportedValues.join(', ')}.`)
}

module.exports = {
  supportedValuesOf
}
