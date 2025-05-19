// Kata: Alternating Case
// Difficulty: 8kyu
// https://www.codewars.com/kata/56efc695740d30f963000557

/*
Description:
Each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

Examples:
"hello WORLD" ➜ "HELLO world"
"12345" ➜ "12345" (non-letters stay unchanged)
*/

String.prototype.toAlternatingCase = function () {
  return String(this)
    .split('')
    .map(function(char) {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join('');
};

