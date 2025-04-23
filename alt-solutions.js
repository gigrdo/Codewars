// ───────────────────────────────
// 🧠 ALT SOLUTIONS VAULT
// ───────────────────────────────
// This file collects alternative solutions, one-liners, and creative variations
// for katas already solved. It's a space to experiment, optimize, and track growth.

// ───────────────────────────────
// Kata: Remove the minimum (7kyu)
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// ───────────────────────────────

// ✅ Primary version used in the main repo:
function removeSmallest(numbers) {
  const i = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, idx) => idx !== i);
}

// 🌀 Alternative 1: slice + concat version
function removeSmallest_alt1(numbers) {
  const i = numbers.indexOf(Math.min(...numbers));
  return numbers.slice(0, i).concat(numbers.slice(i + 1));
}

// ⚡ Alternative 2: one-liner version
const removeSmallest_alt2 = numbers =>
  numbers.slice(0, numbers.indexOf(Math.min(...numbers)))
         .concat(numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1));

