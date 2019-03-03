// Uses a binary search to determine the lowest index at which value should be inserted into array
// in order to maintain its sort order.

function sortIndex(arr, num) {
  if (num < arr[arr.length - 1] && num > arr[0]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        return i
      }
    }
  } else {
    if (num > arr[arr.length - 1]) {
      return arr.length
    } else {
      return 0
    }
  }
}

const arrayA = [6, 8, 9, 10];

console.log(sortIndex(arrayA, 5))
console.log(sortIndex(arrayA, 7))
console.log(sortIndex(arrayA, 15))
