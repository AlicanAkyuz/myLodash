// Creates a slice of array with n elements dropped from the end.

function dropRight(arr, n) {
  const newArr = [];
  for (let i = 0; i < arr.length - n; i++) {
    newArr.push(arr[i]);
  }
  return newArr
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = ['sun', 'rain', 'snow', 'fog', 'mist'];

console.log(dropRight(arrayA, 3));
console.log(dropRight(arrayB, 2));
