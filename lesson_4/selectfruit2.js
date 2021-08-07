let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruit = {};

  for (let i = 0; i < produceKeys.length; i++) {
    let currentKey = produceKeys[i];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruit[currentKey] = currentValue;
    }
  }
  return selectedFruit;

}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
selectFruit(produce)
