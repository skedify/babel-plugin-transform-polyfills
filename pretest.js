import { transform } from '@babel/core'

import plugin from './src'

global.compile = code =>
  transform(code, {
    cwd: '/',
    filename: 'TEST',
    ast: false,
    babelrc: false,
    plugins: [plugin],
  }).code
