/*
input: string
output: string wit hstaggered cap,
- staggered is every other char, first char capitalized, followed by lowercase or nonalpha char.
- nonalpha should not be changed, but count in the every other order
- nonalpha includes whitespace
rule:
algo:
*/
// function staggeredCase(string) {
//   let r = string.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
//   console.log(r);
// }

// modified - ignore nonalpha chars when determining whwether letter should be uppoer or lower
//

function staggeredCase(string) {
  let needUpper = true;

  let r = string.split('').map((char, i) => {
    if (/[a-zA-Z]/.test(char)) {
      let newChar;
      newChar = needUpper ? char.toUpperCase() : char.toLowerCase();

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
  console.log(r);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
