// Creates an array of unique values that are included in all given arrays
// The order and references of result values are determined by the first array.

function intersection() {
  let argArr = [...arguments];
  let newArr = argArr.shift().filter(e => argArr[0].includes(e));

  if (argArr.length > 1) {
    argArr.shift();
    argArr.unshift(newArr);
    newArr = intersection(...argArr);
  }

  return newArr
}

const arrayA = [1, 13, 3, 'e', 28, 'h'];
const arrayB = ['h', 5, 'e', 28, 15, 4, 13];
const arrayC = [6, 'h', 15, 7, 13, 'e', 72, 16];
const arrayD = ['e', 15, 8, 13, 9, 'h'];

console.log(intersection(arrayA, arrayB, arrayC, arrayD));
