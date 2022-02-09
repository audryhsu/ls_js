/*
Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.
*/

/*
problem: evaluate if array left to right or right to left provides higher "seen" trees
"hidden" tree - tree is shorter or same height as the tree in front
- a tree is in front if it's height comes first in ordered array.
- seen tree means current tree is shorter than next tree
  - current height < next height
input: array of tree heights ( numbers or floats )
  - only numbers are valid, excluding NaNs

questions:
- sparse?
- mixed dtypes? assume always given numbers
- assume heights are always > 0
output:
rule:
 - height current tree <= front tree-- "hidden"
 - height ct > front trees (ANY OF  THEM) -- seen, add to count
  - compare height to largest previous height
algo:
- evaluate array and get count of seen trees
- reverse array, get count of seen trees
- return left or right (if count trees reversed > non-reversed)
ds:
- validate array input
- iterate through heights, treeCount
  - i=0 is always seen
  - i1, i > i - 1?
  - is current tree
    - if yes, increment treeCount by one
- reverse array, do the same thing.
*/
function treePhotography(heights) {
  if (heights.some(height => height < 0 || Number.isNaN(height) || typeof height !== 'number')) return null;
  let left = countTrees(heights);
  let right = countTrees(heights.reverse());

  return left > right ? "left" : "right";
}

function countTrees(array) {
  let count = 1;
  let prevTreeIndex = 0;
  for (let i = 1; i < array.length; i++) {

    if (array[i] > array[prevTreeIndex]) {
      prevTreeIndex = i;
      count++;
    }
  }
  return count;
}
//
// console.log(
//   treePhotography([1, 3, 6, 5]) === "left");
// // If I stand on the left, I can see trees of heights 1, 3 and 6.
// // If I stand on the right, I can see trees of heights 5 and 6.
// // Return "left" because I would see more trees.
// console.log(treePhotography([5, 6, 5, 4]) === "right");
// console.log(
//   treePhotography([1, 2, 3, 3, 3, 3, 3]) === "left");
// console.log(
//   treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) === "left");
// console.log(treePhotography([1,1,0.5]) === "right");
// console.log(treePhotography([1,2]) === "left");
// console.log(treePhotography([1,2,2,2,2,1,3]) === "left");
// console.log(treePhotography(['a', 'b']) === null);
// console.log(treePhotography([NaN, 1, false]) === null);

console.log(treePhotography([3, 1, 4, 5, 2, 5, 1]) === 'left');
console.log(treePhotography([1, 2, 4, 1, 5, 3, 1]) === 'left');
