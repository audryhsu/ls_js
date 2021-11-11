// function takes in a string or empty string
// create a template like this:
// +-----
// | empty
// | string
// repeat line 4
// repeat line 3

// always a plus sign on either side
// minimum is two lines across, always three lines high
// when length is 0, lines is 2
// blank spice -- pipe, space, length of string, space, pipe

function logInBox(str) {
  let border = `+-`.concat(`-`.repeat(str.length), `-+`);
  let space = `| `.concat(' '.repeat(str.length), ` |`);
  let text = `| `.concat(str, ` |`);

  let arr = [border, space, text, space, border]
  arr.forEach(line => {
    console.log(line);
  });

  // console.log(border);
  // console.log(space);
  // console.log(text);
  // console.log(space);
  // console.log(border);

}

console.log(logInBox(''));
console.log(logInBox('To bodly go where no one has gone before.'));
