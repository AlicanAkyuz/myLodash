// Creates an array excluding all given values
// Returns the new array of filtered values.

function without(arr, values) {
  let argArr = [...arguments];
  let myArr = argArr.shift();
  let newArr = [];

  Array.isArray(argArr[0]) === false ?
    newArr = myArr.filter(e => argArr.indexOf(e) === -1) :
      newArr = myArr.filter(e => argArr[0].indexOf(e) === -1)

  return newArr
}

const arrayA = [1, 2, 3, 4, 5, 6];
const arrayB = [1, 2, 3, 4, 5, 6];
const arrayC = [3, 6];

console.log(without(arrayA, arrayC));
console.log(without(arrayB, 2, 5));
