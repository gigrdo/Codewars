// sortNumbers.js  
// 8kyu - Sort numbers safely (handles null or empty array)  
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

/*
P: An array of numbers, or possibly null (or empty)
R: A new array with numbers sorted in ascending order, or an empty array if input is null/empty
E:
  solution([1, 2, 10, 50, 5]) => [1, 2, 5, 10, 50]
  solution(null)             => []
  solution([])               => []
P:
  - Check if input is null → return []
  - Otherwise, clone the array to avoid mutation
  - Sort using (a, b) => a - b for numeric sort
*/

function solution(nums) {
  return nums === null ? [] : [...nums].sort((a, b) => a - b);
}


