
function substrings(string) {
  let leadingIndex = 0;
  let allSubs = [];
  for (let i = 0; i < string.length; i++) {
    let subs = string.split('').flatMap((item, i, array) => array.slice(leadingIndex, leadingIndex + i + 1).join(''));

    subs = subs.filter((elem, i, arr) => arr.indexOf(elem) === i);
    allSubs.push(subs);
    leadingIndex += 1;
  }

  return allSubs;
}

// returns
substrings('abcde');
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
