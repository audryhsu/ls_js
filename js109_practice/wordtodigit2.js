//input: setence string
//output: string with every occurence of a number word converted to digit character
//rule:
//algo: dictionary of number words as keys. loop through all of the keys in dictionary and use regex to find and replace all instances of number words. make sure to use whole matches. needs to work with whitespace.

//split sentence into words
// map each word, if word is a key in digits object, update word with value
// otherwise, keep same word
// join

// for each key in the digits object, replace instances with obj value

digits = {
  'zero': 0, 'one': 1, 'two': 2, 'three': 3,
  'four': 4, 'five': 5,'six': 6,
  'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10};

function wordToDigit(string) {
  for (const word in digits) {
    // let re = new RegExp(word, "i"); //using regexp constructor function
    let re = new RegExp("^" + word + "$", "i"); //added 
    string = string.replace(re, digits[word])
  }
  console.log(string);
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('The weight is done.');
