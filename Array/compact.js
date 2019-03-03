// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr) {
  let newArr = [];
  for (const item of arr) {
    if (!item === 0 || !item === false || !item === '' || !item === null || !item === NaN) {
      newArr.push(item)
    }
  }
  return newArr
}

const arrayA = [0, 1, false, 2, '', 3, null, NaN, 0, 4, 5, false, ''];

console.log(compact(arrayA));
