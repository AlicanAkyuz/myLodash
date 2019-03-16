// Multiplies two numbers.

function multiply (num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    return 'multiply expects 2 numbers as arguments'
  } else {
    return num1 * num2
  }
}

console.log(multiply(2));
console.log(multiply(3, 5));
