let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

//return object
//loop through subarrays to get first element
// set first element of subArr to be Object Key
// set second element to be object value

let obj = {};
arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

console.log(obj);
