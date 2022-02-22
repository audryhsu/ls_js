/*
Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.
*/

document.addEventListener('DOMContentLoaded', (e) => {
  let main = document.querySelector('main')
  let sub = document.querySelector('section')

  main.addEventListener('contextmenu', e => {
  e.preventDefault();
  // LS solution
  if (e.target === sub) {
      alert('sub!')
    } else if (e.target === main) {
        alert(`main!`)

});
  // Initial code
  // main.addEventListener('mouseup', (e) => {
  //   if (e.button === 2) {
  //     }
  //   }
  // });
});
