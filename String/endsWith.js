// Checks if string ends with the given target string.
// Takes 3 arguments: The string to inspect, The string to search for and The position to search up to.
// Returns true if string ends with target, else false.

function endsWith(str, str2, index) {
  let endIndex = str.length;
  if (index !== undefined) {
    endIndex = index
  }
  return (str.slice(endIndex - str2.length, endIndex) === str2)
}

const stringA = "when dogs bark, they bark for a reason."
const stringB = "son.";
const stringC = "en";
const stringD = "ar";

console.log(endsWith(stringA, stringB));
console.log(endsWith(stringA, stringC, 4));
console.log(endsWith(stringA, stringD, 12));
