const arrayA = [0, 1, 72, 36, 2, 3, 786, 4, 5, 6, 7, 8, 9, 10];
const arrayB = [870, 760, 13, 15, 0, 24, 29282, 45];

function Clear(arr) {
  let itemsToRemove = [];
  let newArr = [];

  for(let i = 1; i <= arguments.length -1; i++) {
    itemsToRemove.push(arguments[i]);
  }

  for (let e = 0; e <= arr.length -1; e++) {
    for (const item of itemsToRemove) {
      if (arr[e] === item) {
        delete arr[e]
      }
    }
  }

  for (const element of arr) {
    if (element !== undefined) {
      newArr.push(element)
    }
  }

  return newArr;
}

console.log(Clear(arrayA, 0, 3, 5, 7, 9));
console.log(Clear(arrayB, 760, 870, 45));
