export default function resolveGlobal() {
  return typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined' ? self : {}
}
