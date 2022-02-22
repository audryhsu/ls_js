/*
input: two element ids
output: true for valid swaps or undefined for invlaid
- invalid swap:
  - at least one id doesn't exist as a node
  - at least one node is a 'child' of another
- valid swaps: nodes must be of the same generation
  - children nodes follow the parent;
rule:
algo:

- check if nodes exist
- check if either node contains the other, if true, return undefined
- get parent of nodeA and nodeB
- get next siblings of nodeA and nodeB
  - if next sibling null, parent.append
  or parent.replace(node, targetNode)
- parentA.insert NodeB before next sibling element A
*/
document.addEventListener('DOMContentLoaded', () => {

  nodeSwap(3,1);
  nodeSwap(7,9);
  nodeSwap(9,3);

  function nodeSwap(id1, id2) {
    let nodeA = document.getElementById(id1);
    let nodeB = document.getElementById(id2);
    if (!nodeA || !nodeB || nodeA.contains(nodeB) || nodeB.contains(nodeA)) return undefined;

    let parentB = nodeB.parentElement;
    let siblingB = nodeB.nextElementSibling;

    nodeA.parentElement.insertBefore(nodeB, nodeA.nextElementSibling);
    parentB.insertBefore(nodeA, siblingB);
    // nodeA.nextElementSibling ? nodeA.parentElement.insertBefore(nodeB, nodeA.nextElementSibling) : nodeA.parentElement.appendChild(nodeB);
    // siblingB ? parentB.insertBefore(nodeA, siblingB) : parentB.appendChild(nodeA);
    return 'swapped';
  }

});
