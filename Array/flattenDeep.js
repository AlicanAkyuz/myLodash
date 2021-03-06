// Recursively flattens array.

function flattenDeep(arr) {
  let newArr = [];
  for (const item of arr) {
    if (!Array.isArray(item)) {
      newArr.push(item)
    } else {
      newArr = newArr.concat(flattenDeep(item))
    }
  }
  return newArr
}

const arrayA = [2, 3, [9, 8, [0, 10], 7], [4, [5, 6]]];

console.log(flattenDeep(arrayA));
