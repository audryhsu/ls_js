function joinOr(array, deliminter=', ', joinWord='or ') {
  let len = array.length;
  if (len === 0) return "";
  if (len === 1) return array[0];
  if (len === 2) return array.join(' '+ joinWord);
  let first = array.join(deliminter).slice(0, -3);
  let second = deliminter + joinWord + array[len -1];

  return first + second;
}

let testArr = [1,2,3];
console.log(joinOr(testArr,'; ', 'and '));

// Pseudocode
// Check number of elements in input array
// if input array does not contain any elements, return ""
// if input array has one element, return element[0] value
// if input array has two elements, join elements using third optional parameter or default ' or '
// if input array has > 2 elements:
// join all elements with deliminter
    // slice off last two
// join last two elements with deliminter + argument
// join two arrays together and return a string
// output string

// Understanding - write a function that joins array elements on a specificed or default deliminter between the last element and second to last element.

// Requirements
// input- array required parameter
// input - optional second parameter for deliminter. Default is ', '
// input - optional third parameter to deliminate last and second to last elements. default is 'or'
// if input is empty array, return ""
// if input is array with one element, return element value
// if input array has 2 elements, only use third parameter
// output is array elements joined as a string

// Questions
// what if array contains undefined or empty items?
// assume array is provided and it contains integers or strings
