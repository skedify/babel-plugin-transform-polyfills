import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise)
  ? window.Promise.resolve.bind(window.Promise)
  : PromisePolyfill.resolve.bind(PromisePolyfill))
