import compile from '../../test/utils/compile'

describe('Object.entries', () => {
  it('should replace Object.entries with a polyfill', () => {
    const result = compile(
      `
      const c = Object.entries({ a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Object.entries({ a: 1, b: 2 })
      const f = Object.entries({ a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Object.entries({ a: 1, b: 2 }))
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using apply', () => {
    const result = compile(
      `
      const c = Object.entries.apply(null, [{ a: 1, b: 2 }])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using call', () => {
    const result = compile(
      `
      const c = Object.entries.call(null, { a: 1, b: 2 })
    `
    )

    expect(result).toMatchSnapshot()
  })
})
