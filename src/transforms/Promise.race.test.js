describe('Promise.race', () => {
  it('should replace Promise.race with a polyfill', () => {
    const result = compile(
      `
      const c = Promise.race([])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Promise.race([Promise.race([1, 2])])
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Promise.race([]))
    `
    )

    expect(result).toMatchSnapshot()
  })
})
