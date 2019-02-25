const falseyArr = [0, 1, false, 2, '', 3, null, NaN, 0, 4, 5, false, ''];

function compact(arr) {
  let newArr = [];
  for (const item of arr) {
    if (!item === 0 || !item === false || !item === '' || !item === null || !item === NaN) {
      newArr.push(item)
    }
  }
  return newArr
}

console.log(compact(falseyArr));
