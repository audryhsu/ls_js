/*
input: string word
output: scrabble score -- sum of values of all used tiles
rule:
- empty word or white space (tab or newline) or nullis 0 scores
- case insensitive
- letter repeated, score it each tile ==> 'rattle', 1*2

// TODO: how to handle \t\n? replace ??


note: want both the prototype and the constructor function to have access to the score method
- method score on a new Scrabble object
- static method that can calculate score of a given passed in string on the fly

ds: object mapping letters to values (case insensitive)
- an array to hold the values of the letters in my word
algo:
- declare a sum variable to track running total of score
- split my word into array of letters
- loop through the keys in letterValues
  - for each key,
  - if letter array includes filter wordArray by letterValues array I am interating on.
  - multiply length of filtered array x letterValues Number(key);
  - add product to the score.
- return score
*/


class Scrabble {
  static letterValues = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V','W','Y'],
    5: ['K'],
    8: ['J','X'],
    10: ['Q','Z']
  };

  static score(word) {
    return new Scrabble(word).score();
  }
  constructor(word) {
    this.word = word;
  }
  score() {
    if (this.word === null || this.word === "") return 0;

    let sumTotal = 0;
    let wordArray = this.word.toUpperCase().split("");

    for (let key in Scrabble.letterValues) {
      wordArray.forEach(letter => {
        if (Scrabble.letterValues[key].includes(letter)) {
          sumTotal += Number(key)
        }
    });
  }
  console.log(sumTotal);
  return sumTotal
}
}

let scrabble = new Scrabble('quirky  ');
scrabble.score()
Scrabble.score('quirky')
module.exports = Scrabble;
