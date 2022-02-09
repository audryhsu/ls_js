let array = 'hello'.split('');
let arr2 = 'world'.split('');

for (let i = 0; i < array.length; i++) {
  console.log("Starting outer loop!");

  for (let j = 0; j < arr2.length; j++) {
    console.log("Starting inner loop, on letter ", arr2[j]);

    if (arr2[j] === 'r' && array[i] === 'e') {
      console.log("Time to break out!");
      break;
    }
    console.log("This gets skipped when broken.");

  }
  console.log("Does this get run after a break?");
}
