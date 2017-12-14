describe('Array.prototype.findIndex', () => {
  it('should replace Array.prototype.findIndex with a polyfill', () => {
    const result = compile(
      `
      const list = [1,2,3,4,5]
      if (list.findIndex(n => n === 3) === 2) {
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
      const list = [1,2,3,4,5]
      if (list.findIndex(n => n === 3) === 2) {
        console.log(list.findIndex(3))
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
      const list = [1,2,3,4,5]
      if (list.slice(2).findIndex(n => n === 3) === 0) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    return expect(result).toMatchSnapshot()
  })
})
