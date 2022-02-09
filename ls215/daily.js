/*
input: string
output: string with consecutive duplicate letters remove

rule: if there are consecutive letters repeated, they should be replaced with just one occurence of the letter
- spaces are ignored, just return a space
- what if its multiple spaces? leading or trailing?
- blank input is returned
- assume to preserve case
- includes nonalphabetic chars

- regex to find matches where consectuvie chars of the same char
- replace each match with just one instance of the char

algo:
*/

function crunch(string) {
  let crunched = string.replace(/(.)\1{1,}/g, '$1');
  return crunched;
}

function crunch(string) {
  let crunched = '';
  string.split('').forEach((char, i) => {
    if (char !== crunched[crunched.length - 1]) {
      crunched += char;
    }
  });
  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === 'daily double');
console.log(crunch('4444abcabccba') === '4abcabcba');
console.log(crunch('ggggggggggggggg') === 'g');
console.log(crunch('a') === 'a');
console.log(crunch('AAaa') === 'Aa');
console.log(crunch('!!!...') === '!.');
console.log(crunch('   ') === ' ');
console.log(crunch('') === '');
