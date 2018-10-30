// https://www.codewars.com/kata/highest-scoring-word

function high(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const words = sentence.split(' ');
  const wordScores = words.map(word =>
    word
      .split('')
      .map(letter => alphabet.indexOf(letter) + 1)
      .reduce((sum, val) => sum + val)
  );

  return words[wordScores.indexOf(Math.max(...wordScores))];
}
