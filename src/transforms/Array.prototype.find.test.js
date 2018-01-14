describe('Array.prototype.find', () => {
  it('should replace Array.prototype.find with a polyfill', () => {
    const result = compile(
      `
      const list = [1,2,3,4,5]
      if (list.find(n => n === 3) !== undefined) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      const list = [1,2,3,4,5]
      if (list.find(n => n === 3) !== undefined) {
        console.log(list.find(3))
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain', () => {
    const result = compile(
      `
      const list = [1,2,3,4,5]
      if (list.slice(2).find(n => n === 3) !== undefined) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })
})
