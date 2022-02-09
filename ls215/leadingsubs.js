function leadingSubstrings(string) {
  return string.split('').flatMap((item, i, array) => array.slice(0, i+1).join(''))
}

function leadingSubstrings(string) {
  let subStrArray = [].map.call(string, (_, index) => {
    return string.slice(0, index + 1);
  });
  console.log(subStrArray);
  return subStrArray;
}
/*
input:
output:
rule:
algo:
*/

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
