import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise.resolve)
  ? window.Promise.resolve
  : PromisePolyfill.resolve)
