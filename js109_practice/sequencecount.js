// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.
//
// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// input - two integers. first is a count of elements in resulting array, second is starting number of sequence
// output - array. contains the same number of elements as Count arg
//rule: value of each elem is a multiple of starting number
// start num of sequence is any real number.

//algo - create an entpy array. using a for loop, loop thorugh count times and add startNum
// arr[0] == startNum
// arr[1] == arr[0] + startNum
// third element == arr[1] + startNum
// try using reduce or for each

// function sequence(count, startNum) {
//   let arr = [startNum];
//   for (let i = 1; i < count; i++) {
//     arr.push(arr[i - 1] + startNum);
//   }
//   console.log(arr);
// }

function sequence(count, startNum) {
  let arr = [...Array(count)].map((_, index) => startNum * (index + 1));
  console.log(arr);
}

function sequence(count, startNum) {
  let arr = [...Array(count)]
  let result = arr.reduce((array, _, index) => {
    array.push(startNum * (index + 1));
    return array;
  }, [])

  console.log(result);
}
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
