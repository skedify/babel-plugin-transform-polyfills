import PromisePolyfill from 'es6-promise'

export default function createPromise(...args) {
  return new (Function.prototype.isPrototypeOf(window.Promise)
    ? window.Promise
    : PromisePolyfill)(...args)
}
