// Pads string on the left side if it's shorter than length.
// Padding characters are truncated if they exceed length.
// If no padding character provided, the string is padded with spaces.


function padStart(str, length, char) {
  let newStr = '';
  let charToAdd = '';
  char === undefined ? charToAdd = ' ' : charToAdd = char;

  if (str.length === length) {
    return str
  }

  if (str.length > length) {
    for (let i = 1; i < str.length; i++) {
      newStr = newStr.concat(str[i]);
    }
    return padStart(newStr, length, charToAdd)
  }

  if (str.length < length) {
    newStr = charToAdd.concat(str);
    return padStart(newStr, length, charToAdd)
  }
};

const strA = 'abc';
console.log(padStart(strA, 3));
console.log(padStart(strA, 5));
console.log(padStart(strA, 7, '**'));
console.log(padStart(strA, 10, '-_)'));
