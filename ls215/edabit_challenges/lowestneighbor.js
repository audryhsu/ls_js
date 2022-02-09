// https://edabit.com/challenge/pgqyeEyTtzJL9L8Nq

// Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

//  arr,  x,  y
// arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
// x will hold the row coordinate, while y will hold the column coordinate.
// You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

/*
problem: given a 2D array, return lowest neighbor
- "neighor" before or after in the same row, same column above or below the row, or
  - diagnol: row above, offset col left, offset one col right
  - diagnol2: row below ""...""
  - neighbor up to 8 neighbors if in middle of matrix
    - if edge coordinate, three neighbors
input: arr integers, x that represents row index, y that reps col index of the subarray.
  - if input array is 1x1, return value at in matrix
  - always valid numbers
output: return value of neighbor, that is lower than all other neighbors, including given coordinate
  - if no lowest neighbor, return value at given coordinate;
rule:
-
algo: [r][c]
- given input coordinate,
        - location of the input coordinate--  3, 5, 8
          -- determine input coordinate if it's middle, edge, or corner
            - middle - x === y && x is mdipoint -->  (row.length - 1) / 2 == midpoint
            - all 8 neighbors:


          - edge case -> x || y is 0, or x || y is length - 1
          - corner case -> x&& y is 0 || x&&y is length -1 || x ===0 & y is length -1 || x === length -1 && y ===0)
              - 3 neighbors: [r+1][c+1],

  - access each neighbor to get value
    - get all eight neighbors
    - filter our undefined values (access beyond scope)

  - compare all values of neighbors
  - get the Math.min(...neighborValues)
  - if neighbor min > value @ input coordinate,
    - true, return input coordinate value
    - else, return neighborMin value;
ds:
*/

function lowestElement(array, x, y) {
  let neighborValues = getNeighbors(array, x, y);
  let min = Math.min(...neighborValues);

  return min;
}

function getNeighbors(array, x,y) {

  let lowerBound = 0; // incl.
  let upperBound = array.length - 1; // incl.

  let up = y + 1;
  let down = y - 1;
  let right = x + 1;
  let left = x - 1;

  let arrVertical = [[x, up], [x, down]];
  let arrHor = [[left, y], [right, y]];
  let arrDiag = [[left, up], [left, down], [right, up], [right, down]];
  let arrCurrent = [[x, y]];

  // filter it based on upper and lowerbound values.
  let arrAll = [].concat(arrVertical, arrHor, arrDiag, arrCurrent)
    .filter(subArr =>
      !subArr.some(coordinate => coordinate < lowerBound || coordinate > upperBound));

  // loop through coordinates and return value at coordinate
  return  arrAll.flatMap(([x,y], _) => array[x][y]);

}

console.log(lowestElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1,1)); // 1
console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)); // 1
console.log(lowestElement([
  [1, 2],
  [4, 5]
], 1, 1));
console.log(lowestElement([
  [9, 8, 7, 1],
  [0, -1, -3, 1],
  [-5, -9, 54, 1]
], 0, 0)); // -1
