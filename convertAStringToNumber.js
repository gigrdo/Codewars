/*DESCRIPTION:

Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples

"1234" --> 1234 "605" --> 605 "1405" --> 1405 "-7" --> -7
*/

//SOLUTION:

const stringToNumber = function(str){
  // put your code here
  
  return (Number(str))
}

//Using parseInt:

// const stringToNumber = function(str){
//   // put your code here
  
//   return (parseInt(str))
// }

//Using parseFloat:

// const stringToNumber = function(str){
//   // put your code here
  
//   return (parseFloat(str))
// }

//using the unary plus operator:

// const stringToNumber = function(str){
//   // put your code here
  
//   return (+str)
// }

// by multiplying the string by the number 1:

// const stringToNumber = function(str){
//   // put your code here
  
//   return (str * 1)
// }

// //  by dividing the string by the number 1:
// const stringToNumber = function(str){
//   // put your code here
  
//   return (str / 1)
// }

//by subtracting the number 0 from the string:

// const stringToNumber = function(str){
//   // put your code here
  
//   return (str - 0)
// }

 //using the bitwise NOT operator:
// const stringToNumber = function(str){
//   // put your code here
  
//   return (~~str)
// }

//using the Math.floor() function

// const stringToNumber = function(str){
//   // put your code here
  
//   return (Math.floor(str))
// }