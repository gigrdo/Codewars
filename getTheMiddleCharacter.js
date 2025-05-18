// Kata: Get the Middle Character
// Difficulty: 7kyu
// https://www.codewars.com/kata/56747fd5cb988479af000028

/*
Description:
Return the middle character(s) of a string.
If the length is odd, return 1 char.
If even, return 2 chars.
*/

function getMiddle(s) {
  let length = s.length;
  let midIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return s.substring(midIndex - 1, midIndex + 1);
  } else {
    return s[midIndex];
  }
}

/*
Examples:
getMiddle("test") ➜ "es"
getMiddle("testing") ➜ "t"
getMiddle("middle") ➜ "dd"
getMiddle("A") ➜ "A"
*/

