// Kata: Remove String Spaces
// Difficulty: 8kyu
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

/*
Description:
Write a function that removes all spaces from a string.
*/

function noSpace(x){
  return x.replace(/\s/g, '');
}

/*
Examples:
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B") ➜ "8j8mBliB8gimjB8B8jlB"
noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd") ➜ "88Bifk8hB8BB8BBBB888chl8BhBfd"
*/

