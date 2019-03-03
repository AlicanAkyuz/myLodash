// Takes in an array of pairs and returns an object composed from key-value pairs.

const arrayA = [['a', 1], ['b', 2], ['c', 3]];
const arrayB = [['a'], [2], ['c', 3]];

function fromPairs(arr) {
  let returnVal = '';
  let obj = {};
  for (const item of arr) {
    if (item.length !== 2) {
      returnVal = "Please provide key-value pairs as array elements"
      return returnVal
    } else {
      obj[item[0]] = item[1]
    }
  }
  return obj
}

console.log(fromPairs(arrayA));
console.log(fromPairs(arrayB));
