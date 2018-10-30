/*
Find The Word Pair!
===
https://www.codewars.com/kata/find-the-word-pair
*/

const compoundMatch = (words, target) => {
  const uniqueWords = [...new Set(words)];
  let result;
  uniqueWords.forEach((currentWord, currentIndex) => {
    uniqueWords.forEach((word, wordIndex) => {
      if (`${currentWord}${word}` === target) result = [currentWord, word, [currentIndex, wordIndex]];
      if (`${word}${currentWord}` === target) result = [word, currentWord, [wordIndex, currentIndex]];
    });
  });
  return result;
};

console.log(compoundMatch(['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'], 'superbowl'));
