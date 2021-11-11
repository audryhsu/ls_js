// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

//input string
// returns boolean value
// rule: true if all parenthesis in string are "balanced"
// "balanced" definition - ( ) must be matching pairs
  // if there is (, there must be a )
  // must be an even number of ()
    // (( unbalanced
  // if ) first, unbalanced
  // if only (, unbalanced

// algo
// loop thorugh the string
// track left index
// when you encounter a (,
  //loop backwards with right index and look for the matching )
  // if not found, return false
  //Otherwise,  continue with left index
  // if encounter another (, loop backwards starting where right index left off to search for pair
// if no parentheses, return true
// if first paren encountered is ), return false

// () )(

// split into an array and filter for parenthess, then loop through an array of just parens?

// function isBalanced(str) {
//   const rightParen = '(';
//   const leftParen = ')';
//   let leftIndex = 0;
//   let rightIndex = str.length - 1;
//   let arr = str.split("").filter(char => (char === rightParen || char === leftParen));
//
//   console.log(arr);
//   if (arr.length % 2 === 1) return false;
//   for (let i = 0; i < arr.length / 2; i++) {
//     console.log(`first paren: ${arr[i]}... second paren: ${arr[arr.length - 1 - i]}`);
//     if ((arr[i] === rightParen) && (arr[arr.length - 1 - i] === leftParen)) {
//       continue
//     } else {
//       return false;
//     }
//   }
//   return true; // default if no parens
// }

function isBalanced(str) {
  const rightParen = '(';
  const leftParen = ')';
  let parenCount = 0;
  let arr = str.split("").filter(char => (char === rightParen || char === leftParen));
  arr.forEach((item, i) => {
    arr[i] === rightParen ? parenCount +=1: parenCount -= 1;
  });
  console.log(parenCount);
  return parenCount === 0 ? true : false;

}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false); // this is tricky
console.log(isBalanced("What ((is))) up(") === false); // tricky
