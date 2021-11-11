// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.


// input string that is a first name, space, last name
// output string - last name, comma, space, firstname

//split the string into array on white space
// in a new array, add last name as first element
// then add remaining first/middle names to new array
// flatten the array, then using string interpoleation, log last name, a common, then joined string

function swapName(strName) {
  let names = strName.split(" ")
  let arr = [];
  arr.push(names[names.length - 1])
  arr.push(names.slice(0, names.length - 1))
  let final = arr.flat()
  console.log(`${final[0]}, ${final.slice(1).join(" ")}`);

}

function functionNamefunction swapName(name) {
  let names = name.split(' ');
  return `${names.pop()}, ${names.join(' ')}`;
}

// swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
