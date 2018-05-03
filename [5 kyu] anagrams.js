const anagrams = (word, words) => words.filter(test => test.split('').every(letter => word.includes(letter)));

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));
