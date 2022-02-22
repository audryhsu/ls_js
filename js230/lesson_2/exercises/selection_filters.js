/*
Create copies of the #animal-classifications and #animals elements to preserve default values
Use two event listeners: one to delegate events on #selection-filters, and one on the #clear button

Whenever a classification value is selected, invoke getAnimalsList to return list of appropriate animals.
- Remove all children nodes from animals selection.
- dynamically re-create options based on filtered animals list.

Used same Algorithm for animals filter list.

To reset default options:
- Replace the #animal-classification node with the copy
- Replace the #animals node with the copy

*/

document.addEventListener('DOMContentLoaded', (e) => {
  let classifications = document.querySelector('#animal-classifications');
  let animals = document.querySelector('#animals');
  let clearBtn = document.querySelector('#clear');

  // Create copies to preserve default values
  let classCopy = classifications.cloneNode(true);
  let animalsCopy = animals.cloneNode(true);

  document.querySelector('#selection-filters').addEventListener('change', (e) => {
    if (e.target === classifications) {
      removeAllChildren(animals);
      let animalsList = getAnimalsList(e.target.value);
      createOptions(animals, animalsList);

    } else if (e.target === animals) {
      removeAllChildren(classifications);
      let classList = getClassificationsList(e.target.value);
      createOptions(classifications, classList);
    }
  });

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // replace nodes with copied version
    resetOptions(classifications, classCopy);
    resetOptions(animals, animalsCopy);

    // reassign variables to new nodes
    classifications = document.querySelector('#animal-classifications');
    animals = document.querySelector('#animals');

    // clone new nodes again
    classCopy = classifications.cloneNode(true);
    animalsCopy = animals.cloneNode(true);
  });
});

function removeAllChildren(node) {
  for (let i = node.children.length - 1; i >= 0; i--) {
    node.removeChild(node.children[i]);
  }
}

function createOptions(element, optionsList) {
  optionsList.forEach((option, i) => {
    let node = document.createElement('OPTION');
    node.value = option;
    node.textContent = option;
    element.appendChild(node);
  });
}

function resetOptions(node, nodeCopy) {
  let parent = node.parentElement;
  parent.replaceChild(nodeCopy, node);
}

function getClassificationsList(selection) {
  let options;
  switch (selection) {
    case 'Bear':
      options = ['Vertebrate', 'Warm-blooded', 'Mammal'];
      break;
    case 'Turtle':
      options = ['Vertebrate', 'Cold-blooded'];
      break;
    case 'Whale':
      options = ['Vertebrate', 'Warm-blooded', 'Mammal'];
      break;
    case 'Salmon':
      options = ['Vertebrate', 'Cold-blooded'];
      break;
    case 'Ostrich':
      options = ['Vertebrate', 'Warm-blooded', 'Bird'];
      break;
  }
  return options;

}

function getAnimalsList(selection) {
  let options;
  switch (selection) {
    case 'Vertebrate':
      options = ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'];
      break;
    case 'Warm-blooded':
      options = ['Bear', 'Whale', 'Ostrich'];
      break;
    case 'Cold-blooded':
      options = ['Salmon', 'Turtle'];
      break;
    case 'Mammal':
      options = ['Bear','Whale'];
      break;
    case 'Bird':
      options = ['Ostrich'];
      break;
  }
  return options;
}
