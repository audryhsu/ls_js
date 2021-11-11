// create a list with integers between range (x, y)

// with a loop

// function range(startNum, endNum) {
//   let result = [];
//   for (var i = startNum + 1; i < endNum; i++) {
//     result.push(i);
//   }
//   return result;
// }

// using recursion
let invocations = 0;

function rangeR(startNum, endNum) {
  invocations += 1;
  if (endNum - startNum === 2) {
    return [startNum + 1];
  } else {
    let result = rangeR(startNum, endNum - 1);
    result.push(endNum - 1);
    return result;
  }
}
console.log(rangeR(2, 8), `Invoked: ${invocations}`);
