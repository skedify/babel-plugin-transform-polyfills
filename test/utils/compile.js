import { transform } from '@babel/core'

import plugin from '../../src'

export default function compile(code) {
  return transform(code, {
    cwd: '/',
    filename: 'TESTING',
    ast: false,
    babelrc: false,
    plugins: [plugin],
  }).code
}
