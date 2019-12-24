export default Function.prototype.isPrototypeOf(Object.values)
  ? Object.values
  : function values(object) {
      return Object.keys(object).map(key => object[key])
    }
