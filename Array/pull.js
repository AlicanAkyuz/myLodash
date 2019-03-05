// Removes all given values from array.

function pull(arr) {
  let argArr = [...arguments];
  let values = [];
  let newArr = [];

  argArr.forEach(e => {
    if (argArr.indexOf(e) > 0) {
      values.push(e)
    }
  })

  for (let i = 0; i < arr.length; i++) {
    if (!values.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

const arrayA = ['a', 'b', 'c', 'a', 'b', 'c'];
const arrayB = [5, 6, 7, 8, 9, 10];

console.log(pull(arrayA, 'a', 'b'));
console.log(pull(arrayB, 6, 7, 10));
