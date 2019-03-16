// Computes the maximum value of array.
// If array is empty or falsey, undefined is returned.

function max(arr) {
  if (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    if (first > second) {
      arr.unshift(first);
      return max(arr);
    } else {
      arr.unshift(second);
      return max(arr);
    }
  }

  if (arr.length === 1) {
    return arr[0]
  }

  if (arr.length === 0 || arr === undefined) {
   return undefined
  }
}

console.log(max([789, 56, 0.72]));
console.log(max([3, 7, 47, 9, 5, 2, 39]));
console.log(max([]));
