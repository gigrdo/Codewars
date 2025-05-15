// Kata: Is the string uppercase?
// Difficulty: 8kyu
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

/*
Description:
Add an isUpperCase() method to the String prototype.
Return true if the string contains no lowercase letters.
An empty string or strings without letters are considered uppercase.
*/

String.prototype.isUpperCase = function() {
  return String(this) === this.toUpperCase();
}

/*
Examples:
"HELLO".isUpperCase() ➜ true
"Hello".isUpperCase() ➜ false
"123!".isUpperCase()  ➜ true
"".isUpperCase()      ➜ true
*/

