/*
The Hashtag Generator
===
The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

    If the final result is longer than 140 chars it must return false.
    If the input is a empty string it must return false.
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
*/

const generateHashtag = str => {
  if (str.length > 140 || !str) return false;
  return `#${str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join('')}`;
};

console.log(generateHashtag('Hello World'));
