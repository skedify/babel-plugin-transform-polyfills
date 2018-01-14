import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise.all)
  ? window.Promise.all
  : PromisePolyfill.all)