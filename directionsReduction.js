// Kata: Directions Reduction
// Difficulty: 5kyu
// Link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

/*
Description:
Given an array of directions ("NORTH", "SOUTH", "EAST", "WEST"), 
return a new array with all opposite directions cancelled out.

For example: 
["NORTH", "SOUTH", "EAST", "WEST"] => []
["NORTH", "WEST", "SOUTH", "EAST"] => ["NORTH", "WEST", "SOUTH", "EAST"]
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]

A direction will be cancelled if its opposite appears directly before it 
(in the final path). Use a stack to compare current and last direction.

Key Concepts:
Stack, object lookup, opposite direction matching
*/

function dirReduc(arr) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  }

  const stack = []

  for (let i = 0; i < arr.length; i++) {
    if (stack.length && opposites[arr[i]] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }

  return stack
}

/*
Test cases (in Codewars):

dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]) ➞ []
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) ➞ ["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) ➞ ["WEST"]
*/
