// Converts string to kebab case, removing special characters.

function kebabCase(str) {
  let words = str.split(' ');
  let newArr = [];

  words.forEach(e => {
    if (words.indexOf(e) === 0) {
      let cleanWord = [];
      for (let y = 0; y < e.length; y++) {
        if(/^[A-Za-z]+$/.test(e[y])) {
          cleanWord.push(e[y])
        }
      }
      newArr.push(cleanWord.join('').toLowerCase());
    } else {
      let otherWords = e.split('');
      let otherWordsCleaned = [];
      for (let z = 0; z < otherWords.length; z++) {
        if(/^[A-Za-z]+$/.test(otherWords[z])) {
          otherWordsCleaned.push(otherWords[z])
        }
      }
      newArr.push(otherWordsCleaned.shift().toUpperCase());
      otherWordsCleaned.forEach(i => newArr.push(i.toLowerCase()))
    }
  });

  return newArr.join('')
}

const stringA = "Dogs barking///";
const stringB = "meow ***cat";
const stringC = "--SUN CARE--!-";

console.log(kebabCase(stringA));
console.log(kebabCase(stringB));
console.log(kebabCase(stringC));
