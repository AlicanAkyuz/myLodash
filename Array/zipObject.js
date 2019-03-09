// This method is like fromPairs() except that it accepts two arrays,
// one of property identifiers and one of corresponding values.

function zipObject(identifiers, values) {
  let obj = {};
  for (let i = 0; i < identifiers.length; i++) {
    obj[identifiers[i]] = values[i]
  }
  return obj
}

const arrayA = ['a', 'b', 'c', 'd'];
const arrayB = [1, 2, 3, 4];

console.log(zipObject(arrayA, arrayB));
