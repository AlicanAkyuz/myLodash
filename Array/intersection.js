// Creates an array of unique values that are included in all given arrays
// The order and references of result values are determined by the first array.

function intersection() {
  let newArr = [...arguments];
  let firstArr = [...newArr[0]];
  let storeArr = [];

  for (let i = 1; i < newArr.length; i++) {
    firstArr.forEach(e => {
      for (let y = 0; y < newArr[i].length; y++) {
        if (e === newArr[i][y]) {
          storeArr.push(e);
        }
      }
    })
  };

  return [...new Set(storeArr)]
}

const arrayA = [1, 13, 3, 15, 'e'];
const arrayB = [5, 'e', 15, 4, 13];
const arrayC = [6, 15, 7, 13, 'e', 72, 16];
const arrayD = ['e', 15, 8, 13, 9];

console.log(intersection(arrayA, arrayB, arrayC, arrayD));
