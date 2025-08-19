// reverseWordsInAString.js  
// 7kyu - Reverse words in a string (but not the word order)  
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

/*
P: A string with words separated by spaces
R: Return the same string, but with each word reversed (keep word order)
E:
  reverseWords("This is an example!") => "sihT si na !elpmaxe"
  reverseWords("double  spaces")      => "elbuod  secaps"
P:
  - Split string by spaces → array of words
  - For each word, split into chars, reverse, and join
  - Join words back together with spaces
*/

function reverseWords(str) {
  return str
    .split(' ')                 
    .map(word => word.split('').reverse().join(''))
    .join(' ');                 
}

