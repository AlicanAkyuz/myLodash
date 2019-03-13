// Converts string to kebab case, removing special characters.

function kebabCase(str) {
  let newArr = [];

  str.split('').forEach(e => {
    for (let i = 0; i < e.length; i++) {
      if(/^[A-Za-z ]+$/.test(e[i])) {
        newArr.push(e[i].toLowerCase());
      }
    }
  });

  return newArr.join('').replace(' ', '-')
}

const stringA = "Dogs barking///";
const stringB = "meow ***cat";
const stringC = "--SUN CARE--!-";

console.log(kebabCase(stringA));
console.log(kebabCase(stringB));
console.log(kebabCase(stringC));
