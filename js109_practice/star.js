//input: odd number integer that the n by n grid
// n = number of rows, by n number of columns (aka string length)
// middle row has n number of asteriks
  // rows 1 through (n -1) / 2: three stars
    // different spacing !!
  // row (n - 1)/2: has n stars, no spaces
  // rows (n-1)/2 through n - mirror image of first half rows
//output:
//rule:
//algo:

function star(n) {
  const midpoint = (n - 1) / 2;
  let starPos =initializeStarPositions(n, midpoint);

  // initialize row with empty string
  let row = Array(n).fill(" ");
  let midRow = Array(n).fill("*");

  // loop through n rows
  for (var i = 0; i < n; i++) {
    if (i === midpoint) {
      console.log(midRow.join(""));
    }
    // loop through columns and set asteriks
    for (var col = 0; col < n;  col++) {
      if (starPos.includes(col)) {
        row[col] = "*";
      }
    }
    if (i !==  midpoint) console.log(row.join("")); // print row
    starPos = updateStarPositions(i, midpoint, starPos)
    row = Array(n).fill(" ");
  }
}

function initializeStarPositions(n, midpoint) {
  let leftStar = 0;
  let rightStar = n - 1;
  return [leftStar, midpoint, rightStar];
}

function updateStarPositions(row, midpoint, starPosArray) {
  let increment = 1;
  if (row >= midpoint) {
    increment = -1;
  }
  starPosArray[0] = starPosArray[0] + increment;
  starPosArray[2] = starPosArray[2] - increment;
  return starPosArray;
}

star(9);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
