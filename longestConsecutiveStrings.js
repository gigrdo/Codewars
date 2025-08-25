// longestConsecutiveStrings.js  
// 6kyu - Longest Consecutive String  
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

/*
P: An array of strings and a number k
R: The longest string resulting from concatenating k consecutive strings in the array.
   Return the first one in case of tie. Return "" if k is invalid.
E:
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) 
    => "abigailtheta"
  longestConsec([], 3) => ""
  longestConsec(["a", "b", "c"], 0) => ""
P:
  - If k <= 0 or k > array length → return ""
  - Loop from i = 0 to arr.length - k
    - At each index, slice k elements and join them
    - If the result is longer than current longest, store it
  - Return longest
*/

function longestConsec(strarr, k) {
  if (k > strarr.length || k <= 0) return "";

  let longest = "";

  for (let i = 0; i <= strarr.length - k; i++) {
    const current = strarr.slice(i, i + k).join('');
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

