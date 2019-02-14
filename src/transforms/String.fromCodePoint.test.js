import compile from '../../test/utils/compile'

describe('String.fromCodePoint', () => {
  it('should replace String.fromCodePoint with a polyfill', () => {
    const result = compile(
      `
      const c = String.fromCodePoint(1, 2)
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = String.fromCodePoint(1)
      const b = String.fromCodePoint(2)
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(String.fromCodePoint(1, 2))
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using apply', () => {
    const result = compile(
      `
      const c = String.fromCodePoint.apply(null, [1, 2, 3])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when using call', () => {
    const result = compile(
      `
      const c = String.fromCodePoint.call(null, 1, 2)
    `
    )

    expect(result).toMatchSnapshot()
  })
})
