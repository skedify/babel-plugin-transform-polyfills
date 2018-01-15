import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise)
  ? window.Promise.reject.bind(window.Promise)
  : PromisePolyfill.reject.bind(PromisePolyfill))
