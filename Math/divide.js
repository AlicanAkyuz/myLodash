// Divide two numbers.

function divide(dividend, divisor) {
  if (dividend === undefined || divisor === undefined) {
    return 'divide expects 2 numbers as arguments'
  } else {
    return dividend / divisor
  }
}

console.log(divide(9, 3));
console.log(divide(6, 4));
