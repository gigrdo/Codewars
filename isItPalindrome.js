// Kata: Is it a palindrome?
// Difficulty: 8kyu
// Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

/*
Description:
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards.

Examples:
isPalindrome("madam") ➞ true
isPalindrome("Racecar") ➞ true
isPalindrome("hello") ➞ false
*/

// Solution:
function isPalindrome(x){
  const cleanX = x.toLowerCase();
  const reverse = cleanX.split('').reverse().join('');
  return cleanX === reverse;
}

/*
Alternative Solution (with RegEx - extended version):
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleanStr === cleanStr.split('').reverse().join('')
}
*/

/*
Test cases:
console.log(isPalindrome("madam")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("Racecar")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true (only with regex version)
*/

