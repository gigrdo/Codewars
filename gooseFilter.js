// gooseFilter.js  
// 8kyu - Filter out geese from bird list  
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

/*
P: An array of bird names (strings)
R: A new array with all geese removed
E:
  gooseFilter(["Mallard", "Hook Bill", "African", "Crested"]) 
    => ["Mallard", "Hook Bill", "Crested"]
P:
  - Use .filter() to keep only birds that are not in the geese list
*/

function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
}

