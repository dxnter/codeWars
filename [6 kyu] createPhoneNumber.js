// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(numbers) {
  const [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10] = numbers;
  return `(${int1}${int2}${int3}) ${int4}${int5}${int6}-${int7}${int8}${int9}${int10}`;
}
