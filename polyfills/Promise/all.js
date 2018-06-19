import PromisePolyfill from 'es6-promise'
import resolveGlobal from '../resolveGlobal'

const g = resolveGlobal()

export default (Function.prototype.isPrototypeOf(g.Promise)
  ? g.Promise.all.bind(g.Promise)
  : PromisePolyfill.all.bind(PromisePolyfill))
