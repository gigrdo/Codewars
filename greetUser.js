// greetUser.js  
// 8kyu - Greet user with dynamic message using template literals  
// https://www.codewars.com/kata/55a70521798b14d4750000a4

/*
P: A string representing a user's name
R: Return a greeting message: "Hello, <name> how are you doing today?"
E:
  greet("Gi") => "Hello, Gi how are you doing today?"
P:
  - Use template literals to insert the name into the string
*/

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}


