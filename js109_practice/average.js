// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

//input array of integers
//output - number value that is average of all integers
//rule - round DOWN

function average(array) {
  //using reduce
  // let ave = array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length;

  //for forEach
  let sum = 0;
  array.forEach((item, i) => {
    sum += item;
  });
  let ave = Math.floor(sum / array.length);


  console.log(ave);
  return ave;

}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
