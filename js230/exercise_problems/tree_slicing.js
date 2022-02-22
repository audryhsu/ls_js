/*
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames.

p: find the most direct route from start id to it's descendent.
input: parent node id and innmost child node id
output: array of tagNames from parentid to child id
rules:
- elements must be children or grandchildren of body
- return undefined if id of start or end aren't in the dom
- return undefined if end id element isn't a direct or indirect hcild of start id element
- look at immediate children first; if end id is there, then you're done
- if not, then go to child with id closest to target id;


algo:
- check if elements exisit with valid start and end ids
start at target id, then go up a parent until reach ultimate parent? reverse?
- get element with end id
  - get parent element and add tagName to array
  if id === start id , return
  - else, keep going

*/

function sliceTree(startId, endId) {
  let array = [];
  let targetAncestor = document.getElementById(startId);
  let element = document.getElementById(endId);
  if (!targetAncestor || !element) return undefined;

  while (true) {
    array.push(element.tagName);
    element = element.parentElement;

    if (+element.id === startId) break;
    if (element === document.body) return undefined;
  }
  array.push(element.tagName);
  return array.reverse();
}

console.log(sliceTree(1,4));
console.log(sliceTree(1, 76));
console.log(sliceTree(2, 5));
console.log(sliceTree(5,4));

console.log(sliceTree(1,23));
console.log(sliceTree(1,22));
console.log(sliceTree(1,19));
