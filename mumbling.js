// Kata: Mumbling
// Difficulty: 7kyu
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

/*
Description:
Write a function that takes a string and returns it in the 'mumbling' pattern:
Each letter is repeated based on its position in the string, starting with uppercase.

Example:
"abcd" ➜ "A-Bb-Ccc-Dddd"
*/

function accum(s) {
  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}

/*
Examples:
accum("abcd") ➜ "A-Bb-Ccc-Dddd"
accum("RqaEzty") ➜ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
*/

