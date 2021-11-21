// write a function to find the longest common prefix string amonst an array of strings.
// if there is no common prefix, return empty string "".
//
// example 1:
// input: ['flower', 'flow', 'flight']
// output: "fl"
//
// example 2:
// input: ['dog', 'racecar', 'car']
// output: ""
// All given inputs are in lowercase letters a-z.

function leadingSubstrings(word) {
 let subsArray = [];
 word.split("").forEach((letter, idx) => {
  subsArray.push(word.slice(0, idx + 1));
 });
  return subsArray;
}
// console.log(leadingSubstrings('flow'));

// function longestPrefix(array) {
//   array.sort((a, b) => a.length - b.length);
//   let shortestSubs = leadingSubstrings(array[0]);
//   let remainingArr = array.slice(1);
//   let longest = '';
//   let matchTarget = array.length - 1;
//
//   for (let i = 0; i < shortestSubs.length; i++) { //iterating master substrings
//     let matchCount = 0;
//     // console.log(`Current substring: ${shortestSubs[i]}`)
//
//     for (let j = 0; j < remainingArr.length; j++) { // iterating through nextWords
//       let wordSub = remainingArr[j].slice(0, i + 1);
//       // console.log(`Check against wordSub: ${wordSub}`)
//
//       if (wordSub === shortestSubs[i]) {
//         // console.log('Match!');
//         matchCount +=1;
//         continue;
//       }
//     }
//     if (matchCount === matchTarget) longest = shortestSubs[i];
//     // console.log('Longest prefix:', longest);
//   }
//   return longest;
// }

// >>REFACTOR using startsWith method
// flow, each iteration slice off last char
// check if every word in the input array start with sliced prefix.
function longestPrefix(array) {
  array.sort((a, b) => a.length - b.length);
  let shortestWord = array.shift();


}

console.log(longestPrefix(['flower', 'flow', 'flight']));
console.log(longestPrefix(['dog', 'racecar', 'car']));
console.log(longestPrefix(['interspecies','interstellar', 'interstate']));
console.log(longestPrefix(['throne', 'throne']));
