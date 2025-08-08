// sumMixedArray.js  
// 8kyu - Sum mixed array (strings and numbers)  
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

/*
P: An array of numbers and strings (e.g. [9, '3', '7', 2, '1'])
R: The total sum of the array as if all elements were numbers (returns a number)
E:
  sumMix([9, '3', '7', 2, '1']) => 22
  sumMix(['5', '0', 9, 3, 2, 1, '9']) => 29
P:
  - Use .reduce() to iterate and accumulate sum
  - Convert each element to a number with Number(val)
*/

function sumMix(x) {
  return x.reduce((acc, val) => acc + Number(val), 0);
}

