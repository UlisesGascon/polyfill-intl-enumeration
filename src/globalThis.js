/* eslint no-extend-native: 0 */
/* eslint no-undef: 0 */

// @see: https://mathiasbynens.be/notes/globalthis
// The polyfill for Global This.
if (typeof globalThis !== 'object') {
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function () {
      return this
    },
    configurable: true
  })
  __magic__.globalThis = __magic__
  delete Object.prototype.__magic__
};
