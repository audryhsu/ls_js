/*
Implement a function that makes an element bold and allows the user of the function to optionally do something else with it.

*/
// FE - create a new custom event bolded and add a listener for when an element is bolded from the makeBold function

function makeBold(element, callback) {
  if (typeof callback === 'function') callback(element);
  element.style.fontWeight = 'bold';
  console.log(`${element.nodeName} was bolded!`);

  let bolded = new CustomEvent('bolded', {bubbles:true});

  // let bolded = new CustomEvent('bolded'); // without bubbles, the event doesn't get bubbled up to the document element that is listening
  element.dispatchEvent(bolded); // fires custom bolded event
}

document.addEventListener('DOMContentLoaded', (e) => {
  let sectionElement = document.querySelector('section');

  // event listener for custom 'bolded' event
  document.addEventListener('bolded', (e) => {
    alert(`${e.target.nodeName} fired the event`);
  });

  document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'SECTION' || e.target.nodeName === 'P') {
      makeBold(e.target, function(elem) {
        elem.classList.add('highlight');
      });
    }
  });
});


/*
You can get the same behavior as the above solution by creating your own custom event. For this further exploration exercise, create your own CustomEvent called bolded that allows the user to add it as the type of event to listen to.

console.log(sectionElement.classList.contains('highlight'));
//true
console.log(sectionElement.style.fontWeight);
//"bold"
*/
