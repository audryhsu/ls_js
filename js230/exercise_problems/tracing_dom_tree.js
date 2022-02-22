/*
function that takes element's id and returns the dom tree of the element in a 2d array
- first subarray contains the element and it's siblings
- second subarr contains parent of element and it's siblings...
- each consecutive subarr goes up the dom tree
- assume the grandest parent is an element with "1"

algo:
- starting with element id of input id
  - get parentElement.children
    - for each child, get nodeName and return in array

  - get parent of parentElement, children.
  - keep going until parent of parentElement id is ''

*/
function getSibilingElementNames(element) {
  let siblings = Array.from(element.parentElement.children);
  return siblings.map((sibling, _) => sibling.nodeName);
}
// pass in default argument as the tree, so you avoid having to declare it in function definition and inadverdently "resetting" it to an empty array. Make sure to pass the `tree` argument when domTreeTracer is called again in return statement.

function domTreeTracer(id, tree = []) {
  let currentElement = document.getElementById(`${id}`);
  tree.push(getSibilingElementNames(currentElement));

  if (currentElement.parentElement === document.body) return tree;
  return domTreeTracer(currentElement.parentElement.id, tree);
}

console.log(domTreeTracer(1)); // [["ARTICLE"]]
console.log(domTreeTracer(2)); // [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(6)); // [['SECTION'], ['HEADER','MAIN','FOOTER'], ['ARTICLE']]
console.log(domTreeTracer(22));

/*
> domTreeTracer(1);
= [["ARTICLE"]]
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
*/
