// https://www.codewars.com/kata/letterbox-paint-squad

function paintLetterboxes(start, end) {
  const letterBoxes = [];
  for (let i = start; i <= end; i++) {
    letterBoxes.push(i);
  }
  const intOccurances = Array.from(letterBoxes.join(""));

  const frequency = [];
  for (i = 0; i < 10; i++) {
    frequency.push(intOccurances.filter(number => number == i).length);
  }
  return frequency;
}
