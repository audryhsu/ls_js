/*
input: string of words, includes nonalpha chars

output: string with all nonalpha characters replaced by spaces
rule:
- if consecutive nonalpha chars, only replace with one space
- so '---' -> ' '
- includes punctuation and apostrphe's, whitespace
- one or more nonalpha, including numbers
- existing spaces are the same
- alpha chars unchanged
algo:
//
*/
function cleanUp(string) {
  return string.replace(/[^A-Za-z]+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line "); // " what s my line "
console.log(cleanUp("021what's my +*& line?") === " what s my line ");
console.log(cleanUp("021what's my +*& LINE?") === " what s my LINE ");
console.log(cleanUp("!@#$%^&hello*()[]?") === " hello ");
