//input: array containing strings of letters
//output: return an ARRAY, contianing all of the chars that show up in all strings of input array. including duplicates.
  // if not matching chars, return an empty array.
//rule: if a char is repeated multiple times in each element of array, include the char in output array for the n times it's present.
//algo: start with first word in input array and compare to letters in remaining words in input array.
  // loop thorugh each char in word
    // loop through each char in word + 1
    // if char === char,
      // foundFlag += 1;
      // stop searching for char, move to next word
    // go to word + 2 in input array and repeat
    //once done iterating through input array of words,
    // if foundFlag === input Array.length - 1, then consider global match.
      // if found in all words, push char to result array.
      // go back through each word, and slice off that char.
