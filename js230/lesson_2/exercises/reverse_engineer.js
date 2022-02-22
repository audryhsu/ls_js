/*
Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.
*/
document.querySelector('html').addEventListener('click', () => {
  let container = document.querySelector('#container');
  if (container.contains(event)) container.style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  // event.stopPropagation(); replace this with an event delegation
  console.log(event.target.className, 'was clicked!');
});
