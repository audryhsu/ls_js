/*
problem: determine if triange is valid triange; classify triangles given length of three sides
input: integers, side lengths
- validate only three arguments
- if any are are < 1, its invalid
- only numbers
output: string
rule:
- triange: sum of lengths of two shortest sides > longest side
  - all sides > 0;
- equilateral - all three sides are same
- isosceles - two sides are equal, while thrid is differnet
- scalene - all three sides different
algo:
- isValidTriangle()
  - sort sides in an array from shortest to longest
  - add first two elements, compare to last
  - return boolean
ds:
*/

function triangle(...sides) {
  if (!validateInput(sides)) {
    console.log("invalid");
    return 'invalid';
  }
  sides.sort((a, b) => a - b);
  if (!isValidTriangle(sides)) return "invalid";

  console.log(sides);
  if (sides[0] === sides[1] && sides[1] === sides[2]) return "equilateral";
  else if (sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]) return "scalene";
  else {
    return "isosceles";
  }
  // switch (sides) {
  //   case (sides[0] === sides[1]) && (sides[1] === sides[2]):
  //     return "equilateral"
  //     break;
  //   case sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]:
  //     return "scalene"
  //     break;
  //   default:
  //     return "isosceles"
  // }
}


function isValidTriangle(sides) {
  if ((sides[0] + sides[1]) < sides[2]) return false;
  return true;
}

function validateInput(sides) {
  if (sides === '' || sides.length < 3 || sides.some(elem => Number.isNaN(elem)) || sides.includes(Infinity) || sides.some(elem => elem < 1) || sides.some(elem => typeof elem !== 'number')) {
    return false;
  }
  return true;
}

console.log(
  triangle(3, 3, 3) === 'equilateral',        // "equilateral"
  triangle(3, 3, 1.5) === 'isosceles',
  triangle(3, 4, 5) === "scalene",
  triangle(0, 3, 3) === "invalid",
  triangle(3, 1, 1) === "invalid",
  triangle(3, 1, 1, 2) === "invalid"
);
// console.log(
// triangle('3','3','3') === 'invalid',        // "invalid"
// triangle('') === 'invalid',        // "invalid"
// triangle(Infinity, 3,5) === 'invalid',     // "invalid"
// triangle(-Infinity, 3,5) === 'invalid',// "invalid"
// triangle(-4, 3,5) === 'invalid',
// triangle(NaN, 3,5) === 'invalid')
