export default function includes(arr, searchElement, fromIndex) {
  if (arr.includes) {
    return arr.includes(searchElement, fromIndex)
  }
  if (Array.isArray(arr) || typeof arr === 'string') {
    return arr.indexOf(searchElement, fromIndex) !== -1
  }
  throw new TypeError('.includes is not a function')
}
