// Creates a duplicate-free version of an array, which keeps only the first occurrence of each element
// The order of result values is determined by the order they occur in the array.

function uniq(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arrayA = [1, 2, 2, 3, 4, 4, 4, 5];
const arrayB = ['a', 'a', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd'];

console.log(uniq(arrayA));
console.log(uniq(arrayB));
