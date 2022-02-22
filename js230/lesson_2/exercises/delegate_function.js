/*
if element doesn't exist in dom, return undefined
if element does exist, and selector is a child of parent, and event listener added, return true
event handler should be attached to parent, but only be triggered when child element target is clicked on
- stop propogation
*/

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

function delegateEvent(parent, selector, eventType, callbackFn) {
  if (!parent) return undefined;

  parent.addEventListener(eventType, (e) => {
    targets = parent.querySelectorAll(selector); // needs to be inside the eventlistener to capture the latest elements added to the parent whenever the event occurs

    if (Array.from(targets).includes(e.target) && e.target !== parent) {
      callbackFn(event);
    }
  });

  return true;
}


document.addEventListener('DOMContentLoaded', (e) => {
  // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  // console.log(delegateEvent(element1, 'p', 'click', callback)); //undefined
  // console.log(delegateEvent(element2, 'p', 'click', callback)); // callback never triggered because p isn't child of h1
  // console.log(delegateEvent(element2, 'h1', 'click', callback)); // callback doesn't trigger, but adds el to h1
  // console.log(delegateEvent(element3, 'h1', 'click', callback)); // h1 triggers event from main
  // console.log(delegateEvent(element3, 'aside p', 'click', callback)); // aside p triggers alert
  //
  // 6
  console.log(delegateEvent(element2, 'p', 'click', callback)); // return true/
  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);
  element2.appendChild(newP);
  // p new paragraph triggers alert


});
