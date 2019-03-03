// Fills elements of array with value from start index up to, but not including, end.
// If end value is not provided, all elements from start index till end is replaced.

function fill (arr, val, start, end) {
  let returnVal;

  if (!arr) {
    returnVal = "Please provide an array"
  } else if (!val) {
    returnVal = "Please provide a value to replace array elements"
  }

  if (start !== undefined) {
    if (end !== undefined) {
      for (let i = start; i <= end - start; i++) {
        arr[i] = val
      }
      returnVal = arr;
    } else {
        for (let i = start; i < arr.length; i++) {
          arr[i] = val
        }
        returnVal = arr;
    }
  } else {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = val
      }
      returnVal = arr;
  }
  
  return returnVal
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

console.log(fill(arrayA, 6, 1, 2));
console.log(fill(arrayB, 'Nov', 1, 3));
