/*
📌 Kata: Array.diff

🧠 Prompt:
Implement a function that removes all elements from array `a` that are present in array `b`.  
The order of elements in `a` must be preserved in the output.  
Do not modify the original arrays.

--------------------------------------------------

🧠 PREEP

🔹 Prompt:
Remove all elements from `a` that are in `b`.

🔹 Requirements:
- Input: two arrays of integers.
- Output: new array with elements from `a` that are not in `b`.
- Arrays can be empty. 
- Original order must be preserved.
- Do not mutate the original arrays.

🔹 Examples:
arrayDiff([1, 2], [1]) → [2]  
arrayDiff([1, 2, 2, 2, 3], [2]) → [1, 3]  
arrayDiff([], [1, 2]) → []  
arrayDiff([1, 2], []) → [1, 2]

🔹 Edge Cases:
- All values match → return []
- No values match → return a copy of original `a`
- Empty arrays
- (Assuming no negative numbers for this implementation)

🔹 Plan:
Use `filter()` on array `a` to return only elements not found in `b`.  
Check for existence using `!b.includes(element)` inside the filter callback.
*/

function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element));
}

