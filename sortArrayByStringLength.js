// Kata: Sort array by string length
// Difficulty: 7kyu 
// Link: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript


/*
Description:

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.


Examples:
  Input ➤ Expected Output
  ...
  For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]


Key Concepts: sort()

*/

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}


/*Test cases
const Test = require('@codewars/test-compat');

describe("Example tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });
});
*/