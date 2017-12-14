function stringStartsWith(str, searchString, position = 0) {
  const idx = str.indexOf(searchString)
  return idx >= position
}

export default function startsWith(str, searchString, position = 0) {
  if (str.startsWith) {
    return str.startsWith(searchString, position)
  }
  if (typeof str === 'string') {
    return stringStartsWith(str, searchString, position)
  }
  throw new TypeError('.startsWith is not a function')
}
