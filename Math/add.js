// Adds two numbers.

function add (num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    return 'add expects 2 numbers as arguments'
  } else {
    return num1 + num2
  }
}

console.log(add(2));
console.log(add(3, 5));
