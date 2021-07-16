let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

let newArray = myArray.map(element => (element % 2 === 0) ? 'even': 'odd');


function even(arr) {
  arr.forEach(inner_array => {
    inner_array.forEach(item => {
      if (item % 2 ===0) {
        console.log(item);
      }
    });
  });
  return
}
// even(myArray);
