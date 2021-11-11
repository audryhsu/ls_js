//input: string paragraph
//output: print string of longest sentence, and log count of words
//rule: .!? demarcates end of sentence; "--" counts as a word.
 // create a list of sentences
 // loop thru setences and and split sentence.
    //count number of words (split on spaces).
    // if number of words > object words, then add sentence to object.
      // obj structure {longest: [<sentence string>, countWords]}
    // once loop ends, then find the largest property in the object, sort? and return the value of prop
//algo:

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

let longerText = longText +
'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
'we can not hallow this ground. The brave men, living and dead, who ' +
'struggled here, have consecrated it, far above our poor power to add ' +
'or detract. The world will little note, nor long remember what we say ' +
'here but it can never forget what they did here. It is for us the ' +
'living, rather, to be dedicated here to the unfinished work which ' +
'they who fought here have thus far so nobly advanced. It is rather ' +
'for us to be here dedicated to the great task remaining before us -- ' +
'that from these honored dead we take increased devotion to that ' +
'cause for which they gave the last full measure of devotion -- that ' +
'we here highly resolve that these dead shall not have died in vain ' +
'-- that this nation, under God, shall have a new birth of freedom -- ' +
'and that government of the people, by the people, for the people, ' +
'shall not perish from the earth.';

function longestSentence(text) {
  let regex = new RegExp(/\w[^?^!^.]+[.?!]/, "gi"); // regex can be simplified to /\w.*?[.?!]/
  // NOTE: \w = starts with any word char
    // .*? = any char. * = match preceding item "." 0 or more times. ? = non-greedy matching
    // [.!?] = ends when first instance of .|| ! || ? after starting word char.  
  let sentences = text.match(regex);
  console.log(sentences);
  let longestSentence = [0, undefined];

  sentences.forEach(sentence => {
    let wordCount = sentence.split(" ").length;
    if (wordCount > longestSentence[0]) {
      longestSentence = [wordCount, sentence];
    }
  });

  return longestSentence;
}

// [wordCount, sentence] = longestSentence(longText);
// console.log(">> " + sentence);
// console.log(`>> The longest sentence has ${wordCount} words.`);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

[wordCount, sentence] = longestSentence(longerText);
console.log(">> " + sentence);
console.log(`>> The longest sentence has ${wordCount} words.`);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
