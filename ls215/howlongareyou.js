/*
input: string
output: array containing every other word from the string, each word followed by ' ' and word length
- if '' input, return empty array []
rule:
algo:
- get length of each word
- format string word length
- return an array

split string on spaces
- map each word to word and length concatenated together
*/

function wordLengths(string) {
  if (!string || string.length === 0) return [];
  let r = string.split(' ').map((word, _) => `${word} ${word.length}`);
  console.log(r);
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
