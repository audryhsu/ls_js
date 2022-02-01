/*
input:
output:
rule:
algo:
- for each elem in list, filter for anagrams
- sort letters in array
- loop through letters and compare to sorted input word letters
  - if any don't match, return false
*/
function anagram(word, list) {
  let anagrams = list.filter(elem => isAnagram(word, elem));
  console.log(anagrams);
}

function isAnagram(target, source) {
  let tLetters = target.split('').sort();
  let sLetters = source.split('').sort();

  // for (let i = 0; i < tLetters.length; i++) {
  //   if (tLetters[i] !== sLetters[i]) {
  //     return false
  //   }
  // }
  //refactor using every
  return tLetters.every((letter, i) => letter === sLetters[i]);
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
