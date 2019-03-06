// Reverse a string recursively.

function reverseStr(str) {
  let strArr = [...str];
  let newArr = [];

  if (newArr.length !== strArr.length) {
    newArr.unshift(strArr.pop());
    newArr = newArr.concat(reverseStr(strArr));
  }

  return newArr.join('')
}


console.log(reverseStr('alican'));
console.log(reverseStr('tansu'));
