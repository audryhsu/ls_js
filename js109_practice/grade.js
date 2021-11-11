// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.
//
// Numerical score letter grade list:
//
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// input - three postiive integers less than 100
// return - letter grade
// calculate mean of three input numbers
  // sum all three numbers -- reduce? then divide by three
// map the score to the rules list and return string letter

function getGrade(score1, score2, score3) {
  let scores = [score1, score2, score3];
  let score = scores.reduce((accum, current) => accum + current) / 3;
  console.log(score);
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  if (score < 60) return 'F';

}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 50));    // "D"
