let str = "The Flintstones Rock!"

function padString(str, repeat_number) {
  let i = 0;
  // console.log(str.padStart(str.length + 1, ' '));
  // i++;
  while (i < repeat_number) {
    console.log(str.padStart(str.length + i, " "));
    i++;
  }

}
console.log(padString(str, 10));
