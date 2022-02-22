/*
html: https://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html
*/

/*
Use JavaScript to set a class of 'heading' to the heading (the h1 element).
*/
document.querySelector('h1').classList.add('heading');
document.getElementById('primary_heading').setAttribute('class','heading');

/*
Use JavaScript to set the class of the ul element to 'bulleted'.
*/
document.getElementById('list').setAttribute('class', 'bulleted');

/*
Use the Inspector to find the hidden element and determine its ID. Following this, set the onclick property on the link with an ID of toggle to a function that makes the element visible when it's hidden and hides it when it's visible. You can use getAttribute to access the class, and setAttribute to set it; the class names of interest are 'visible' and 'hidden'.

Your function should take a single argument, e. The first line of your function should invoke e.preventDefault. We'll discuss this later when we talk more about events, but, for now, just be aware that preventDefault tells your browser that it shouldn't try to follow the link.
*/
document.getElementById('toggle').onclick = (e) => {
  e.preventDefault();
  let hiddenElement = document.getElementById('notice');

  if (hiddenElement.getAttribute('class') === 'hidden') {
    hiddenElement.setAttribute('class', 'visible');
  } else {
    hiddenElement.setAttribute('class', 'hidden');
  }
};

/*
Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to 'hidden'. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke e.preventDefault.
*/
let p = document.getElementById('notice').firstElementChild;
p.onclick = (e) => {
  e.preventDefault();
  if (p.parentElement.getAttribute('class') === 'visible') {
    p.setAttribute('class', 'hidden');
  }
  p.parentElement.setAttribute('class', 'hidden');
  p.setAttribute('class', 'visible');
};
/*
Locate the multiplication paragraph and change the text to the result of the arithmetic problem.
*/
document.getElementById('multiplication').textContent = String(13 * 9);
/*
Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.
*/
document.querySelector('body').setAttribute('id', 'styled');
