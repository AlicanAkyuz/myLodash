// Creates a new array concatenating array with any additional arrays and/or values.

function concat(arg) {
  const newArr = [];
  for (const item of arguments) {
    if (Array.isArray(item)) {
      item.forEach(e => {
        newArr.push(e)
      })
    } else {
      newArr.push(item)
    }
  }
  return newArr
}

const arrayA = [1, 2];
console.log(concat(arrayA, 'concat_me', 3));
