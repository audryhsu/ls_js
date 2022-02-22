document.addEventListener('DOMContentLoaded', () => {

  console.log(colorGeneration(2));

  function colorGeneration(targetLevel) {
    let currentLevel = 0;
    let parents = [document.body];
    let elements;

    while (currentLevel < targetLevel) {
      elements = getNextGeneration(parents);
      parents = elements;
      currentLevel++;
    }
    color(elements);
  }

  function getNextGeneration(parents) {
    let allChildren = parents.flatMap((parent, _) => {
      return Array.from(parent.children);
    });
    // console.log("next generation of children: ", allChildren);
    return allChildren;
  }

  function color(elements) {
    elements.forEach((el) => {
      el.classList.add('generation-color');
    });
  }

});
