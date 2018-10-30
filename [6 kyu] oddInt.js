// https://www.codewars.com/kata/find-the-odd-int/train/javascript

function findOdd(A) {
  const occurances = {};
  A.forEach(int => {
    occurances[int] = occurances[int] + 1 || 1;
  });
  return Object.entries(occurances).filter(x => x[1] % 2 !== 0)[0][1];
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
