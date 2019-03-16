// Computes the mean of the values in array.
// If array is empty or falsey, undefined is returned.

function mean(arr) {
  let total = 0;

  if (arr.length === 0 || arr === undefined) {
   return undefined
  }

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }

  return total / arr.length
}

console.log(mean([]));
console.log(mean([5, 7, 2, 6]));
console.log(mean([34, 7, 12, 98, 22]));
