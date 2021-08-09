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
let result = [];
let produce = Object.values(obj);

produce.forEach(item => {
  if (item['type'] === 'fruit') {
    item['colors'].forEach(color => {
      console.log(item['colors']);
      console.log(color);
      result.push(color);
    });

  }
  else {
    result.push(item['size'].toUpperCase());
  }
});
console.log(result);
