// https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
  const x = str.match(/[Xx]/g).length || 0;
  const o = str.match(/[Oo]/g).length || 0;
}

console.log(XO('zpzpzpp'));
