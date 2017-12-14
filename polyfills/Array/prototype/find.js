function findRecursive(arr, callback, thisArg = arr, idx = 0) {
  if (idx === arr.length) {
    return undefined
  }
  if (callback.call(thisArg, arr[idx], idx, arr)) {
    return arr[idx]
  }
  return findRecursive(arr, callback, thisArg, idx + 1)
}

export default function find(arr, callback, thisArg) {
  if (arr.find) {
    return arr.find(callback, thisArg)
  }
  if (Array.isArray(arr)) {
    return findRecursive(arr, callback, thisArg)
  }
  throw new TypeError('.find is not a function')
}
