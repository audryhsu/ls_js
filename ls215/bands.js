/*
input: array of band objects
output: array of band objects with formatting fixes
rule:
- sentence case band names
- update country property to 'Canada'
- find and replace any '.' with '' in band name
algo:
- process each band ==> helper fun
  - update country
  - process name
    - find and replace periods
    - split band name into words, capitalize first letter of each word
      - build new string with capitalized words
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map((band, index) => processBand(band));
}

function processBand(band) {
  band.name = band.name.replace(/\./, '');

  let capitalizedName = band.name.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  band.name = capitalizedName;
  band.country = 'Canada';
  return band;
}


console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
