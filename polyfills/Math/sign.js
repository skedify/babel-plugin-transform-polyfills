function mathSign(number) {
  return (number > 0) - (number < 0) || Number(number)
}

export default function sign(number) {
  if (Math.sign) {
    return Math.sign(number)
  }

  return mathSign(number)
}
