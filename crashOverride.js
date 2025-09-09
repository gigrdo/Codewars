// crashOverride.js  
// 8kyu - Generate hacker alias based on initials of name and surname  
// https://www.codewars.com/kata/53368a47e38700bd8300030d

/*
P: Two strings (first name and surname)
R: Return a hacker alias composed by matching the first letter of each name 
   with a word from the pre-defined objects.
   If either name doesn't start with a letter A–Z, return an error message.
E:
  aliasGen("Larry", "Brentwood") => "Logic Bomb"
  aliasGen("123abc", "Petrovic") => "Your name must start with a letter from A - Z."
P:
  - Get first char of each name, convert to uppercase
  - Check both are letters A–Z
  - Look up in firstName and surname objects
*/
function aliasGen(first, last) {
  const firstInitial = first[0].toUpperCase();
  const lastInitial = last[0].toUpperCase();

  if (!firstInitial.match(/[A-Z]/) || !lastInitial.match(/[A-Z]/)) {
    return "Your name must start with a letter from A - Z.";
  }

  return `${firstName[firstInitial]} ${surname[lastInitial]}`;
}
