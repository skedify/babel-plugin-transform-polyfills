import compile from '../../test/utils/compile'

describe('Array.prototype.fill', () => {
  it('should replace Array.prototype.fill with a polyfill', () => {
    const result = compile(
      `
      Array(10).fill()
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should not import polyfill more than once', () => {
    const result = compile(
      `
      Array(10).fill()
      Array(10).fill(2)
    `
    )

    expect(result).toMatchSnapshot()
  })
})
