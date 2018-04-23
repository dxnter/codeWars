/*
Credit Card Mask
===
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

const maskify = str =>
  str
    .split('')
    .map((e, i) => {
      if (i >= str.length - 4) return e;
      return '#';
    })
    .join('');

console.log(maskify('4556364607935616'));
