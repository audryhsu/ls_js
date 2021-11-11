// Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.
//
// You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

//input: a string word, and a long string of text
//output: integer represents number of times word appears in string of text
//rule: words can include punctuation if they end the sentence or have commas, these should be valid searches
//algo: regex ? filter?

// function searchWord(str, text) {
//   let result = text.split(" ").filter(word => word === str).length;
//   console.log(result);
// }
// using regex
function searchWord(str, text) {
  const re = new RegExp('\\b' + str + '\\b', 'gi'); //when using a variable, don't use the // regex
  let result = text.match(re)
  if (!result) return 0;
  // console.log(result.length);
  console.log(result);
  return result.length
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
searchWord('consequatur', text);      // 2 does not work with filter solution
searchWord('qui', text);
searchWord('none', text);
