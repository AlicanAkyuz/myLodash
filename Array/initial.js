// Gets all but the last element of array.

function initial(arr) {
  let newArr = [];
  for (const item of arr) {
    if (arr.indexOf(item) === arr.length - 1) {
      continue
    } else {
      newArr.push(item)
    }
  }
  return newArr
}

const arrayA = ['a', 'b', 'c'];
const arrayB = ['10', '9', '8'];

console.log(initial(arrayA));
console.log(initial(arrayB));
