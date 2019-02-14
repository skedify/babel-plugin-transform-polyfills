import compile from '../../test/utils/compile'

describe('Promise.resolve', () => {
  it('should replace Promise.resolve with a polyfill', () => {
    const result = compile(
      `
      const c = Promise.resolve()
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Promise.resolve(Promise.resolve([1, 2]))
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Promise.resolve())
    `
    )

    expect(result).toMatchSnapshot()
  })
})
