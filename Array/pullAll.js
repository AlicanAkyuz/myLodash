// This method is like pull(), except that it accepts an array of values to remove.

function pullAll(arr, val) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!val.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arrayA = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
const valToRemove = ['a', 'b']

console.log(pullAll(arrayA, valToRemove));
