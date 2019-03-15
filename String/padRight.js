// Pads string on the right side if it's shorter than length.
// Padding characters are truncated if they exceed length.
// If no padding character provided, the string is padded with spaces.

function padRight(str, length, char) {
  let newStr = '';
  let charToAdd = '';
  char === undefined ? charToAdd = ' ' : charToAdd = char;

  if (str.length === length) {
    return str
  }

  if (str.length > length) {
    for (let i = 0; i < str.length -1; i++) {
      newStr = newStr.concat(str[i]);
    }
    return padRight(newStr, length, charToAdd)
  }

  if (str.length < length) {
    newStr = str.concat(charToAdd)
    return padRight(newStr, length, charToAdd)
  }
};

const strA = 'abc';
console.log(padRight(strA, 3));
console.log(padRight(strA, 5));
console.log(padRight(strA, 7, '**'));
console.log(padRight(strA, 10, '-_)'));
