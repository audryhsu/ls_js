/*
example of creating private data using regular function declarations and then iifes
*/

// function makeUniqueIdGenerator() {
//   let count = 0;
//   return function() {
//     count += 1;
//     return count;
//   };
// }
// let makeUniqueId = makeUniqueIdGenerator();

//rewrite using iife; combines definition of makeUniqueIdGenerator and invocation in one;
let makeUniqueId = (function() {
  'use strict';
  let count = 0;
  return () => {
    count += 1;
    console.log(count);
  };
}());

makeUniqueId(); // => 1
makeUniqueId(); // => 2
makeUniqueId(); // => 3
