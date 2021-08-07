let statement = "The Flintstones Rock";
let result = {};

charArr = statement.split('').filter(char => char !== ' ');

// using For Each
// charArr.forEach((char, i) => {
//   result[char] = result[char] || 0;
//   result[char] += 1;
// });


// using for loop
for (let i = 0; i < charArr.length; i++) {
  let char = charArr[i];
  result[char] = result[char] || 0;
  result[char] += 1;
}
console.log(result);
