/*
Get the Middle Character
===

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

const getMiddle = str => {
  const middle = str.length / 2;
  let newStr = '';
  if (str.length % 2 === 0) {
    newStr += str.charAt(middle - 1) + str.charAt(middle);
  } else {
    newStr += str.charAt(middle);
  }
  return newStr;
};

console.log(getMiddle('testing')); // t
