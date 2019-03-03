// Converts all elements in array into a string separated by separator.

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 'a', 'b', 6];
const seperatorA = '*';
const seperatorB = '-';

function join(arr, seperator) {
  let string = '';
  for (const item of arr) {
    arr.indexOf(item) === 0 ? string = item : string = string + seperator + item;
  }
  return string
}

console.log(join(arrayB, seperatorB));
console.log(join(arrayA, seperatorA));
