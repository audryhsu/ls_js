//input: setence string
//output: string with every occurence of a number word converted to digit character
//rule:
//algo: list of digits and digit number words

digits = ['zero', 'one', 'two', 'three', 'four', 'five',
'six', 'seven', 'eight', 'nine', 'ten']

function wordToDigit(string) {
  let result = [];
  string.split(" ").forEach((word, i) => {
    if (word.split("").includes(['.'])) {
      word = word.slice(-1);
      console.log(word);
      if (digits.includes(word)) {
        result.push(digits.indexOf(word))
      } else {
        result.push(word);
      }
    }
  });
  console.log(result.join(" "));
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
