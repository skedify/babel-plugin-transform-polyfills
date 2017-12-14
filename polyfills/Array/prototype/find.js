function findRecursive(arr, callback, thisArg = arr, idx = 0) {
  if (idx === arr.length) {
    return undefined
  }
  if (callback.call(thisArg, arr[idx], idx, arr)) {
    return arr[idx]
  }
  return findRecursive(arr, callback, thisArg, idx + 1)
}

export default (Function.prototype.isPrototypeOf(Array.prototype.find)
  ? function find(arr, callback, thisArg) {
      return arr.find(callback, thisArg)
    }
  : function find(arr, callback, thisArg) {
      return findRecursive(arr, callback, thisArg)
    })
