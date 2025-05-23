//Count the divisors of a number
/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
//SOLUTION

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++; // Count `i`
      if (i !== n / i) count++; // Count `n / i` if it's different
    }
  }

  return count;
}

//or
/*
function getDivisorsCnt(n) {
  let count = 0; // Initialize a counter for divisors

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) { // Check if `i` is a divisor of `n`
      count++; // Increment divisor count
    }
  }

  return count; // Return the total number of divisors
}
*/