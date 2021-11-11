
//input: three arguments that represent the sides of a triangle
//output: a string represents triangle classification - 4
//rule: equilateral - equal lengths, isosceles - two sides same, scalene - all three sides are different
// to be a valid triangle:
  // shortest side is greater than 0
  // sum of two shortest sides must be greater than longest side
//algo:
  // determine if valid triangle using two rules above
  // evaluate which type of triangle

function triangle(x, y, z) {
  let sides = [x,y,z].sort();
  if (sides[0] + sides[1] < sides[2]) return "Invalid";
  else if (sides[0] < 1) return "Invalid";
  else if (sides[0] === sides[1] && sides[0] === sides[2]) return "equilateral";
  else if (sides[0] === sides[1] && sides[0] !== sides[2]) return "isosceles";
  else if (sides[0] === sides[2] && sides[0] !== sides[1]) return "isosceles";
  else if (sides[1] === sides[2] && sides[0] !== sides[1]) return "isosceles";
  else {
    return "scalene";
  }

}

let result = triangle(3, 3, 3);        // "equilateral"
console.log(result);
result = triangle(3, 3, 1.5);      // "isosceles"
console.log(result);
result = triangle(3, 4, 5);        // "scalene"
console.log(result);
result = triangle(0, 3, 3);        // "invalid"
console.log(result);
result = triangle(3, 1, 1);        // "invalid"
console.log(result);
