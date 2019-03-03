// Creates a slice of array with n elements dropped from the end.

const arrayA = [1, 2, 3, 4, 5];
const arrayB = ['sun', 'rain', 'snow', 'fog', 'mist'];

function drop(arr, n) {
  const newArr = [];
  for (let i = 0; i < arr.length - n; i++) {
    newArr.push(arr[i]);
  }
  return newArr
}

console.log(drop(arrayA, 3));
console.log(drop(arrayB, 2));
