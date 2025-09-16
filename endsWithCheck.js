// endsWithCheck.js  
// 7kyu - Check if string ends with given substring  
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

/*
P: Two strings - one full string, one ending
R: Return true if the full string ends with the given ending
E:
  solution("abc", "bc") => true
  solution("abc", "d")  => false
P:
  - Use .endsWith() to compare suffix of string
*/

function solution(str, ending) {
  return str.endsWith(ending);
}

