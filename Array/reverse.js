// Reverse array without creating new array or implementing built-in JS methods.

function Reverse(arr) {
  for (let i = 0; i <= arr.length / 2; i++) {
    let targetIndex = (arr.length - 1) - i;
    let targetValue = arr[targetIndex];
    arr[targetIndex] = arr[i];
    arr[i] = targetValue;
  }
  return arr
}

const arrayA = [1, 2, 3, 4, 5, 8, 32, 70];
console.log(Reverse(arrayA));
