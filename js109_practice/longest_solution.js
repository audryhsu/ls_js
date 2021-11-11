function longestSentence(text) {
  let words = text.split(' ');
  // console.log(words);
  let longestSentence = ['', 0];
  let startIdx = 0;
  words.forEach((word, idx) => {
    if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
      let sentence = words.slice(startIdx, idx + 1);
      console.log(sentence);
      let length = sentence.length;
      if (length > longestSentence[1]) {
        longestSentence = [sentence, length];
      }
      startIdx = idx + 1;
    }
  });
  console.log(longestSentence[0].join(' '));
  console.log(`The longest sentence has ${longestSentence[1]} words.`)
}

let longText =
'Four score and seven years ago our fathers brought forth on this ' +
'continent a new nation, conceived in liberty, and dedicated to the ' +
'proposition that all men are created equal. Now we are engaged in a ' +
'great civil war, testing whether that nation, or any nation so ' +
'conceived and so dedicated, can long endure. We are met on a great ' +
'battlefield of that war. We have come to dedicate a portion of that ' +
'field, as a final resting place for those who here gave their lives ' +
'that that nation might live. It is altogether fitting and proper that ' +
'we should do this.';

longestSentence(longText);
