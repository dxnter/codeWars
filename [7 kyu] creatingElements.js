/*
Creating Elements with React
===
https://www.codewars.com/kata/creating-elements-with-react
*/

function createElement(content, tag = 'div', properties = {}) {
  return `<${tag}>${content}</${tag}>`;
}

const createUnorderedList = list => `
    <ul>
      ${list.map(element => `<li>${element}</li>`).join('')}
    </ul>
  `;
