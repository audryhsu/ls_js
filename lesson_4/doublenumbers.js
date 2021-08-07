/// rewrite the function to mutate function argument

function doubleNumbers(numbers) {
  // let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] *=2;
    // console.log(numbers[counter]);
    // doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return numbers;
}


let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// myNumbers;                // => [1, 4, 3, 7, 2, 6]
