const readline = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
        console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
             (humanMove === 'paper' && computerMove === 'scissors') ||
             (humanMove === 'scissors' && computerMove === 'rock')) {
               console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },
  playAgain() {
    let answer = readline.question("Play again? y/n: ");
    return answer.toLowerCase() === "y" ? true : false;
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};
function createComputer() {
  let playerObject = createPlayer();
  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move =  choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}
function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;
      while (true) {
        choice = readline.question('Choose rock, paper, or scissors: ');
        if (['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };
  return Object.assign(playerObject, humanObject); // copies humanObject properties to playerObject properties, and returns playerObj.
}
// Extract out the "move" property that is common to both humans and computer factory functions
function createPlayer() {
  return {
    move: null,
  };
}


RPSGame.play();
