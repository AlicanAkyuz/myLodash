// Flattens array a single level deep.

const arrayA = [0, 1, 2, [3, 4], [5, [6, 7]]];

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

console.log(flatten(arrayA));
