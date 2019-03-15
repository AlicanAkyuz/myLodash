// Replaces a matching pattern in string with replacement.

function replace(str, pattern, replacement) {
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === pattern) {
      strArr[i] = replacement
    }
  }

  return strArr.join(' ')
}

const strA = 'hello dear dog';
const patternStr = 'dog';
const replacementStr = 'cat';

console.log(replace(strA, patternStr, replacementStr));
