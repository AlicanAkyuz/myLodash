// Creates a slice of array from start up to, but not including, end.
// If start value is not provided, the slice is cut from 0 index.
// If end value is not provided, arry length becomes the end value.
// This method returns the slice of array.

function slice(arr, start, end) {
  let newArr = [];
  let st;
  let en;

  if (start === undefined) {
    st = 0;
    en = arr.length;
  } else if (end === undefined) {
    st = start;
    en = arr.length;
  } else {
    st = start;
    en = end;
  }

  for (let i = st; i < en; i++) {
    newArr.push(arr[i])
  }

  return newArr
}

const arrayA = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrayB = [1, 2, 3, 4, 5, 6, 7];

console.log(slice(arrayA, 1, 4));
console.log(slice(arrayB, 4));
