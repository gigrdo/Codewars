// Kata: Remove the minimum
// Difficulty: 7kyu 
// Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript


/*
Description:
The museum of incredibly dull things

The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

Key Concepts:


*/


function removeSmallest(numbers) {
  const i = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, idx) => idx !== i);
}




/*
Test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("removeSmallest", function() {
  it("works for the examples", function() {
    assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
  });  
  
  it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      assert.deepEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });
  
  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }
  
  it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      if (Math.random() < 0.5) arr[~~(Math.random() * arr.length)] = Math.min(...arr);
      let l = arr.length;
      assert.deepEqual(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });

  it("check for mutations to original array/list", function() {
    let a = randomArray(~~(Math.random() * 18) + 2); // generates the array
    let b = a.slice(); // makes a swallow copy
    removeSmallest(a); // uses the original array with the function
    assert.deepEqual(a, b, "You've mutated input array/list (expectation assertion is on value of input array, not output of method)"); // test the arrays match
  });
  
  it("works for random lists", function() {
    function solution(numbers) {
      numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
      return numbers;
    }
    
    for(let i = 0; i < 20; ++i) {
      let arr = randomArray(~~(Math.random() * 20));
      assert.deepEqual(removeSmallest(arr.slice()), solution(arr.slice()), `Wrong result for ${arr}`);
    }
  });
});
*/