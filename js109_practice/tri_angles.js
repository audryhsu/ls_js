//input: three angels of triangle
//output: triangle classification
//rule: exactly one right angle = right;
// all three angles less than 90 == acute
// one angle is greater than 90 == obtuse
// must also sum to be exactly 180 degrees, and all angles > 0
//algo:

function triangle(x, y, z) {
  let angles = [x, y, z];
  let sum = x + y + z;
  let largest = Math.max(...angles);
  let smallest = Math.min(...angles);
  let mid = sum - largest - smallest;

  function isValidTriangle() {
    return smallest > 0 && sum === 180
  }
  if (isValidTriangle()) {
    if (smallest < 90 && mid < 90 && largest < 90) return "acute";
    else if (mid > 90 || largest > 90) return "obtuse";
    else return "right";
  }
  else return "invalid";

}


let result = triangle(60, 70, 50);       // "acute"
console.log(result);
result = triangle(30, 90, 60);       // "right"
console.log(result);
result = triangle(120, 50, 10);      // "obtuse"
console.log(result);
result = triangle(0, 90, 90);        // "invalid"
console.log(result);
result = triangle(50, 50, 50);       // "invalid"
console.log(result);
