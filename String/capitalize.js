// Converts the first character of string to upper case
// and the remaining to lower case.

function capitalize(str) {
  let arr = str.split('');
  let newArr = [];
  arr.forEach(e => {
    arr.indexOf(e) === 0 ? newArr.push(e.toUpperCase()) : newArr.push(e.toLowerCase());
  })
  return newArr.join('')
}

const stringA = "when dogs bark, they bark for a reason."
const stringB = "if cats meow, They meow For a reason."

console.log(capitalize(stringA));
console.log(capitalize(stringB));
