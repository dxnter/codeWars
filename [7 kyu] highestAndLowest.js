/*
Highest and Lowest
===

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

const highAndLow = num => {
  const arr = num.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

console.log(highAndLow('1 2 3 4 5'));
