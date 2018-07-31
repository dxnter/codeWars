// https://www.codewars.com/kata/bubblesort-once

function bubblesortOnce(intArr) {
  for (let i = 0; i < intArr.length - 1; i++) {
    const x = intArr[i];
    const y = intArr[i + 1];
    if (x > y) {
      intArr[i] = y;
      intArr[i + 1] = x;
    }
  }
  return intArr;
}
