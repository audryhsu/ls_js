window.onload = function() {

  colorGeneration(4);

  function colorGeneration(level) {
    let elements = getGeneration(document.body, level);
    color(elements);
  }

  function color(elements) {
    elements.forEach(el => el.classList.add('generation-color');
    });
  }

  function getGeneration(element, level, targetElements = []) {

    for (let i = 0; i < element.children.length; i++) {
      if (level <= 1) {
        targetElements = targetElements.concat(Array.from(element.children)).flat()
        continue;
      }

      let childrenWithChildren = Array.from(element.children).filter(child => child.childElementCount >= 1);
      if (childrenWithChildren.length) {
        getGeneration(childrenWithChildren[i], level - 1, targetElements);
      }
    }
    return [...new Set(targetElements)];
  }
};

// LS solution - non recursive;

function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) color(elements);

  function color(elements) {
    elements.forEach((element, i) => {
      element.classList.add('generation-color');
    });
  }
  function getAllChildrenOf(parents) {
    let all = parents.map(({children}) => Array.prototype.slice
      .call(children)); // create a nested array of children for each parent
    console.log(all);
    console.log(all.flat());

    let collection = all.reduce((collection, children) => collection.concat(children), []); // flatten nested array into 1D of children
    console.log(collection);
  }
}

/*
Write a function that colors a specific generation of the DOM tree. A generation is a set of elements that are on the same level of indentation. We'll be using a "styled" HTML for this exercise to better visualize the generations. You may use the .generation-color class to color the specific generation. You can assume that only non-negative integers will be provided as arguments. Following are some sample output to help you test your code:

/*
p: color a generation of the dom
- 'generation': elements on same level of indentation, or siblings, or share the same direct parent
- add the .generation-color class to generation
input: integer that represents the number of indents away from the `body` tag
- also means body is nth grandparent, or getting children n times are the right generation
output:
rule:
4
- body get children at least 1 child, 4 gnerations
- child get children, at least 1 child, 3 generations
- child get children, 2 generations
- child get children, 1 generations
- get ids of this generation of children in an array
- for each id, add class .generation-color
algo:
- levels = 2, counter = 0;
- start with body element
  - get children elements with at least one child - ARTICLE
  - counter++ = 1
  - does 2 - 1 = 0? no
  - call getGeneration(child[i], 1) for HEADER, MAIN, FOOTER
    - get their children with children
    - counter ++ = 2
    - 2 - 2===0 ? yes:
      - get

    if yes,
  - repeat this for n times, counting down?
    - get element ids of children
*/
