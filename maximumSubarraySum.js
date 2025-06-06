// Kata: Maximum subarray sum (Kadane’s algorithm)
// Difficulty: 5kyu
// Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

/*
Description:
The maximum sum subarray problem consists in finding the maximum sum 
of a contiguous subsequence in an array or list of integers.

If the array is empty or all values are negative, return 0.

Example:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -> 6

Key Concepts:
Kadane’s algorithm, dynamic programming, greedy, subarray, sliding window
*/

var maxSequence = function(arr) {
  let currentSum = 0 // keeps track of the current subarray’s total
  let maxSum = 0     // stores the highest sum found so far

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i] // add the current number to the running total

    if (currentSum > maxSum) {
      maxSum = currentSum // update maxSum if the new total is higher
    }

    if (currentSum < 0) {
      currentSum = 0 // reset currentSum if it drops below zero
    }
  }

  return maxSum
}
