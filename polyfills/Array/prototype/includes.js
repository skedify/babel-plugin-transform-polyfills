export default (Function.prototype.isPrototypeOf(Array.prototype.includes)
  ? function includes(arr, searchElement, fromIndex) {
      return arr.includes(searchElement, fromIndex)
    }
  : function includes(arr, searchElement, fromIndex = 0) {
      return arr.indexOf(searchElement, fromIndex) !== -1
    })
