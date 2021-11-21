let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count = 0;
for (char of statement1) {
  if (char === 't') count +=1;
}
console.log(count);

console.log(statement1.split('').filter(char => char === 't').length);
