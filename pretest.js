import { transform } from 'babel-core'

import plugin from './src'

global.compile = code =>
  transform(code, { ast: false, babelrc: false, plugins: [plugin] }).code
