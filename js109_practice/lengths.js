// Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.
//
// You may assume that every pair of words in the string will be separated by a single space.

//input: string
//output: array where each element is "string length"
//rule: if it's empty string or nothign passed, return empty array
//algo: split string on whitespace
//for each word, concatenate word and word length
// return array with concatenated result

function wordLengths(str) {
  if (!str) return [];
  let result = str.split(" ")
  .map((word) => `${word} ${word.length}`);
  console.log(result);
}
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
