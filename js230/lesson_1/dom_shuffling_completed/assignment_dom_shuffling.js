/*
move the figure tag and children as third child under article tag
  first figure tag, first img tag should be chin stick
  second figure, nested img tag is baby mop

body color to green
chin stick photo first with caption underneath
*/

let headers = document.querySelectorAll('header');
let headerToInsert = headers[headers.length - 1];
// append to parent
document.body.insertBefore(headerToInsert, document.body.firstElementChild);

// nest under header as first chlid
let h1 = document.querySelector('h1');
headerToInsert.insertBefore(h1, headerToInsert.firstElementChild);

// can also use array destructuring
//let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");
let figures = document.querySelectorAll('figure');
let targetFig = figures[1];
let secondFig = figures[0];

let article = document.querySelector('article');
article.appendChild(targetFig);
article.appendChild(secondFig);

let captions = document.querySelectorAll('figcaption');

targetFig.appendChild(captions[1]);
secondFig.appendChild(captions[0]);
