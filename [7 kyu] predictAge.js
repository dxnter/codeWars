// https://www.codewars.com/kata/predict-your-age

function predictAge(...ages) {
  return Math.floor(Math.sqrt(ages.map(i => i * i).reduce((x, y) => x + y)) / 2);
}
