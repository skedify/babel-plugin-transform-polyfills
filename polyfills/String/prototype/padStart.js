export default (Function.prototype.isPrototypeOf(String.prototype.padStart)
  ? function padStart(str, ...params) {
      return str.padStart(...params)
    }
  : function padStart(str, targetLength, padString = ' ') {
      const len = str.length
      if (len >= targetLength) {
        return str
      }
      return padStart(
        `${padString.substr(0, targetLength - len)}${str}`,
        targetLength,
        padString
      )
    })
