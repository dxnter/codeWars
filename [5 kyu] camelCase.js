/*
Convert string to camel case
===
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
*/
/**
 * // returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
 */

const toCamelCase = str => {
  let strArr = [];
  if (str.includes('-')) {
    strArr = str.split('-');
    if (strArr[0].charAt(0) === strArr[0].charAt(0).toUpperCase()) {
      return console.log('it works');
    }
  } else if (str.includes('_')) {
  }
};

console.log(toCamelCase('The-Stealth-Warrior'));
