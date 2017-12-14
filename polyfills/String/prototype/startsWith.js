export default (Function.prototype.isPrototypeOf(String.prototype.startsWith)
  ? function startsWith(str, ...params) {
      return str.startsWith(...params)
    }
  : function startsWith(str, searchString, position = 0) {
      const idx = str.indexOf(searchString)
      return idx >= position
    })
