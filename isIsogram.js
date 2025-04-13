// Kata: isIsogram
// Difficulty: 7kyu 
// Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1


/*
Description:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples:
  "Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

/*
Key Concepts:

Set

*/


function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length
}


/*
// Test cases
const { assert, config } = require("chai");
config.truncateThreshold = 0;
const _ = require("lodash");

describe("isIsogram", function() {
  
  const tester = (input, expected, msg) => {
    assert.strictEqual(isIsogram(input), expected, `Failed for input: "${input}"\n${msg ?? ""}`);
  };
  
  
  it("Testing for fixed tests", function() {
    tester("Dermatoglyphics", true );
    tester("isogram", true);
    tester("moose", false);
    tester("isIsogram", false);
    tester("aba", false);
    tester("moOse", false);
    tester("thumbscrewjapingly", true);
    tester("", true);
    tester("abcdefghijklmnopqrstuvwxyz", true);
    tester("ABCDEFGHIJKLMNOPQRSTUVWXYZ", true);
    tester("abcdefghijklmnopqrstuvwxyz" + 'z', false);
    tester("abcdefghijklmnopqrstuvwxyz" + 'Z', false);
  });
     
  
  it("Random tests", function() {
    const lowers = "abcdefghijklmnopqrstuvwxyz";

    const generate_test = (expected) => {
      const len = _.random(3, lowers.length);
      let str = _.sampleSize(lowers, len).join('');
      const char = expected ? "" : _.sample(str);
      str += char;
      str = str.replaceAll(/[a-z]/g, m => _.random(0, 1) ? m.toLowerCase() : m.toUpperCase());
      
      const msg = expected ? "" : `There are 2 '${char}/${char.toUpperCase()}'!\n`;
      
      return [_.shuffle(str).join(''), expected, msg];
    }
    
    let cases = [];
    
    for (let i = 0; i < 100; ++i) {
      cases.push(generate_test(false));
      cases.push(generate_test(true));
    }
    
    _.shuffle(cases).forEach(c => {
      tester(c[0], c[1], c[2]);
    });
    
  });
});

*/