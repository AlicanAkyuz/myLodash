// Creates a slice of array with n elements taken from the end.
// n, by default, equals to array length.
// Returns the slice.

function takeRight(arr, n) {
  let newArr = [];
  let start;

  if (n === undefined) {
    start = arr.length
  } else if (n < 0) {
    start = 1
  } else if (n > arr.length) {
    start = arr.length
  } else {
    start = n
  }

  for (let i = arr.length; i > arr.length - start; i--) {
    newArr.push(arr[i -1])
  }

  return newArr.reverse()
}


const arrayA = [1, 2, 3, 4, 5, 6, 7];

console.log(takeRight(arrayA));
console.log(takeRight(arrayA, 2));
console.log(takeRight(arrayA, 8));
