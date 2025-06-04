// Kata: Anagram Detection?
// Difficulty: 7kyu
// Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

/*
Description:
An anagram is the result of rearranging the letters of a word to produce a new word.
Return true if the two arguments given are anagrams of each other.

Examples:
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

// Solution (on):
var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') ===
         original.toLowerCase().split('').sort().join('');
};

// Alternative solution (off):
/*
var isAnagram = function(test, original) {
  const sortedTest = test.toLowerCase().split('').sort().join('');
  const sortedOriginal = original.toLowerCase().split('').sort().join('');
  return sortedTest === sortedOriginal;
};
*/

/*
Test cases:

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
*/
