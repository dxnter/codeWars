function skiJump(mountain) {
  const speed = mountain.length * 1.5;
  const jumpLength = ((mountain.length * speed * 9) / 10).toFixed(2);
  if (jumpLength < 10) return `${jumpLength} metres: He's crap!`;
  if (jumpLength > 10 && jumpLength < 25) return `${jumpLength} metres: He's ok!`;
  if (jumpLength > 10 && jumpLength < 50) return `${jumpLength} metres: He's flying!`;
  if (jumpLength > 50) return `${jumpLength} metres: Gold!!`;
}

console.log(skiJump(['*']));
console.log(skiJump(['*', '**', '***']));
console.log(skiJump(['*', '**', '***', '****', '*****', '******']));
console.log(skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']));
