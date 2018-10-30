/*
Mumbling
===
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  return s
    .split('')
    .map((letter, index) => letter.toLowerCase().repeat(index + 1))
    .map(section => section.charAt(0).toUpperCase() + section.substr(1))
    .join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
