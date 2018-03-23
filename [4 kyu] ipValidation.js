/*
IP Validation
===

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

Input to the function is guaranteed to be a single string.
*/

function ipValidation(num) {
  const ipArr = num.split('.');
  if (ipArr.some(subSec => subSec[0] === 0)) {
    return false;
  } else if (ipArr.every(subSec => subSec > 0 && subSec <= 255)) {
    return true;
  }
  return false;
}
console.log(ipValidation('123.456.78.90'));
