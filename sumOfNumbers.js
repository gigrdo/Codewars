// Kata: Beginner Series #3 Sum of Numbers
// Difficulty: 7kyu
// Link: https://www.codewars.com/kata/55f2b110f61eb01779000053

/*
Description:
Given two integers a and b (positive or negative), return the sum of all the numbers between and including them.
If the two numbers are equal, return a or b.

Examples:
getSum(1, 0) => 1
getSum(1, 2) => 3
getSum(0, 1) => 1
getSum(1, 1) => 1
getSum(-1, 0) => -1
getSum(-1, 2) => 2

Key Concepts:
Math.min(), Math.max(), for loop
*/

function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
