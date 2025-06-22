// findTheMiddleElement.js  
// 8kyu - Find the index of the middle value in a triplet  
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

/*
P: An array of 3 distinct numbers (e.g. [2, 3, 1])
R: The index of the number that is between the other two in value
E:
  gimme([2, 3, 1])    => 0  // 2 is between 1 and 3, and is at index 0
  gimme([5, 10, 14])  => 1  // 10 is between 5 and 14, and is at index 1
P:
  - Clone the array to avoid mutating the original
  - Sort the cloned array in ascending order
  - Get the middle value (sorted[1])
  - Return the index of that value in the original array
*/

function gimme(triplet) {
  const sorted = [...triplet].sort((a, b) => a - b); 
  const middle = sorted[1]; 
  return triplet.indexOf(middle);
}


//or
/*
function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

*/
