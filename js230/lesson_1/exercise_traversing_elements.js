/*
Write some JavaScript code to retrieve a word count for each h2 heading on the page.
*/
let nodes = document.querySelectorAll('h2');
typeof nodes[0];
let lengths = [];
for (let i = 0; i < nodes.length; i++) {
  let wordCount = nodes[i].textContent.split(' ').length;
  lengths.push(wordCount);
}
lengths;

/*
The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc.

Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.
*/
// let c = document.querySelector('.toc')
// let id = document.querySelector('#toc')
let cid = document.querySelector('div .toc');
let c = document.getElementsByClassName('toc')[0];
document.getElementById('toc');

/*
Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.
*/
let toc = document.querySelector('div .toc');
let links = Array.from(toc.querySelectorAll('a'));
links.forEach((link, i) => {
  link.style.color = i % 2 === 1 ? 'green' : '';
});

/*
Write some JavaScript code to retrieve the text of every thumbnail caption on the page.
*/
let divs = document.querySelectorAll('div .thumbcaption');
let captions = Array.from(divs).map((div, _) => div.textContent.trim());

/*
You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.
*/

// each tr could have two td children, first td.textcont.trim is the classification, and the second td has an a tag with textcont

// get all the table rows in a list
// for each tr, get it's cells
// if cell.nodeName === 'TD'
// if td.textContent.cleaned is in classification, then add this and the nextElementSibling.text to the object.

let classification = ['Domain','Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
let table = document.querySelector('table');

// SOLUTION USING ARRAY METHODS
let trs = Array.from(table.rows); // live collection of all trs children/grandchildren elements of an HTMLTableElement object
let obj = {};

trs.forEach((row, i) => {
  let cells = Array.from(row.cells); // live HTMLCollection of cells in row
  cells.forEach((cell, j) => {
    if (cell.nodeName === 'TD') {
      let cleanedText = cell.textContent.replace(/[^a-z]/i, '');
      if (classification.includes(cleanedText)) {
        let tdValue = cell.nextElementSibling.textContent;
        obj[cleanedText] = tdValue;
      }
    }
  });
});
obj;

// SOLUTION USING FOR LOOPS
// let trs = table.rows // live collection of all trs children/grandchildren elements of an HTMLTableElement object;
// for (let i = 0; i < trs.length; i++) {
//   let cells = trs[i].cells;
//
//   for (let j = 0; j < cells.length; j++) {
//     if (cells[j].nodeName === 'TD') {
//       let td = cells[j]
//       let cleanedText = td.textContent.replace(/[^a-z]/i, '')
//       if (classification.includes(cleanedText)) {
//         let tdValue = td.nextElementSibling.textContent
//
//         obj[cleanedText] = tdValue;
//       }
//     }
//   }
// }
// obj;
