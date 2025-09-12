// removeUrlAnchor.js  
// 8kyu - Remove anchor from URL  
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

/*
P: A URL string (may or may not contain "#")
R: Return the URL without anything after the "#" (including the "#")
E:
  removeUrlAnchor("www.codewars.com#about")       => "www.codewars.com"
  removeUrlAnchor("www.codewars.com?page=1")      => "www.codewars.com?page=1"
P:
  - Use .split('#') to break the string at the anchor
  - Return the first part before the '#'
*/

function removeUrlAnchor(url){
  return url.split('#')[0];
}

