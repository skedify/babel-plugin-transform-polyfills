import { name } from '../package.json'
import { resolve } from 'path'
import { transformFileSync } from 'babel-core'

import plugin from '.'

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

    expect(result).toMatchSnapshot()
  })

  it('should not try to transform the polyfills themselves', () => {
    const result = transformFileSync(
      resolve(__dirname, '..', 'polyfills', 'Array', 'prototype', 'find.js'),
      { ast: false, babelrc: false, plugins: [plugin] }
    ).code
    expect(result).toMatchSnapshot()
  })
})
