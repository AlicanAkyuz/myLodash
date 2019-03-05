// Removes all given values from array.

function pull(arr) {
  let argArr = [...arguments];
  for (let i = 1; i < argArr.length; i++) {
    arr.forEach(e => {
      if (e === argArr[i]) {
        arr.splice(arr.indexOf(e), 1)
      }
    })
  }
  return arr
}

const arrayA = ['a', 'b', 'c', 'a', 'b', 'c'];
const arrayB = [5, 6, 7, 8, 9, 10];

console.log(pull(arrayA, 'a', 'b'));
console.log(pull(arrayB, 6, 7, 10));
