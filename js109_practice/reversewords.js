// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

//input string of words or one word
//outp ut string
// rule - if word has five or more chars, reverse letters. if less, then return word.
// split the string into wrods, check string lengt
  // if five or greater, split the word and reverse the chars

// using forEach
// function reverseWords(str) {
//   let results = [];
//   str.split(" ").forEach((word, i) => {
//     if (word.length >= 5) {
//       results.push(word.split("").reverse().join(""));
//     } else {
//       results.push(word);
//     }
//   });
//   return results.join(" ")
// }

// using map
function reverseWords(str) {
  let result = str.split(" ")
  .map(word => (word.length >= 5 ? word.split("").reverse().join("") : word))
  .join(" ")
  console.log(result);
  return result
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School'); // "hcnuaL loohcS"
