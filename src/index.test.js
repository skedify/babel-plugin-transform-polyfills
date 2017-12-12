import { name } from '../package.json'
import { transform } from 'babel-core'

import plugin from '.'

const compile = code =>
  transform(code, { ast: false, babelrc: false, plugins: [plugin] }).code

describe(name, () => {
  it('should replace String.prototype.padStart with a polyfill', () => {
    const result = compile(
      `
      const text = 'this is a string'
      if (text.padStart('a')) {
        console.log('success')
      } else {
        console.log('failure')
      }
    `
    )

    return expect(result).toMatchSnapshot()
  })
})
