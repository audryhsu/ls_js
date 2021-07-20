const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {

  prompt(`Choose: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Not a valid choice');
    choice = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choise ${choice}`);
  prompt(`Computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') || (choice === 'scissors' && computerChoice === 'paper') || (choice === ' scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') || (choice === 'rock' && computerChoice === 'paper') || (choice === 'paper' && computerChoice === 'scissors')) {
    console.log("Computer wins!");
  } else {
    console.log('Its a tie!');
  }

  prompt("Play again? y/n");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please submit valid answer.');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n' ) {
    break;
  }

}
