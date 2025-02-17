/*
DESCRIPTION:

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

//SOLUTION

function opposite(...number) {
  for(let i = 0; i < number.length; i++){
    if(number = -number){
      return number
    }else{
      return -number
    }
  }
  
}