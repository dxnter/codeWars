/*
Valid Braces
===
https://www.codewars.com/kata/valid-braces/javascript
*/

const validBraces = braces => {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];

  for (let i = 0; i < braces.length; ++i)
    if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') stack.push(braces[i]);
    else if (stack[stack.length - 1] === pairs[braces[i]]) stack.pop();
    else return false;

  return stack.length === 0;
};

console.log(validBraces('({})]('));
