// Converts string to kebab-case, removing special characters.

function kebabCase(str) {
  let arr = [];

  str.split('').forEach(e => {
    for (let i = 0; i < e.length; i++) {
      if(/^[A-Za-z ]+$/.test(e[i])) {
        arr.push(e[i].toLowerCase());
      }
    }
  });

  return arr.join('').replace(' ', '-')
}

const stringA = "Dogs barking///";
const stringB = "meow ***cat";
const stringC = "--SUN CARE--!-";

console.log(kebabCase(stringA));
console.log(kebabCase(stringB));
console.log(kebabCase(stringC));
