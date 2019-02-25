const myArray = [1, 2];

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

console.log(concat(myArray, 'concat_me', 3));
