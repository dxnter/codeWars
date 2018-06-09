// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/javascript

String.prototype.toAlternatingCase = function() {
  return this.split("")
    .map(
      char =>
        char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
};
