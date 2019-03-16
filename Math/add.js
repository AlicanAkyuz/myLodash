// Adds two numbers.

function add (augend, addend) {
  if (augend === undefined || addend === undefined) {
    return 'add expects 2 numbers as arguments'
  } else {
    return augend + addend
  }
}

console.log(add(2));
console.log(add(3, 5));
