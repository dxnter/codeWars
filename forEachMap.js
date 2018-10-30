function stringReverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

console.log(stringReverse('Danny'));

function chars(string) {
  return string
    .toLowerCase()
    .match(/[a-zA-Z]+/g)
    .join('');
}

function palindrome(string) {
  return (
    chars(string)
      .split('')
      .reverse()
      .join('') === chars(string)
  );
}

console.log(palindrome('Cigar? Toss it in a can. It is so tragic'));

const integerReversal = int =>
  Number(
    int
      .toString()
      .split('')
      .reverse()
      .join('')
  ) * Math.sign(int);

console.log(integerReversal(1234));

const maxCharacter = string => {
  const characters = {};

  for (const character of string) {
    characters[character] = character[character] + 1 || 1;
  }

  const maxCharacter = null;
  const maxOccurances = 0;

  console.log(characters);
};

console.log(maxCharacter('aaaabcc'));

const duplicate = arr => [...arr, ...arr];

console.log(duplicate([1, 2, 3, 4, 5]));
