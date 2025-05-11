// Kata: Bouncing Balls
// Difficulty: 6kyu
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

/*
Description:
A child drops a ball from height `h` meters.
The ball bounces to a fraction of its height (`bounce`) and passes a window (`window`) on the way down and up.

We return the number of times the mother sees the ball pass in front of her window.

Return -1 if:
- h <= 0
- bounce <= 0 or >= 1
- window >= h
*/

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let count = 1;
  while ((h *= bounce) > window) count += 2;
  return count;
}

/*
Example:

bouncingBall(3, 0.66, 1.5) ➜ 3
Explanation:
  - First fall: seen once
  - First rebound: rises to 1.98 ➜ seen going up, then again going down
  → Total: 3
*/

