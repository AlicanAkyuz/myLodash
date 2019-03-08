// Creates an array of unique values, in order, from all given arrays.
// Returns the new array of combined values.

function union() {
  let argArr = [...arguments];
  let newArr = [];

  for (let i = 0; i < argArr.length; i++) {
    for (let e = 0; e < argArr[i].length; e++) {
      if (newArr.indexOf(argArr[i][e]) === -1) {
        newArr.push(argArr[i][e])
      }
    }
  }

  return newArr
}

const arrayA = [1, 2, 2, 2, 5, 3];
const arrayB = [4, 3, 1, 3, 6, 5];
const arrayC = [0, 5, 4, 6, 7, 3, 2];

console.log(union(arrayA, arrayB, arrayC));
