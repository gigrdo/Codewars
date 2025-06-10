// Kata: Convert string to camel case
// Link: https://www.codewars.com/kata/517abf86da9663f1d2000003
// Kyu: 6kyu

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
