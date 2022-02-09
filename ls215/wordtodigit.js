/*
problem: converting word versions of numbers into their digit character
input: string
output: string with digits converted
rule:
- only replace words that are numbers without any extra letters
- whitepace except for when beginning of the word, or ending with punctuation.
- case insensitive
algo:
- find which words represent digits
- map the word to it's digit
- replace the word in the input string with the digit -- regex ?
ds: array of number words, loop through it, using regex replace each one with string version of the index
- each iteration, construct a new regex based on wordNum
*/

const wordNums = 'zero,one,two,three,four,five,six,seven,eight,nine'.split(',');

function wordToDigit(string) {

  wordNums.forEach((wordnum, i) => {
    let re = RegExp(`\\b${wordnum}\\b`, 'gi');

    string = string.replace(re, Number(i));
  });
  return string;
}

wordToDigit('Please call me at five five five one two three four. Thanks.'); //Please call me at 5 5 5 1 2 3 4. Thanks.
wordToDigit('hello There zeRO Six Seven eight!nIne? TEN!!.'); // 'hello there 0 6 7 8 9 TEN!!.'
wordToDigit('zer0 f"ve 5'); // zer0 f5ive 5
wordToDigit('fiver sixth seventh onsies ones twos threes fours nines tens'); // fiver sixth seventh onsies ones twos threes fours nines tens
wordToDigit(''); // ''
