// Pads string on the left and right sides if it's shorter than length.
// Padding characters are truncated if they can't be evenly divided by length.
// If no padding character provided, the string is padded with spaces.

function pad(str, length, char) {
  let strArr = str.split('');
  let charToAdd = '';
  char === undefined ? charToAdd = ' ' : charToAdd = char;

  if (strArr.length === length) {
    return str
  } else if (strArr.length < length -1) {
    strArr.unshift(charToAdd);
    if (strArr.length !== length) {
      strArr.push(charToAdd)
    }
    return pad(strArr.join(''), length, charToAdd)
  } else {
    strArr.push(charToAdd[0]);
    return strArr.join('')
  }
}

const strA = 'abc';
console.log(pad(strA, 3));
console.log(pad(strA, 5));
console.log(pad(strA, 7, '**'));
console.log(pad(strA, 10, '-_)'));
