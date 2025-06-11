// extractTheDomainNameFromAUrl.js
// 5kyu - Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b

/*
P: A string representing a full URL (e.g. with protocol and www)
R: A string with only the domain name (no www, http(s), etc.)
E: 
  "http://github.com/carbonfive/raygun" -> "github"
  "http://www.zombie-bites.com"         -> "zombie-bites"
  "https://www.cnet.com"                -> "cnet"
P: 
  - Remove protocol with .replace()
  - Remove 'www.' if present
  - Split at '.' and return first part
*/

function domainName(url){
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0]
}
