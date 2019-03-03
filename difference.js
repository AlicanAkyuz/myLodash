// Creates an array of array values not included in the other given array.
// The order and references of result values are determined by the first array.

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 3, 4];
const arrayC = ['a', 'b', 'c', 'd'];
const arrayD = ['b', 'd'];

function differance(arr, ex) {
  for (let i = 0; i < arr.length; i++) {
    for (const item of ex) {
      if (arr[i] === item) {
        arr.splice(arr.indexOf(arr[i]), 1)
      }
    }
  }
  return arr
}

console.log(differance(arrayA, arrayB));
console.log(differance(arrayC, arrayD));
