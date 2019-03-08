// Creates an array of grouped elements,
// the first of which contains the first elements of the given arrays,
// the second of which contains the second elements of the given arrays and so on.
// Returns the new array of grouped elements.

function zip () {
  let argArr = [...arguments];
  let subArr = [];
  let returnArr = [];
  argArr.forEach(e => subArr.push(e.shift()));
  returnArr.push(subArr);
  argArr[0].length !== 0 ? returnArr = returnArr.concat(zip(...argArr)) : returnArr = returnArr;
  return returnArr
}

const arrayA = ['a', 'b', 'c', 'd'];
const arrayB = [1, 2, 3, 4];
const arrayC = [true, false, true, false];
const arrayD = [6, 7, 8, 9];
console.log(zip(arrayA, arrayB, arrayC, arrayD));
