/*
Strip Comments
===
https://www.codewars.com/kata/strip-comments
*/

const solution = (input, markers) =>
  input
    .split('\n')
    .map(sentence => {
      const commentMarker = markers.find(marker => sentence.includes(marker));
      if (commentMarker) {
        return sentence.slice(0, sentence.indexOf(commentMarker)).trim();
      }
      return sentence.trim();
    })
    .join('\n');

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
