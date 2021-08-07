let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(dict) {
  let onlyProduce = [];
  arr = Object.entries(dict);
  arr.forEach((item, i) => {
    console.log(item, i);
  });

  for (let i = 0; i < arr.length; i++){
    if (arr[i][1] === 'Fruit') {
      onlyProduce.push(arr[i]);
    }
  }
  return Object.fromEntries(onlyProduce);
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
