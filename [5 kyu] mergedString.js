/*
Merged String Checker
===
At a job interview, you are challenged to write an algorithm to check
if a given string, s, can be formed from two other strings, part1 and part2.
*/

const isMerge = (s, part1, part2) =>
  s.split('').every(character => {
    if (part1.includes(character) || part2.includes(character)) return true;
  });

console.log(isMerge('codewars', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(isMerge('codewars', 'cod', 'wars'));
