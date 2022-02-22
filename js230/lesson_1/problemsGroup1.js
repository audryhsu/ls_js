function findAllParagraphs() {
  let nodes = document.body.childNodes
  let matches = [];

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName === 'P') matches.push(nodes[i])
  }
  return matches;
}

// LS solution
function findAllParagraphs() {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index] instanceof HTMLParagraphElement) {
      matches.push(nodes[index]);
    }
  }

  return matches;
}
console.log(findAllParagraphs());

// Write a JavaScript function that adds the class article-text to every <p> tag in this HTML with paragraphs nested inside divs

function walk(node, callback) {
  callback(node)
  for (let i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback)
  }
}
let p = [];
walk(document.body, node => {
  if (node instanceof HTMLParagraphElement) {
    p.push(node)
  }
})
p.forEach((node, i) => {
  node.classList.add('article-text')
});

// Ls solution
function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add("article-text");
  }

  let nodes = node.childNodes;
  for (let index = 0; index < nodes.length; index += 1) {
    addClassToParagraphs(nodes[index]);
  }
}

addClassToParagraphs(document.body);

/*
Refactor breaking out the tree walk and modification of class. Using this task breakdown, rewrite the solution to the first problem. The core of your solution should be a function named getElementsByTagName that returns an array of all elements with a given tag name. You should then add the CSS class article-text to each paragraph in the array.
*/
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementsByTagName(node, tagName) {
  let matches = [];

  walk(node, node => {
    if (node instanceof tagName) {
      matches.push(node)
    }
  })
  return matches;
}

getElementsByTagName(document.body, HTMLParagraphElement).forEach((node, i) => node.classList.add('article-text'));

// [p.article-text, p.article-text, p.article-text, p.article-text, p.article-text, p.article-text]


// Use the built in method to get all paragraphs and update their class
document.getElementsByTagName('P')

// Let's make the previous problem more realistic. Instead of adding the article-text class to every paragraph on the page, let's restrict it to only the paragraphs inside a <div class="intro"> tag. How can we do this? Keep in mind that you can call getElementsByClassName and getElementsByTagName on any element; document is handiest when you need all matching elements from the page, but you can use any other element if you don't need everything on the page.

// Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.
let divs = document.getElementsByClassName('intro') // get all divs in 'intro' class
for (let i = 0; i < divs.length; i++) {
  let paragraphs = divs[i].getElementsByTagName('P')

  for (let j = 0; j < paragraphs.length; j++) {
    console.log(paragraphs[j]);
    paragraphs[j].classList.add('article-text')
  }

}

// rewrite using query Selectors
let paragraphs = document.querySelectorAll('.intro p')
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('article-text')
}
