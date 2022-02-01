/*
Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.
/*
input: array of rectanges, where a rectangle is [height, width]
output: total area from all rectangles
rule:
algo: calculate area for each rectangle, sum areas, return total
*/

// Map + Reduce
function totalArea(rectangles) {
  let areas = rectangles.map(([h, w]) => h * w );
  return areas.reduce((total, currentValue, currentIndex) => total + currentValue);
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

let area = totalArea(rectangles);    // 141
console.log(area);

/*
calculate total area of a set of rectangles however only include squares in its calculations, ignore non-squares
*/
// Map + filter + reduce
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rect => rect[0] === rect[1]);
  return totalArea(squares);
}
console.log(totalSquareArea(rectangles));
