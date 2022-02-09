/*
input: string
output: string with first char of every word capitalized, all the rest are lowercase
rule: if a special chra is the first char, return the char.
algo:
- split string on whitespace
- for each word,
- lowercase the rest of the word
- uppercase first char
- return the word into mapped array
*/
function wordCap(string) {
  let cap = string.split(' ').map((word, _) => {
    return word[0].toUpperCase() + word.toLowerCase().slice(1);
  }).join(' ');
  console.log(cap);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
