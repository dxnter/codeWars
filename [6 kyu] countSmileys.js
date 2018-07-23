// https://www.codewars.com/kata/count-the-smiley-faces/train/javascript

function countSmileys(arr) {
  return arr.filter(x => /[:?;?][-?~?]?[)?D?]/gi.test(x)).length;
}
