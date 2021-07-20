const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let USER_SCORE = 0;
let COMP_SCORE = 0;
let ROUND = 0;

function checkWinner() {
  if (ROUND < 3) {
    return false;
  } else if ((USER_SCORE === 3)) {
    console.log('You won best of 5!');
    return true
  }
    else if (COMP_SCORE === 3){
      console.log('Computer beat you!');
      prompt(`----------- FINAL SCORE ----------`);
      prompt(`USER: ${USER_SCORE}  COMPUTER: ${COMP_SCORE}`);
      return true;
  }
  else {
    return false;
  }

}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`ROUND: ${ROUND} USER: ${USER_SCORE} COMPUTER: ${COMP_SCORE}`);
  prompt("--------------");
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
    USER_SCORE += 1;
  } else if ((choice === 'scissors' && computerChoice === 'rock') || (choice === 'rock' && computerChoice === 'paper') || (choice === 'paper' && computerChoice === 'scissors')) {
    console.log("Computer wins!");
    COMP_SCORE += 1;
  } else {
    console.log('Its a tie!');
  }

  if (checkWinner()) {
    break;
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
  ROUND +=1;

}
