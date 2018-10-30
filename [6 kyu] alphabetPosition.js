// https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

function alphabetPosition(text) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .map(x => ALPHABET.indexOf(x) + 1)
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
