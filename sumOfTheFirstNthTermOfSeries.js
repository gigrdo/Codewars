/*
Task

Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

Series:1+14+17+110+113+116+…Series:1+41​+71​+101​+131​+161​+…

You will need to figure out the rule of the series to complete this.

Rules

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)

n 1 --> 1 --> "1.00" 2 --> 1 + 1/4 --> "1.25" 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n) {

  // Happy Coding ^_^

  if (n === 0) return "0.00"; // If n is 0, return 0.00 immediately

  let sum = 1 //// Start with the first term, which is always 1

  for (let i = 2; i <= n; i++){ // Loop from k = 2 to n

    let denominator = 1 + 3 * (i - 1);// Calculate the denominator based on the formula 1 + 3(k - 1) Maths baby :)//

    sum += 1 / denominator; // Add the fraction to the sum

  }

  return sum.toFixed(2); // Round the result to 2 decimal places and return as a string

}

/*

Solution without mathematical formula for arithmetic progression:

function seriesSum(n) {

  if (n === 0) return "0.00"; // If n is 0, return 0.00 immediately

  

  let sum = 1; // Start with the first term, which is always 1

  let denominator = 1; // Initialize the denominator to 1

  for (let i = 2; i <= n; i++) { 

    denominator += 3; // Increment the denominator by 3 in each iteration

    sum += 1 / denominator; // Add the fraction to the sum

  }

  return sum.toFixed(2); // Round the result to 2 decimal places and return as a string

} 

*/