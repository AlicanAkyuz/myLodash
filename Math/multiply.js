// Multiplies two numbers.

function multiply (multiplier, multiplicand) {
  if (multiplier === undefined || multiplicand === undefined) {
    return 'multiply expects 2 numbers as arguments'
  } else {
    return multiplier * multiplicand
  }
}

console.log(multiply(2));
console.log(multiply(3, 5));
