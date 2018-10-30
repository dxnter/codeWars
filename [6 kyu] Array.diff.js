/*
Array.diff
===
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.
*/

const array_diff = (a, b) => a.filter(val => !b.includes(val));

console.log(array_diff([1, 2, 2, 2, 3], [2]));
