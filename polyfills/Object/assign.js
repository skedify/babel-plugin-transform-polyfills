export default (Function.prototype.isPrototypeOf(Object.assign)
  ? Object.assign
  : function assign(target, ...objects) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object')
      }

      const output = Object(target)
      objects.forEach(source => {
        if (source !== undefined && source !== null) {
          Object.getOwnPropertyNames(source).forEach(nextKey => {
            if (
              Function.prototype.isPrototypeOf(output) &&
              (nextKey === 'caller' || nextKey === 'arguments')
            ) {
              return
            }
            output[nextKey] = source[nextKey]
          })
        }
      })
      return output
    })
