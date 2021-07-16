function allMatches(words_list, regex) {
  let matches = [];
  for (let word of words_list) {
    if (regex.test(word)) {
      matches.push(word);

    }
  }
  return matches;
}

// function allMatches(words, pattern) {
//   let matches = [];
//   for (let index = 0; index < words.length; index += 1) {
//     if (pattern.test(words[index])) {
//       matches.push(words[index]);
//     }
//   }
//
//   return matches;
// }

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));
