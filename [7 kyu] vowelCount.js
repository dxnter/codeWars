// https://www.codewars.com/kata/vowel-count/train/javascript

const getCount = str => {
  return str.split('').filter(letter => /[aeiou]/gi.test(letter)).length;
};

console.log(getCount('abracadabra')); // 5
