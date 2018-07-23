// https://www.codewars.com/kata/who-likes-it

function likes(names) {
  const [nameOne, nameTwo, nameThree, ...rest] = names;
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${nameOne} likes this`;
  if (names.length === 2) return `${nameOne} and ${nameTwo} like this`;
  if (names.length === 3) return `${nameOne}, ${nameTwo} and ${nameThree} like this`;
  return `${nameOne}, ${nameTwo} and ${rest.length + 1} others like this`;
}
