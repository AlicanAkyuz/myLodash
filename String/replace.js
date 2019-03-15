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

const strA = 'hello, dear dog';
const patternStrA = 'dog';
const replacementStrA = 'cat';
console.log(replace(strA, patternStrA, replacementStrA));


const strB = 'hello, dear butterfly';
const patternStrB = 'dear';
const replacementStrB = 'little';
console.log(replace(strB, patternStrB, replacementStrB));
