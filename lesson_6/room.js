// Requirements:
// - get input from user
// - length and width in meters
// - calculate area in square meeters
// - calculate area in square feet

var readline = require('readline-sync');

function toSquareFeet(squareMeters) {
  return squareMeters * 10.7639;
}

let length = parseInt(readline.question('Enter the length of the room in meters:'));
let width = readline.question('Enter the width of the room in meters:');

let area = length * width;

console.log(`The area of the room is ${area} square meters (${toSquareFeet(area)} square feet).`);
