// Gets the index at which the first occurrence of value is found in array, else returns -1.

const arrayA = [1, 2, 3, 4, 5, 6, 7, 12, 20];

function indexOf(arr, value, fromIndex) {
  let index;
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break
    }
  }
  if (index === undefined) {
    index = -1
  }
  return index
}

console.log(indexOf(arrayA, 20, 7));
console.log(indexOf(arrayA, 3, 1));
