// This method is like zip()
// except that it accepts an array of grouped elements
// and creates an array regrouping the elements to their pre-zip configuration.

function unzip() {
  let argArr = [...arguments];
  let chunkArr = [];
  let returnArr = [];
  argArr.forEach(e => chunkArr.push(e.shift()));
  returnArr.push(chunkArr);
  argArr[0].length !== 0 ? returnArr = returnArr.concat(unzip(...argArr)) : returnArr = returnArr;
  return returnArr
}

const arrayA = ['a', 1, true];
const arrayB = ['b', 2, false];
console.log(unzip(arrayA, arrayB));
