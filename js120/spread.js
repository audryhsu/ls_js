let animals = [];

function add(...thing) {
  animals.push(...thing);
}


add('ok', 'two');

console.log(animals);
