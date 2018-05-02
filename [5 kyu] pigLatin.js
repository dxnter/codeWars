/*
Simple Pig Latin
===
https://www.codewars.com/kata/simple-pig-latin/train/javascript
*/

const pigIt = str =>
  str
    .split(' ')
    .map(word => `${word.substr(1)}${word.charAt(0)}ay`)
    .join(' ');

console.log(pigIt('Pig latin is cool'));
