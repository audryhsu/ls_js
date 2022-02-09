/*
input: a word in str form, and string of text
output: integer representing number of times word appears in the text
rule:
- word is a string
- word breaks are spaces, so may include punctuation at end or apostrophes
algo:
*/
// function searchWord(word, text) {
//   let re = RegExp("\\b" + word +"\\b", 'gi');
//   console.log(re);
//   console.log(text.match(re));
// }
// return text with every instane of word highlighted with ** and uppercased
function searchWord(word, text) {
  let re = RegExp("\\b" + word + "\\b", 'gi');
  let replacement = `**${word.toUpperCase()}**`;
  console.log(re);
  console.log(text.replace(re, replacement));

}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('qui', text);
console.log(searchWord('sed', text));
