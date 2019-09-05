export default Function.prototype.isPrototypeOf(Object.entries)
  ? Object.entries
  : function entries(object) {
      return Object.keys(object).map(key => [key, object[key]]);
    };
