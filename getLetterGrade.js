// getLetterGrade.js  
// 8kyu - Return letter grade based on average score  
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

/*
P: Three separate integers (s1, s2, s3) representing scores
R: Return a letter grade based on the average:
     ≥ 90 → 'A'
     ≥ 80 → 'B'
     ≥ 70 → 'C'
     ≥ 60 → 'D'
     < 60 → 'F'
E:
  getGrade(95, 90, 93) => 'A'
  getGrade(70, 70, 70) => 'C'
P:
  - Calculate average: (s1 + s2 + s3) / 3
  - Return letter grade based on average
*/

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;

  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  return 'F';
}

