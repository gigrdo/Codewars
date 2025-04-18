// Kata: Function 2 - squaring an argument
// Difficulty: 8kyu 
// Link: https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript


/*
Description:
Now you have to write a function that takes an argument and returns the square of it.



Key Concepts:
Square a number
*/

function square(num){
  return num * num;
}


/*
Test cases

const { assert } = require('chai');
const _ = require('lodash');

describe( "Testing square", function(){
  it( "Should return 10 squares correctly", function(){
    for ( let i=0; i<10; i++ ){
      let x = _.random(1, 100);
      assert.strictEqual( square( x ), x * x, `Incorrect answer for x=${x}` );
    }
  });
});
*/