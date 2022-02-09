/*
input: string of text
- empty string? return an empty box
- convert any input into a string.
output: string with added borders above, below, and to the sides
rule:
- left/right borders will always be +- middle pad -+
- middle pad === length of the input string
- minimum three rows high
  - | blank row --> same length as top border
  - | text row
  - | blank row

algo:
- calculate length of border based on input string length
- build the top border
- build row pad
- build text row, | _ text _|
- build formatted box concat strings

- maxwidth --> if the string length > maxwidth, take a substring up to that index position + 1
*/
// optional second arg as max width of box
function logInBox(string, maxWidth = null) {
  string = String(string).trim();

  let boxWidth;
  if (maxWidth) {
    if (maxWidth < 5) return "Max width must be greater than 4";
    boxWidth = maxWidth - 4;
  }

  const border = '+-' + '-'.repeat(boxWidth) + '-+\n';
  const rowPad = '| ' + ' '.repeat(boxWidth) + ' |\n';
  const textRow = '| ' + string.substring(0, boxWidth) +  ' |\n';

  console.log(border + rowPad + textRow + rowPad + border);

}

logInBox('To boldly go where no one has gone before.', 5);
logInBox('');
