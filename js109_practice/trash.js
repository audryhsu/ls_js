function swap(string) {
  let words = string.split(' ');

  words = words.map(word => {
    word = word.split('');
    let first = word[0];
    let last = word[word.length - 1];
    word[0] = last;
    word[word.length - 1] = first;
    return word.join('');
  });
  console.log(words.join(' '));
  return words.join(' ');
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
swap('I am a cat');                              //
