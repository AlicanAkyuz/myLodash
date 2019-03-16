// Computes the minimum value of array.
// If array is empty or falsey, undefined is returned.

function min(arr) {
  if (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    if (first < second) {
      arr.unshift(first);
      return min(arr);
    } else {
      arr.unshift(second);
      return min(arr);
    }
  }

  if (arr.length === 1) {
    return arr[0]
  }

  if (arr.length === 0 || arr === undefined) {
   return undefined
  }
}

console.log(min([789, 56, 0.72]));
console.log(min([3, 7, 47, 9, 5, 2, 39]));
console.log(min([]));
