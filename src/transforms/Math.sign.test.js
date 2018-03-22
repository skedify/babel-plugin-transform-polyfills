describe('Math.sign', () => {
  it('should replace Math.sign with a polyfill', () => {
    const result = compile(
      `
      const number = 5
      if (Math.sign(number) === 1) {
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
      const numbers = [-5, 5]
      if (Math.sign(numbers[0]) === -1 && Math.sign(numbers[1]) === 1) {
        console.log('success')
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
      const signedNumbers = [-5, 5].map(Math.sign)
      if (signedNumbers[0] === -1 && signedNumbers[1] === 1) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain with extra parameters', () => {
    const result = compile(
      `
      const signedNumbers = [-5, 5].map(Math.sign, null)
      if (signedNumbers[0] === -1 && signedNumbers[1] === 1) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain when Math.sign is not the first parameter', () => {
    const result = compile(
      `
      const signedNumber = [5].reduce(all => all, Math.sign(5))
      if (signedNumber === 1) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })

  it('should work when part of a call chain when Math.sign is not the first parameter and passed as a callback', () => {
    const result = compile(
      `
      Array.prototype.reverseMap = function (thisValue, callback) {
        return this.map(callback, thisValue)
      }
      
      const signedNumbers = [-5, 5].reverseMap(null, Math.sign)
      if (signedNumbers[0] === -1 && signedNumbers[1] === 1) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    expect(result).toMatchSnapshot()
  })
})
