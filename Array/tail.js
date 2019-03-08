// Gets all but the first element of array.

function tail(arr) {
  arr.shift();
  return arr
}

const arrayA = [1, 2, 3];
console.log(tail(arrayA));
