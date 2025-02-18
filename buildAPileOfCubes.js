/*
Build a pile of Cubes

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
n^3, the cube above will have volume of (n−1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3+(n−1)^3+(n−2)^3+...+1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

*/

//solution:

function findNb(m) {
  let n = 0;              // Start with 0 cubes
  let totalVolume = 0;    // Total volume of cubes
  
  // Keep adding cubes until the total volume reaches or exceeds m
  while (totalVolume < m) {
    n++;                   // Increase the count of cubes by 1
    totalVolume += n ** 3; // Add the volume of the current cube (n³)
  }
  
  // If the total volume matches m exactly, return n; otherwise, no valid n exists, so return -1
  return totalVolume === m ? n : -1;
}

/*
without short-hand: 

function findNb(m) {
  let n = 0;
  let totalVolume = 0;
  
  while (totalVolume < m) {
    n = n + 1;               
    totalVolume = totalVolume + (n ** 3);
  }
  
  if (totalVolume === m) {
    return n;
  } else {
    return -1;
  }
}
*/