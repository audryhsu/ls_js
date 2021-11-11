const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

//input: a word to search for, and a string of text to search
//output: integer that represents number of times word apppears in text
//rule: words are broken up by spaces. some words may have trailing punct.
  // case insensitive search...
  // do not count partial words like "quia" for qui
//algo: split the text on spaces
// loop through each word looking for 'sed',
// if match, then increment counter.
// return counter

// function searchWord(target, text) {
//   return text.split(" ").filter(word => word.toUpperCase() === target.toUpperCase()).length;
// }

function searchWord(target,text) {
  let matches = text.match(/\bqui\b/gi).length;
  return matches;
}

// let result = searchWord('sed', text);      // 3
let result = searchWord('qui', text);      // 3
console.log(result);
