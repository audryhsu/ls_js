// sum numbers between 1 and another number INCLUSIVE
// loop through numbers between 1 and X
// check if multiple of 3 or 5
// add to array
// reduce funtion to sum elements of array

// function takes on
// do not need to validate input, assume integer < 1
//
// function multisum(endNumber) {
//   let arr = [];
//   for (let counter = 1; counter <= endNumber; counter ++) {
//     if (counter % 3 ===0 || counter % 5 ===0) {
//       arr.push(counter);
//     }
//   }
//   let reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return arr.reduce(reducer);
// }
function multisum(endNumber) {
  let sum = 0;
  for (let counter = 1; counter <= endNumber; counter++) {
    if (counter % 3 ===0 || counter % 5 === 0) sum += counter;
  }
  return sum;
}



let values = [3, 5, 10, 1000];

values.forEach((item) => {
  console.log(multisum(item));

});

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
