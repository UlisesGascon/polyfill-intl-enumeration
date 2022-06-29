const { supportedValuesOf } = require('./enumeration')
require('./globalThis')

// The polyfill for Intl.enumeration.
if (!globalThis.Intl) {
  globalThis.Intl = {}
}

if (!globalThis.Intl.supportedValuesOf) {
  Object.defineProperty(globalThis.Intl, 'supportedValuesOf', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: supportedValuesOf
  })
}
