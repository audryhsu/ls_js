// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

//filter out nonalpha characters first

function cleanse(string) {
  return string.replace(/[^A-Za-z\s]/g,'')

}

// console.log(cleanse('h!ello! there!'));

function wordSizes(string) {
  string = string.replace(/[^A-Za-z\s]/g,'');
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}
