describe('Promise.reject', () => {
  it('should replace Promise.reject with a polyfill', () => {
    const result = compile(
      `
      const c = Promise.reject()
    `
    )

    return expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = Promise.reject(Promise.reject([1, 2]))
    `
    )

    return expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(Promise.reject())
    `
    )

    return expect(result).toMatchSnapshot()
  })
})
