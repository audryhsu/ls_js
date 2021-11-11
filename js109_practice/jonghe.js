// Problem Description You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) result => "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//input: array of strings -- looks like letters; and an integer k. k represents the number of elems from input array to concatenate to calculate longest string.
//output: return string -- FIRST, LONGEST string with k consecuritve strings taken in the array.
//rule:
  // Validity checks - if array is empty (n = 0), or k is greater than input array length, or k is <=0, return empty string.
  // must look at k  consecutive strings. ==> i, i & i+1, i, i+1, i+2.. forward looking only.
//algo:
  // initialize var to hold longest consec. string and it's length
  // k = 3
  // i = current elem.... i, i+1, i+2, going k -1 elements beyond current index
  // elem1 + elem2 ==> longer than Longest? //if yes, update longest.
  // otherwise, increment i and go to next element.
  // i = 1. idx2 + idx3 + idx4 ==> longer than Longest?
    // i = 2. 5 - 3 = 2// stopping idx. while i <= input string.length - k
  // return Longest;

function longestConsec(array, k) {
  if ((array.length < 0) || (k >= array.length) || (k <= 0)) return "";
  let longestString = "";

  for (var i = 0; i <= array.length - k; i++) {
    let currentString = array[i];
    for (var j = 1; j < k; j++) {
      currentString += array[i + j];
    }
    if (currentString.length > longestString.length) longestString = currentString;
  }
  return longestString;
}

// Test Cases
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
