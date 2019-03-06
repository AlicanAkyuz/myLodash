// Finds the longest word in a given sentence and returns length of the word

function longestWord(str) {
  let myLength = 0;
  let longestItem = '';

  for (const item of str.split(' ')) {
    if (item.length > myLength) {
      myLength = item.length;
      longestItem = item;
    }
  }
  return myLength;
}


const sentence = 'Please find the longest word in this sentenceee';
console.log(longestWord(sentence));
