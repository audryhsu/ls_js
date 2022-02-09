/*
problem: determine the sentence with the most words given a text. sentences have varying punctuation that ends a sentence.
input: string of text
output: log out longest sentence and word count
rule:
- sentence can end with . ! or ? ==> use regex pattern [.!?] to find end of sentence.
- sentence always begins with a word character --> use word boundary \b to find start of sentence
- setences also contain other characters, such as --
- You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word
algo:
1. extract sentences from text into an array of sentences
2. for each sentence, remove non word characters using \W and
  - count the number of words, excluding whitespaces
  - if word count of current sentence > current max word count, this sentence + wordcount becomes the new max
    - update result object with original sentence and word count
  - reducing problem to find the max word count
3. Format string to output sentence and word count
*/
function longestSentence(text) {
  let sentences = text.match(/\b[\w\s,-]+[.!?]/g);
  let initialObj = {
    sentence : '',
    wordCount: 0
  };

  let longestObj = sentences.reduce((result, currentSentence) => {
    let wordCount = getWordCount(currentSentence);

    if (wordCount > result.wordCount) {
      result.wordCount = wordCount;
      result.sentence = currentSentence;
    }
    return result;
  }, initialObj);

  console.log(longestObj.sentence);
  console.log(`The longest sentence has ${longestObj.wordCount} words.`);
}

function getWordCount(string) {
  let wordsArray = string.split(" ");
  return wordsArray.length;
}

let longText = 'Four score and seven years ago our fathers brought forth' +
' on this continent a new nation, conceived in liberty, and' +
' dedicated to the proposition that all men are created' +
' equal.' +
' Now we are engaged in a great civil war, testing whether' +
' that nation, or any nation so conceived and so dedicated,' +
' can long endure. We are met on a great battlefield of that' +
' war. We have come to dedicate a portion of that field, as' +
' a final resting place for those who here gave their lives' +
' that that nation might live. It is altogether fitting and' +
' proper that we should do this.' +
' But, in a larger sense, we can not dedicate, we can not' +
' consecrate, we can not hallow this ground. The brave' +
' men, living and dead, who struggled here, have' +
' consecrated it, far above our poor power to add or' +
' detract. The world will little note, nor long remember' +
' what we say here, but it can never forget what they' +
' did here. It is for us the living, rather, to be dedicated' +
' here to the unfinished work which they who fought' +
' here have thus far so nobly advanced. It is rather for' +
' us to be here dedicated to the great task remaining' +
' before us -- that from these honored dead we take' +
' increased devotion to that cause for which they gave' +
' the last full measure of devotion -- that we here highly' +
' resolve that these dead shall not have died in vain' +
' -- that this nation, under God, shall have a new birth' +
' of freedom -- and that government of the people, by' +
' the people, for the people, shall not perish from the' +
' earth.';

longestSentence(longText);
