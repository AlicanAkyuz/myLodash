// Pads string on the right side if it's shorter than length.
// Padding characters are truncated if they exceed length.
// If no padding character provided, the string is padded with spaces.


function padRight(str, length, char) {
  let newStr = '';
  let charToAdd = '';
  char === undefined ? charToAdd = ' ' : charToAdd = char;

  if (str.length === length) {
    return str
  } else {
    return padRight(newStr = str.concat(charToAdd[0]), length, charToAdd)
  }
};

const strA = 'abc';
console.log(padRight(strA, 3));
console.log(padRight(strA, 5));
console.log(padRight(strA, 7, '**'));
console.log(padRight(strA, 10, '-_'));
