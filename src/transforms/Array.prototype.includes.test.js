import compile from '../../test/utils/compile'

describe('Array.prototype.includes', () => {
  it('should replace Array.prototype.includes with a polyfill', () => {
    const result = compile(
      `
      const list = [1,2,3,4,5]
      if (list.includes(3) === true) {
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
      if (list.includes(3)) {
        console.log(list.includes(3))
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
      if (list.slice(2).includes(3)) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })
})
