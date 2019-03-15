//Repeats the given string n times.

function repeat(str, n) {
  let newStr = '';
  for (let i = 1; i <= n; i++) {
    newStr = newStr + str;
  }
  return newStr
}

const strA = 'abc';
console.log(repeat(strA, 3));
console.log(repeat(strA, 2));
console.log(repeat(strA, 0));
