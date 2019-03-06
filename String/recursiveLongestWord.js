// This method is like longestWord() except that it is recursive. 

function recursiveLongestWord(str) {
  let wordsArr = str.split(' ');
  let length = wordsArr.shift().length;

  wordsArr[0].length > length ?
    length = wordsArr[0].length :
      length = length;

  wordsArr.shift();

  if (wordsArr.length > 0) {
    length = recursiveLongestWord(wordsArr.join(' '))
  }

  return length
}


const sentenceOne = 'Please find the longest word in this sentence';
const sentenceTwo = 'California is the capital of californication';
console.log(recursiveLongestWord(sentenceOne));
console.log(recursiveLongestWord(sentenceTwo));
