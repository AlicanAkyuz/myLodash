// Returns the sum of all numbers in-between two numbers passed as array elements.
// Start and end numbers are also added to the sum.

function addInBetween(arr) {
  let bigNum;
  let smallNum;
  let sum = 0;

  if (arr[0] > arr[1]) {
    bigNum = arr[0];
    smallNum = arr[1];
  } else {
    bigNum = arr[1];
    smallNum = arr[0];
  }

  for (let i = smallNum; i <= bigNum; i++) {
      sum = sum + i
  }
  return sum
}

const arrayA = [2, 5];
const arrayB = [11, 4];

console.log(addInBetween(arrayA));
console.log(addInBetween(arrayB));
