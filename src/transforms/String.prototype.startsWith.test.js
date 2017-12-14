describe('String.prototype.startsWith', () => {
  it('should replace String.prototype.startsWith with a polyfill', () => {
    const result = compile(
      `
      const text = 'this is a string'
      if (text.startsWith('a') === true) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    return expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const text = 'this is a string'
      if (text.startsWith('a')) {
        console.log(text.startsWith('a'))
      } else {
        console.log('failure')
      }
    `
    )

    return expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const text = 'this is a string'
      if (text.substr(5).startsWith('a')) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    return expect(result).toMatchSnapshot()
  })
})
