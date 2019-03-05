// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(arr, size) {
  const newArr = [];
  for (let i = 1; arr.length / size; i++) {
    newArr.push(arr.splice(0, size))
  }
  return newArr
};

console.log(chunk(arrayA, 3));
