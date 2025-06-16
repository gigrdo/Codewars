// Kata: Friend or Foe?
// Level: 7 kyu
// Link: https://www.codewars.com/kata/55b42574ff091733d900002f
// Description: Make a program that filters a list of strings and returns a list with only your friends name in it.
// A friend has exactly 4 letters in their name. Keep original order.

function friend(friends){
  return friends.filter(str => str.length === 4);
}

