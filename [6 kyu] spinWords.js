/*
Stop gninnipS My sdroW!
===
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
 */

const spinWords = str => {
  const splitSentence = str.split(' ');
  for (const word of splitSentence) {
    if (word.length >= 5) {
      word
        .split('')
        .reverse()
        .join('');
    }
  }
  return splitSentence.join(' ');
};

console.log(spinWords('Hey fellow warriors'));
// returns "Hey wollef sroirraw"
