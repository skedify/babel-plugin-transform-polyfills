import PromisePolyfill from 'es6-promise'
import resolveGlobal from '../resolveGlobal'

const g = resolveGlobal()

export default (Function.prototype.isPrototypeOf(g.Promise)
  ? g.Promise.race.bind(g.Promise)
  : PromisePolyfill.race.bind(PromisePolyfill))
