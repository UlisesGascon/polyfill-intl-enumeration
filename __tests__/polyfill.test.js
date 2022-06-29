require('../src')
const supportedValues = require('../src/data')

const cases = Object.keys(supportedValues)

describe('Polyfill load', () => {
  it('Should ADD the polyfill in the global scope', () => {
    expect(Intl).toMatchObject({
      supportedValuesOf: expect.any(Function)
    })
  })
})

describe('Intl.supportedValuesOf', () => {
  it('Should trow RangeError if the key is undefined', () => {
    expect(() => Intl.supportedValuesOf()).toThrow(RangeError)
  })
  it('Should trow RangeError if the key is invalid', () => {
    expect(() => Intl.supportedValuesOf('INVENTED')).toThrow(RangeError)
  })

  test.each(cases)(
    'Should return %p list',
    (key) => {
      expect(Intl.supportedValuesOf(key)).toStrictEqual(supportedValues[key])
    }
  )
})
