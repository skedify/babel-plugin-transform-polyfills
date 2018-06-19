import PromisePolyfill from 'es6-promise'
import resolveGlobal from '../resolveGlobal'

const g = resolveGlobal()

export default function createPromise(...args) {
  return new (Function.prototype.isPrototypeOf(g.Promise)
    ? g.Promise.bind(g.Promise)
    : PromisePolyfill.bind(PromisePolyfill))(...args)
}
