/* eslint-disable consistent-return */
const checkValue = (value, min, max) => {
  const validValues = /^[1-9]?\d*$/

  if (!validValues.test(value)) {
    return
  }

  const newText = parseInt(value, 10)

  if (Number.isNaN(newText)) {
    return 0
  }

  if (newText > max) {
    return max
  }

  if (newText < min) {
    return min
  }

  return newText
}
export default checkValue
