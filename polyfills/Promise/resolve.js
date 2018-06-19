import PromisePolyfill from 'es6-promise'
import resolveGlobal from '../resolveGlobal'

const g = resolveGlobal()

export default (Function.prototype.isPrototypeOf(g.Promise)
  ? g.Promise.resolve.bind(g.Promise)
  : PromisePolyfill.resolve.bind(PromisePolyfill))
