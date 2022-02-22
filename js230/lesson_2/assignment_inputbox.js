// document.addEventListener('DOMContentLoaded', (e) => {
//   let textfield = document.querySelector('.text-field');
//   let content = document.querySelector('.content');
//   let id;
//   let focusedTextField;
//
//
//   textfield.addEventListener('click', (e) => {
//     e.stopPropagation();
//     textfield.classList.toggle('focused', true);
//     focusedTextField = true;
//
//     id = id || setInterval(() => {
//       textfield.classList.toggle('cursor');
//     }, 500);
//
//   });
//
//   document.addEventListener('keyup', (e) => {
//     console.log('keyup');
//     if (focusedTextField) {
//       if (e.key === 'Backspace') {
//         content.textContent = content.textContent.substring(0,content.textContent.length - 1);
//       } else if (e.key.length === 1) {
//         content.textContent += e.key;
//       }
//     }
//   });
//   document.addEventListener('click', (e) => {
//     clearInterval(id);
//     textfield.classList.remove('focused', 'cursor');
//     focusedTextField = null;
//     id = null;
//   });
//
// });
document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector(".text-field");
  var content = document.querySelector('.content');

  textField.addEventListener('click', function(event) {
    // event.stopPropagation();
    console.log('textfield event listener fired');
    this.classList.add('focused');
  }, true);

  document.addEventListener('click', function() {
    console.log('document event listener fired');
    var textField = document.querySelector(".text-field");
    textField.classList.remove('focused');
  }, true);
});
