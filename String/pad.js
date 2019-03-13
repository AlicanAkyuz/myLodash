// Pads string on the left and right sides if it's shorter than length.
// Padding characters are truncated if they can't be evenly divided by length.
// If no padding character provided, the string is padded with spaces.

function pad(str, length, padding) {
  let strArr = str.split('');
  let addS = '';
  padding === undefined ? addS = ' ' : addS = padding;

  if (strArr.length === length) {
    return str
  } else if (strArr.length < length -1) {
    strArr.unshift(addS);
    if (strArr.length !== length) {
      strArr.push(addS)
    }
    return pad(strArr.join(''), length, addS)
  } else {
    strArr.push(addS[0]);
    return strArr.join('')
  }
}

const strA = 'abc';
console.log(pad(strA, 3));
console.log(pad(strA, 5));
console.log(pad(strA, 7, '**'));
console.log(pad(strA, 10, '-_'));
