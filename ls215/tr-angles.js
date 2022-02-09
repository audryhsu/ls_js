/*
input: three angles
output: type of triangle or invalid
rule:
- right: only one === 90
- acute : all < 90
- obtuse: one angle > 90
- valid: a+b+c === 180
  - all > 0
algo:
- determine if valid triange
- classify
*/
function triangle(...angles) {
  if (!isValidTriangle(angles)) return 'invalid';

  if (angles.filter(a => a === 90).length === 1) {
    return 'right';
  } else if (angles.every(a => a < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function isValidTriangle(angles) {
  let [a, b, c] = angles;
  if (angles.some(angle => angle < 1) || a + b + c !== 180 ) return false;
  return true;
}
console.log(
  triangle(60, 70, 50) === 'acute',     // "acute"
  triangle(30, 90, 60) === 'right',       // "right"
  triangle(120, 50, 10) === "obtuse",
  triangle(0, 90, 90) === "invalid",
  triangle(50, 50, 50) === "invalid");
