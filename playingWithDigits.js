// playingWithDigits.js
// 6kyu - Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050


/*
PREP

P – Point:
Given a number `n` and a starting power `p`, we must determine if the sum of the digits of `n`
raised to consecutive powers starting from `p` equals `k * n`. If such an integer `k` exists,
return it; otherwise, return -1.

R – Reason:
By iterating over the digits of `n` and raising each one to an increasing power starting from `p`,
we can compare the result to a multiple of `n`. This lets us check if there's a whole number `k`
such that the powered sum is divisible by `n`.

E – Example:
digPow(89, 1) => 1      // 8¹ + 9² = 89 → 89 * 1
digPow(92, 1) => -1     // 9¹ + 2² = 13 → not divisible by 92
digPow(695, 2) => 2     // 6² + 9³ + 5⁴ = 1390 → 695 * 2
digPow(46288, 3) => 51  // 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 → 46288 * 51

P – Point (again):
If the sum of powered digits equals k * n, we return k; otherwise, we return -1.
*/

function digPow(n, p){
  
  const digits = n.toString().split('').map(Number);
  
  const sum = digits.reduce((acc, digit, i) => acc + Math.pow(digit, p + i), 0);
  
  return sum % n === 0 ? sum / n : -1;
}

//or:
// function digPow(n, p) {
//   const digits = n.toString().split('').map(Number);
//   let sum = 0;

//   for (let i = 0; i < digits.length; i++) {
//     let potencia = p + i;
//     sum += Math.pow(digits[i], potencia);
//   }

//   return sum % n === 0 ? sum / n : -1;
// }
