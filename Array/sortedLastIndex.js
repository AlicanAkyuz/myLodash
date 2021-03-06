// This method is like sortedIndex()
// except that it returns the highest index at which value should be inserted into array
// in order to maintain its sort order.

function sortedLastIndex(arr, num) {
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

const arrayA = [6, 6, 6, 6, 8, 9, 10];

console.log(sortedLastIndex(arrayA, 5))
console.log(sortedLastIndex(arrayA, 7))
console.log(sortedLastIndex(arrayA, 15))
