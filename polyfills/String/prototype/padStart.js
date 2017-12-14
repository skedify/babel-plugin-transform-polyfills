function stringPadStart(str, targetLength, padString = ' ') {
  const len = str.length
  if (len >= targetLength) {
    return str
  }
  return stringPadStart(
    `${padString.substr(0, targetLength - len)}${str}`,
    targetLength,
    padString
  )
}

export default function padStart(str, targetLength, padString) {
  if (str.padStart) {
    return str.padStart(targetLength, padString)
  }
  if (typeof str === 'string') {
    return stringPadStart(str, targetLength, padString)
  }
  throw new TypeError('.padStart is not a function')
}
