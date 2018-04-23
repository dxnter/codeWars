/*
Is this a triangle
===
Implement a method that accepts 3 integer values a, b, c.
The method should return true if a triangle can be built with the sides of given length and false in any other case.
*/

const isTriangle = (a, b, c) => {
  const longestSide = Math.max(...[a, b, c]);
  return longestSide < a + b + c - longestSide;
};

console.log(isTriangle(1, 2, 2));
