/*
Convert boolean values to strings 'Yes' or 'No'
===

Complete the bool_to_word (PHP: boolToWord ) method.

Given: a boolean value

Return: a 'Yes' string for true and a 'No' string for false
*/

const boolToWord = bool => (bool ? 'Yes' : 'No');

console.log(boolToWord(false)); // No
