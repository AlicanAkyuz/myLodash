// Removes elements from array corresponding to 'indexes'
// Returns an array of removed elements.

function pullAt(arr, indexes) {
  let removedArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let e = 0; e < indexes.length; e++) {
      if (i === indexes[e]) {
        removedArr.push(arr[i]);
      }
    }
  }

  for (let x = 0; x < arr.length; x++) {
    if (removedArr.indexOf(arr[x]) !== -1) {
      arr.splice(x, 1);
    }
  }

  return removedArr
}

const arrayA = ['a', 'b', 'c', 'd', 'e', 'f'];
const arrayB = [1, 3, 5];

console.log(pullAt(arrayA, arrayB));
