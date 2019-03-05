// Gets the element at index n of array.
// If n is negative, the nth element from the end is returned.

function nth(arr, value) {
  let el;
  value > -1 ? el = value : el = arr.length + value;
  return arr[el]
}

const arrayA = [1, 2, 3, 4, 5, 6, 7, 12, 20];

console.log(nth(arrayA, 3));
console.log(nth(arrayA, -7));
