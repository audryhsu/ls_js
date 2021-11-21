function messWithVars(hubba, bubba) {
  one = two;
  one.splice(0, 1, "five");
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); // ["one"]
console.log(`two is: ${two}`); // ["five"]
