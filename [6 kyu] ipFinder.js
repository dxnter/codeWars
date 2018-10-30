function f(str) {
  const asciiSum = Array.from(str.slice(4, str.length - 4))
    .map(c => c.charCodeAt(0))
    .reduce((a, b) => a + b, 0);
  return [asciiSum % 256, (asciiSum * 2) % 256, (asciiSum * 3) % 256, (asciiSum * 4) % 256];
}

console.log(f('www.codewars.com'));
// [88, 176, 8, 96]
