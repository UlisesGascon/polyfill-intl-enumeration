const supportedValues = require('./data')
function supportedValuesOf (key) {
  if (supportedValues[key]) {
    return supportedValues[key]
  }
  throw new RangeError(`Invalid key : ${key}`)
}

module.exports = {
  supportedValuesOf
}
