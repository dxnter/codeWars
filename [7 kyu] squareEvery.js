// https://www.codewars.com/kata/square-every-digit

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(Number)
      .map(x => x * x)
      .join('')
  );
}
