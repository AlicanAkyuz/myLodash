// Converts string to snake_case.

function snakeCase(str) {
  let arr = [];

  str.split('').forEach(e => {
    for (let i = 0; i < e.length; i++) {
      if(/^[A-Za-z ]+$/.test(e[i])) {
        arr.push(e[i].toLowerCase());
      }
    }
  });

  return arr.join('').replace(' ', '_')
}

const stringA = "Dogs barking///";
const stringB = "meow ***cat";
const stringC = "--SUN CARE--!-";

console.log(snakeCase(stringA));
console.log(snakeCase(stringB));
console.log(snakeCase(stringC));
