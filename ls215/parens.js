/*
input: string
output: boolean
rule: if string contains balanced parens, false otherwise
algo:
- left parens increments tally by 1
- right parens decrements
- if the tally goes negative or doesn't end at 0, then false

*/

function isBalanced(string) {
  let tally = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') tally += 1;
    if (string[i] === ')') tally -= 1;
    if (tally < 0) return false;
  }

  return tally === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
