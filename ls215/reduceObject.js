/*
count occurences of each letter from letters array using reduce
*/
let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
let letters = names.map(name => name[0]);
// letters is [ "H", "G", "K", "H", "K", "K", "O" ]

let counts = letters.reduce((obj, letter) => {
  //check if letter object
  if (!obj[letter]) {
    obj[letter] = 1;
  } else {
    obj[letter] += 1;
  }
  return obj;
}, {});

console.log(counts); //{ H: 2, G: 1, K: 3, O: 1 }

// find letter that occurs most using reduce
let most =  Object.keys(counts).reduce((acc, letter, currentIndex) => {
  if (counts[letter] > counts[acc]) {
    acc = letter;
  }
  return acc;
});

console.log(most); // K
