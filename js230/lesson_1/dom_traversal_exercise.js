function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

//chanage the etext color to red on On the River heading and set font size
let html = document.childNodes[1]; // skip doctype
let body = html.lastChild;         // skip head and text nodes
let heading = body.childNodes[1];  // skip text node
heading.style.color = 'red';
heading.style.fontSize = '48px';

// count the paragraphs on the page
let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);                              // 5
//

// Retrieve the first word from each paragraph on the page and log the entire list

let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    // let text = node.firstChild.data.trim();
    // let firstWord = text.split(' ')[0];
    let firstWord = node.textContent.match(/\b\w+\b/)[0];
    words.push(firstWord);
  }
});

console.log(words);  // ["A", "The", "The", "Where", "And"]

// Add the class `stanza` to each paragraph except the first

let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});

// Count the images on the page, then count the PNG images. Log both results.
let imageCount = 0;
let images = [];
walk(document, node => {
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});
images.length; // count of all all <img> element tags
let srcs = images.filter(img => img.getAttribute('src').match(/png$/i)); // <img> tags have a src attribute that point you to source file. find the ones that end with 'png'.

// Change the link color to red for every link on the page.
//get all anchor tags, access class, update style
let anchors = [];

walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});
