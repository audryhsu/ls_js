// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.
//
// Words consist of any sequence of non-space characters.

//input string, space separated word
// output - object: key is letter count, value is count of words that correspond to letter count
// rule: words are spearated by spaces. characters count as part of a word

//algo - initialize an object to track
// split the sentence into words array
// iterate through each word
  // take the length of each word and add it as a key to the obj
  // if that key already exists, increment the value of key

// if empty string, then return empty object

function wordSizes(string) {
  let obj = {};
  if (string.length === 0) return obj;

  let arr = string.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].length]) obj[arr[i].length] = 1;
    else {
      obj[arr[i].length] += 1;
    }
  }
  return obj;

}

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
