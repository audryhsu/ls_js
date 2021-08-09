let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// return array
// loop through obj values
//
let result = Object.values(obj).map(item => {
  // let arr = Object.values(item);
  if (item['type'] === 'fruit') {
    return item['colors'].map(color => color[0].toUpperCase() + color.slice(1));
  }
  else {
    return item['size'].toUpperCase();
  }
})


// console.log(produce);
console.log(result);
