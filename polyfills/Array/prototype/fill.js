/* eslint-disable */
export default function fill(arr, value, start, end) {
  if (arr.fill) {
    return arr.fill(value, start, end)
  }
  if (Array.isArray(arr)) {
    // Steps 1-2.
    if (arr == null) {
      throw new TypeError('this is null or not defined')
    }

    var O = Object(arr)

    // Steps 3-5.
    var len = O.length >>> 0

    // Steps 6-7.
    var relativeStart = start >> 0

    // Step 8.
    var k =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len)

    // Steps 9-10.
    var relativeEnd = end === undefined ? len : end >> 0

    // Step 11.
    var final =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len)

    // Step 12.
    while (k < final) {
      O[k] = value
      k++
    }

    // Step 13.
    return O
  }
  throw new TypeError('.fill is not a function')
}
