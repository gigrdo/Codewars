// nameShuffler.js  
// 8kyu - Swap first and last name  
// https://www.codewars.com/kata/559ac78160f0be07c200005a

/*
P: A string containing a full name (e.g. "John Doe")
R: The name with first and last name reversed ("Doe John")
E:
  nameShuffler("John Doe")       => "Doe John"
  nameShuffler("Jane Mary")      => "Mary Jane"
P:
  - Split the string by space to get an array of names
  - Reverse the array
  - Join it back into a string with a space
*/

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}

