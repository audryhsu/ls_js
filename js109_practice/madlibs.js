let readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter a adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Did you walk your ${adjective} ${noun} today? That's hilarious!
The ${adjective} dog walks ${adverb} over the lazy dog.`);
