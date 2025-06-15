// Kata: Categorize New Member
// Level: 7 kyu
// Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
// Description: The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// Input: an array of pairs [age, handicap]
// Output: an array with the corresponding category for each member

function openOrSenior(data){
  return data.map(([age, handicap]) => {
    return (age >= 55 && handicap > 7) ? 'Senior' : 'Open'
  })
}

