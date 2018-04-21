/*
Convert string to camel case
===
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized.
*/
/**
 * // returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
 */

const toCamelCase = str => {
  let splitSeparator = '';
  if (str.includes('-')) splitSeparator = '-';
  if (str.includes('_')) splitSeparator = '_';

  return str
    .split(splitSeparator)
    .map((word, index) => {
      if (index === 0 || word.charAt(0) === word.charAt(0).toUpperCase()) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join('');
};

console.log(toCamelCase(''));
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('the-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));
