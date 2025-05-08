// Kata: Counting sheep...
// Difficulty: 8kyu
// https://www.codewars.com/kata/54edbc7200b811e956000556

/*
Description:
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).

Don't forget to check for bad values like null/undefined.
*/

function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

/*
Test cases:

countSheeps([true,  true,  true,  false,
             true,  true,  true,  true,
             true,  false, true,  false,
             true,  false, false, true,
             true,  true,  true,  true,
             false, false, true,  true]) // → 17
*/

