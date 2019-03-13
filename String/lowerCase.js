// Converts string, as space separated words, to lower case, removing special characters.

function lowerCase(str) {
  let arr = [];

  str.split('').forEach(e => {
    for (let i = 0; i < e.length; i++) {
      if(/^[A-Za-z ]+$/.test(e[i])) {
        arr.push(e[i].toLowerCase());
      } else {
        arr.push(' ')
      }
    }
  });

  return arr.join('').trim()
}

const stringA = "Dogs barking///";
const stringB = "meow*Cat";
const stringC = "--SUN_CARE--!-";

console.log(lowerCase(stringA));
console.log(lowerCase(stringB));
console.log(lowerCase(stringC));
