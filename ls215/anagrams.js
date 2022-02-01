/*
input: a word, and array of words
output: return array containing all words from input array that is an anagram of word input
rule: anagram is when it has same total length, same count of letters
algo:
- process input word and get counts of letters - object
- loop through input array and process each word into obj of letters : counts
  - compare input word to array word objs to see if letters and counts match
    - compare object keys of both
    - sort the values by key (letters, so alphabetically)
    - compare object values
  - if yes, add word in an new array
*/
// USING OBJS TO COUNT LETTERS - HARDER
function anagram(word, list) {
  let wordCounts = getCounts(word);
  let anagrams = list.reduce((result, currentWord, currentIndex) => {
    let cwCounts = sortObject(getCounts(currentWord)) // returns an object of letters : values

    for (let letter in wordCounts) {
      if (wordCounts[letter] !== cwCounts[letter]) {
        return result;
      }
    }
    result.push(currentWord)
    return result;
  }, []);
  console.log(anagrams);

}

function getCounts(word) {
  let counts = word.split('').reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 1
    } else {
      obj[letter] += 1;
    }
    return obj;
  }, {});
  return counts;
}

function sortObject(obj) {
  return Object.keys(obj).sort()
    .reduce((sortedObj, key, currentIndex) => {
      sortedObj[key] = obj[key]
      return sortedObj;
    }, {});
}


anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
