// findTheNeedle.js  
// 8kyu - Find the needle in the haystack  
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

/*
P: An array containing various elements, including one string "needle"
R: A string indicating the position of "needle" in the array
E:
  findNeedle(["junk", "hay", "needle", "more junk"]) => "found the needle at position 2"
P:
  - Use .indexOf("needle") to find its index
  - Return a string using template literals
*/

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

