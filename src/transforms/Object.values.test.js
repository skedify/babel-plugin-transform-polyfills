import compile from '../../test/utils/compile'

describe('Object.values', () => {
  it('should replace Object.values with a polyfill', () => {
    const result = compile(
      `
      const c = Object.values({ a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Object.values({ a: 1, b: 2 })
      const f = Object.values({ a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Object.values({ a: 1, b: 2 }))
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using apply', () => {
    const result = compile(
      `
      const c = Object.values.apply(null, [{ a: 1, b: 2 }])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using call', () => {
    const result = compile(
      `
      const c = Object.values.call(null, { a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })
})
