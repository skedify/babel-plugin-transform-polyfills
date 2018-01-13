import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise.race)
  ? window.Promise.race
  : PromisePolyfill.race)
