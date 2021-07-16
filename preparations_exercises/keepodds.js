// function oddLengths(array) {
//   let arrayLength = array.map(element => element.length);
//   return arrayLength.filter(element => (element % 2 !== 0));
// }

function oddLengths(arr) {
  return arr.reduce((accumulator, number) => {
    let length = number.length;
    if (length % 2 ===1 ) {
      accumulator.push(number.length);
    }
    return accumulator;
  }, []);

}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
