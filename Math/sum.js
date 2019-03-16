// Computes the sum of the values in array.

function sum (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}

const arrA = [1, 2, 3, 4, 5];
const arrB = [78, 99, 123, 3];

console.log(sum(arrA));
console.log(sum(arrB));
