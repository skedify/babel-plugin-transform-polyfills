describe('Object.assign', () => {
  it('should replace Object.assign with a polyfill', () => {
    const result = compile(
      `
      const c = Object.assign({a:1}, {b:2})
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Object.assign({a:1}, {b:Object.assign({c:3}, {d:4})})
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Object.assign({a:1}, {b:2}))
    `
    )

    expect(result).toMatchSnapshot()
  })
})
