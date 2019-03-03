// Creates a slice of array with n elements dropped from the beginning.

function drop(arr, n) {
  const inputArr = arr.reverse();
  const newArr = [];
  for (let i = 0; i < arr.length - n; i++) {
    newArr.push(arr[i]);
  }
  return newArr.reverse()
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = ['sun', 'rain', 'snow', 'fog', 'mist'];

console.log(drop(arrayA, 2));
console.log(drop(arrayB, 1));
