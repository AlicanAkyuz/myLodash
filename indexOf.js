const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function indexOf(arr, value, fromIndex) {
  let index;
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] == value) {
      index = arr[i] - 1;
      break
    } else {
      index = `there isn't a ${value}`
    }
  }
  return index
}

console.log(indexOf(arrayA, 9, 7));
console.log(indexOf(arrayA, 3, 1));
