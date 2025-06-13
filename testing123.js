/*
Kata: Testing 1-2-3
Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
Level: 7kyu

Task:
Write a function that takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. Format: "n: string"

Examples:
[] ➞ []
["a", "b", "c"] ➞ ["1: a", "2: b", "3: c"]

Concepts:
- for loop
- .map() with index
- template literals
*/
// FIRST VERSION (using for loop)
var number = function(array){
  const numberedStrings = []
  for (let i = 0; i < array.length; i++) {
    numberedStrings.push(`${i + 1}: ${array[i]}`)
  }
  return numberedStrings
}

// SECOND VERSION (using map)
var number = function(array){
  return array.map((el, i) => `${i + 1}: ${el}`)
}
