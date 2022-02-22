document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let button = document.querySelector('input[type="submit"]');
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    button.disabled = false;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let message;
    let guess = parseInt(input.value, 10);
    if (Number.isNaN(guess) || !Number.isInteger(guess)) {
      message = 'Please enter a number between 1 and 100';
      paragraph.textContent = message;
      return;
    }
    guesses += 1;

    if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
      button.disabled = true;
      // button.style.boxShadow = '0 0 0px 0px';
      // button.style.background = 'linear-gradient(to bottom, #e9e2e2 0%, #a78b8b 100%)';

    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `My number is higher than ${guess}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
