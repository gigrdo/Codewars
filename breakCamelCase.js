// Kata: Break camelCase
// Difficulty: 6kyu
// Link: https://www.codewars.com/kata/5208f99aee097e6552000148

/*
🧠 Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Examples:
  "camelCasing"   ➤ "camel Casing"
  "identifier"    ➤ "identifier"
  ""              ➤ ""
  "getHTTPCode"   ➤ "get H T T P Code"
*/

/*
📌 Key Concepts:
- Regex lookahead: `/(?=[A-Z])/g` allows inserting a space *before* any uppercase letter
- Non-capturing: the lookahead checks for the pattern without consuming it
- Clean way to split camelCase strings without altering original casing
*/

function solution(string) {
  return string.replace(/(?=[A-Z])/g, " ");
}

// ✅ Test cases
console.log(solution("camelCasing"));    // ➤ "camel Casing"
console.log(solution("identifier"));     // ➤ "identifier"
console.log(solution(""));               // ➤ ""
console.log(solution("getHTTPCode"));    // ➤ "get H T T P Code"
