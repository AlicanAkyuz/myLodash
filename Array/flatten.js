// Flattens array a single level deep.

function flatten(arr) {
  let newArr = [];
  for (const item of arr) {
    if (!Array.isArray(item)) {
      newArr.push(item)
    } else {
      for (const element of item) {
        newArr.push(element)
      }
    }
  }
  return newArr
}

const arrayA = [0, 1, 2, [3, 4], [5, [6, 7]]];

console.log(flatten(arrayA));
