// Gets the first element of array.

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [];
const string = "this is a string";

function head(arr) {
  let returnVal;
  if (arr.length === 0) {
    returnVal = undefined
  } else if (!Array.isArray(arr)){
    returnVal = 'This is not an array!'
  } else {
    returnVal = arr[0]
  }
  return returnVal
}

console.log(head(arrayA));
console.log(head(arrayB));
console.log(head(string));
