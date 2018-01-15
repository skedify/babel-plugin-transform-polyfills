import PromisePolyfill from 'es6-promise'

export default (Function.prototype.isPrototypeOf(window.Promise)
  ? window.Promise.race.bind(window.Promise)
  : PromisePolyfill.race.bind(PromisePolyfill))
