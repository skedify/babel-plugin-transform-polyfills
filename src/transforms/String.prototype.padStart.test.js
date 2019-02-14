import compile from '../../test/utils/compile'

describe('String.prototype.padStart', () => {
  it('should replace String.prototype.padStart with a polyfill', () => {
    const result = compile(
      `
      const text = 'this is a string'
      if (text.padStart('a') === true) {
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
      const text = 'this is a string'
      if (text.padStart('a')) {
        console.log(text.padStart('a'))
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
      const text = 'this is a string'
      if (text.substr(5).padStart('a')) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })
})
