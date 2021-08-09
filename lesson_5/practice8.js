let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// input = Object
// iterate through object values ==> nested array
// for each nested array,
//   loop through each word
//   for each word,
//   split into array of chars
//     if char is in vowels array,
//     log char
let vowels = 'aeiou'.split('');

let words = Object.values(obj);
words.forEach((arr, i) => {
  arr.forEach((word, i) => {
    console.log(word);
    let charArr = word.split('');
    for (let i = 0; i < charArr.length; i++) {
      if (vowels.includes(charArr[i])) {
        console.log(charArr[i]);
      }
    }
  });
});
