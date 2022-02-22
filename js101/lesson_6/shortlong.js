// function takes two string arguments
// coerce inputs into strings
// determine length of each string
// compare lengths to determine which is short string and which is long string
// concatenate the shorter string, long string, then short string and return the result

function shortLongShort(str1, str2) {
  str1 = String(str1);
  str2 = String(str2);
  let len1 = str1.length;
  let len2 = str2.length;
  if (len1 < len2) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
  // console.log(newStr);
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
console.log(shortLongShort(1231, 456));
