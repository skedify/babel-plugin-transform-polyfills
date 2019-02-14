import compile from '../../test/utils/compile'

describe('Promise.all', () => {
  it('should replace Promise.all with a polyfill', () => {
    const result = compile(
      `
      const c = Promise.all([])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Promise.all([Promise.all([1, 2])])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Promise.all([]))
    `
    )

    expect(result).toMatchSnapshot()
  })
})
