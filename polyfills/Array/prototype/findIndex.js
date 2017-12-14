function findIndexRecursive(arr, callback, thisArg = arr, idx = 0) {
  if (idx === arr.length) {
    return -1
  }
  if (callback.call(thisArg, arr[idx], idx, arr)) {
    return idx
  }
  return findIndexRecursive(arr, callback, thisArg, idx + 1)
}

export default function findIndex(arr, callback, thisArg) {
  if (arr.findIndex) {
    return arr.findIndex(callback, thisArg)
  }
  if (Array.isArray(arr)) {
    return findIndexRecursive(arr, callback, thisArg)
  }
  throw new TypeError('.findIndex is not a function')
}
