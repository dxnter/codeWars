function makePassword(phrase) {
  const firstLetters = phrase.split(' ').reduce((acc, word) => acc + word[0], '');
  return firstLetters
    .replace(/i/gi, 1)
    .replace(/o/gi, 0)
    .replace(/s/gi, 5);
}