// This method is like indexOf(), except that the iteration is from right to left.
// Returns the index of the matched value, else -1.

function lastIndexOf(arr, value, fromIndex) {
  let index;

  if (fromIndex) {
    for (let i = arr.length -1; i >= fromIndex; i--) {
      if (arr[i] === value) {
        index = i;
        break
      }
    }
  } else {
    for (let i = arr.length -1; i >= 0; i--) {
      if (arr[i] === value) {
        index = i;
        break
      }
    }
  }

  if (index === undefined) {
    index = -1
  }
  return index
}

const arrayA = [1, 2, 3, 4, 5, 6, 7, 12, 20];

console.log(lastIndexOf(arrayA, 20, 7));
console.log(lastIndexOf(arrayA, 3, 1));
console.log(lastIndexOf(arrayA, 2));
