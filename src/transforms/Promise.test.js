describe('Promise', () => {
  it('should replace new Promise with a polyfill', () => {
    const result = compile(
      `
      const c = new Promise(function (resolve, reject) {
        resolve({ a: 1 })
      })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const e = new Promise(function (resolve, reject) {
        new Promise(function (resolve, reject) {
          setTimeout(resolve, 1000)
        }).then(resolve, reject)
      })
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const c = Object.keys(new Promise(function (resolve, reject) {
        resolve({ a: 1 })
      }))
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not touch other new expressions', () => {
    const result = compile(
      `
      const c = Object.keys(new Promise(function (resolve, reject) {
        new OtherClass(() => resolve({ a: 1 }))
      }))
    `
    )

    expect(result).toMatchSnapshot()
  })
})
