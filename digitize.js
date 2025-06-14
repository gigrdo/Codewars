/*
Kata: Convert number to reversed array of digits
Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
Level: 8kyu

Task:
Given a non-negative integer, return an array containing the digits in reverse order.

Examples:
35231 ➞ [1,3,2,5,3]
0 ➞ [0]

Concepts:
- String conversion
- .split()
- .reverse()
- .map(Number)
*/

function digitize(n) {
return String(n).split('').reverse().map(Number);
}

