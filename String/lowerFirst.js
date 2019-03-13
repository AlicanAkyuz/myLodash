// Converts the first character of string to lower case.
// Returns the new string

function lowerFirst(str) {
  let arr = str.split('');
  let newArr = [];
  arr.forEach(e => {
    arr.indexOf(e) === 0 ? newArr.push(e.toLowerCase()) : newArr.push(e);
  })
  return newArr.join('')
}

const stringA = "WHEN dogs bark, they bark for a reason."
const stringB = "If cats meow, They meow For a reason."

console.log(lowerFirst(stringA));
console.log(lowerFirst(stringB));
