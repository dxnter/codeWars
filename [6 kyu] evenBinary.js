/*
Even Binary Sorting
===

Given a string of binary numbers of length 3 sort the numbers in ascending order
but only order the even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") //returns "101 111 010 001 100"
Note: make sure all the binary numbers have a length of 3
*/
function evenBinary(n) {
  const oddArr = n
    .split(' ')
    .filter(num => num.length === 3)
    .map(Number)
    .filter(num => num % 2)
    .sort((a, b) => a > b);

  function replace(num) {
    if (num % 2 !== 0) {
      return oddArr.shift();
    }
  }
}

console.log(evenBinary('101 111 100 001 010'));
