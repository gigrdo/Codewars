// Kata: Two Sum
// Difficulty: 6kyu
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

/*
Description:
Given an array of numbers and a target number, 
find two distinct elements in the array that add up to the target.
Return their indices in an array [index1, index2].

Any valid solution is accepted.
*/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

/*
Examples:
twoSum([1, 2, 3], 4) ➜ [0, 2]
twoSum([3, 2, 4], 6) ➜ [1, 2]
*/

