//Persistent Bugger
/*
Description

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/
//SOLUTION

function persistence(num) {
  let counter = 0;
  
  // Continue looping until num is a single digit
  while (num >= 10) {
    // Convert the number to a string, split into individual characters,
    // map each character back to a number, and then multiply them all together.
    num = num.toString()
             .split('')
             .map(Number)
             .reduce((a, b) => a * b);
    counter++; // Increase the counter for each multiplication step
  }
  
  return counter;
}