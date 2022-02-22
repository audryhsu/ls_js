/*
- eventlistener on list items.
  - get href text to be the article id
  - select article id and apply highlight class
- click event listener on main
  - if event target was main, then highlight main
  - when article element or any of children clicked, add highlight class to article element
  - remove highlight on any other article element

href, use regex to find the #article-[0-9]
*/

document.addEventListener('DOMContentLoaded', (e) => {
  let main = document.querySelector('main');
  let navList = document.querySelector('ul');

  main.addEventListener('click', (e) => {
    let articles = document.querySelectorAll('article');
    let elementToHighlight;

    for (article of articles) {
      if (article.contains(e.target)) {
        elementToHighlight = article;
      }
    }
    elementToHighlight = !elementToHighlight ? main : elementToHighlight;
    console.log('thing to highlight:', elementToHighlight);

    addHighlight(elementToHighlight);
  });

  navList.addEventListener('click', (e) => {
    let articleId = e.target.href.match(/#article-[0-9]/)[0];
    let article = document.querySelector(articleId);
    addHighlight(article);
  });

});

function removeAllHighlight() {
  let nodeList = document.querySelectorAll('.highlight');
  for (node of nodeList) {
    node.classList.remove('highlight');
  }
}

function addHighlight(element) {
  removeAllHighlight();
  element.classList.add('highlight');
}
