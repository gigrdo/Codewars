// Kata: Reverse List Order
// Difficulty: 8kyu
// Link: https://www.codewars.com/kata/53da74d6ce58927594000071
// My solution:

function reverseList(list) {
  return list.reverse()
}


//better (non-mutating) version:

function reverseList(list) {
  return [...list].reverse()
}
