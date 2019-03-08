// Creates a slice of array with n elements taken from the beginning.
// n is, by default, 1.
// Returns the slice.

function take(arr, n) {
  let newArr = [];
  let start;

  if (n === undefined) {
    start = 1
  } else if (n > arr.length) {
    start = arr.length
  } else {
    start = n
  }

  for (let i = 0; i < start; i++) {
    newArr.push(arr[i])
  }

  return newArr
}


const arrayA = [1, 2, 3, 4];

console.log(take(arrayA));
console.log(take(arrayA, 3));
console.log(take(arrayA, 8));
