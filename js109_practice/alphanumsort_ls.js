// Launch school's solution uses an array of the words and their indices as the key.
// write a custom wordSort function to sort a copy of the input array

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                      'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                      'twelve', 'thirteen', 'fourteen', 'fifteen',
                      'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// sort based on the number words.
// for each number, look up the number word and compare.

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  console.log([...array].sort(wordSort));
}

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
