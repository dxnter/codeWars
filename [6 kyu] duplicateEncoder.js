/*
Duplicate Encoder
===
The goal of this exercise is to convert a string to a new string where each character
in the new string is '(' if that character appears only once in the original string, or ')'
if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/

const duplicateEncode = str => {
  const strArr = str.toUpperCase().split('');
  strArr.forEach(character => {
    if (strArr.includes(character)) {
      console.log(character);
    }
  });
};

console.log(duplicateEncode('recede')); // "()()()"
