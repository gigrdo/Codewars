// Kata: Descending Order
// Difficulty: 7kyu
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

/*
Description:
Take a non-negative integer and return it with its digits in descending order.
Rearrange the digits to create the highest possible number.

Examples:
descendingOrder(42145) ➜ 54421
descendingOrder(145263) ➜ 654321
descendingOrder(123456789) ➜ 987654321
*/

function descendingOrder(n) {
  return Number(
    String(n)
      .split('')
      .sort()
      .reverse()
      .join('')
  );
}

