// Adds all numbers passed as arguments.

function addAll() {
  let arr = [...arguments];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}

console.log(addAll());
console.log(addAll(1, 2, 3, 4, 5));
console.log(addAll(3, 5, 9, 9726));
