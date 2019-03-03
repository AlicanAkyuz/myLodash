// Gets all but the last element of array.

const arrayA = ['a', 'b', 'c'];
const arrayB = ['10', '9', '8'];

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

console.log(initial(arrayA));
console.log(initial(arrayB));
