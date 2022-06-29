require('../src')

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
  it.todo('Should return calendar list')
  it.todo('Should return collation list')
  it.todo('Should return currency list')
  it.todo('Should return numberingSystem list')
  it.todo('Should return timeZone list')
  it.todo('Should return unit list')
})
