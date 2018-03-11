/*
Even or Odd
===

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

const evenOrOdd = x => (x & 1 ? 'Odd' : 'Even');

console.log(evenOrOdd(-23)); // Odd
