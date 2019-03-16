// Subtracts two numbers.

function subtract (minuend, subtrahend) {
  if (minuend === undefined || subtrahend === undefined) {
    return 'subtract expects 2 numbers as arguments'
  } else {
    return minuend - subtrahend
  }
}

console.log(subtract(2));
console.log(subtract(3, 5));
console.log(subtract(800, 17));
