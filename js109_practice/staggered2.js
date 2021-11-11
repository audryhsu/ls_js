// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

//input: string
//output: string
//rule: ignore nonalpha chars when determining to lower or uppercase
//algo: cannot rely on index position. need to keep track what the last alphanumeric char was
// 0 == upper case :

// added a default parameter to determine whether to run the simple stagger or complex one ignoring nonalpha chars
function isAlphabetic(char) {
  return char >= 'A' && char <= 'z';
}

function staggeredCase(str, ignoreNonAlpha=true) {
  if (!ignoreNonAlpha) return simplestaggeredCase(str);

  let tracker = true;
  let result = [...str]
  .map((char, index) => {
    if (isAlphabetic(char) && tracker) {
      tracker = false;
      return char.toUpperCase();
    }
    else if (isAlphabetic(char) && !tracker) {
      tracker = true;
      return char.toLowerCase();
    }
    else return char;
  }).join("");
  // console.log(result);
  return result;
}

function simplestaggeredCase(str) {
  let result = str.split("").map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
    else {
      return char.toLowerCase();
    }
  }).join("");
  return result
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
