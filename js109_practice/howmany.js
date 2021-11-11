// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").


//input - array of strings
// output - sequence of string: element, number of occurences
// rule - case sentitive

// use an object to count occurences, then use string interpoleation to print

function countOccurrences(array) {
  let obj = {};

  // for each
  array.forEach((item, i) => {
    if (!obj[array[i].toLowerCase()]) obj[array[i].toLowerCase()] = 1;
    else {
      obj[array[i].toLowerCase()] += 1;
    }
  });
  //loop through each kv pair
  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }

}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
