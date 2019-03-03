// Gets the first element of array.

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

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [];
const string = "this is a string";

console.log(head(arrayA));
console.log(head(arrayB));
console.log(head(string));
