// write a function that removes every other element from an array."

//input: array with any type of elements
//output: array with every other element removed
//rule: always starts with second element
//algo: assuming mutate the original array.


let skip = (array) => {
  let obj = Object.fromEntries(Object.entries(array));

  for (var i = 1; i < array.length; i+= 2) {
    if (array[i] === obj[i]) array.splice(i, 1);
  }
  return array;
}

let result = skip(['audry', 'bobby', 'abby', 'molly', 'kathy']);
console.log(result);
