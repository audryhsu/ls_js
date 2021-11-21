const readline = require('readline-sync');
let WINNING_SCORE = 1;

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  scoreBoard: createScoreBoard(),
  finalWinner: null,
  moveLog: [],
  roundNumber: 1,

  displayWelcomeMessage() {
    console.log('');
    console.log('Welcome to Rock, Paper, Scissors!');
    console.log('**********************************');
  },
  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    this.moveLog.push(`Round ${this.roundNumber}: You chose: ${humanMove} || Computer chose: ${computerMove}`);
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      return "human";
    } else if ((humanMove === 'rock' && computerMove === 'paper') || (humanMove === 'paper' && computerMove === 'scissors') ||  (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      return "computer";
    } else {
      console.log("It's a tie");
      this.roundNumber += 1;
      return "tie";
    }
  },
  playAgain() {
    let answer = readline.question("Play again? y/n: ");
    return answer.toLowerCase()[0] === "y";
  },
  showMoveLog() {
    console.log(``);
    console.log(`***`);
    console.log(`-----Audit log of moves-----`);
    this.moveLog.forEach(round => {
      console.log(round);
    });
    console.log(`***`);
  },

  play() {
    while (true) {
      this.finalWinner = null;
      this.moveLog = [];
      this.roundNumber = 1;
      this.scoreBoard.clearScores();
      this.displayWelcomeMessage();

      while (!this.scoreBoard.playerWonGame()) {
        this.human.choose();
        this.computer.choose();
        let winner = this.displayWinner();
        if (winner === "human") {
          this.scoreBoard.updateScore('human');
        } else if (winner === "computer") {
          this.scoreBoard.updateScore('computer');
        }
        this.scoreBoard.displayBoard();
      }

      console.log(`Game over! ${this.finalWinner} won it all!`);
      this.showMoveLog();
      if (!this.playAgain()) break;
      console.clear();
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
function createPlayer() {
  return {
    move: null,
  };
}

function createScoreBoard() {
  return {
    score: {human: 0, computer: 0},

    updateScore(winner) {
      this.score[winner] += 1;
    },
    displayBoard() {
      console.log(`--------------SCOREBOARD-----------------`);
      console.log(`YOU: ${this.score['human']} | COMPUTER: ${this.score['computer']}`);
      console.log(`------------------------------------------`);
    },
    playerWonGame() {
      if (this.score['human'] === WINNING_SCORE) {
        RPSGame.finalWinner = 'You';
        return true;
      } else if (this.score['computer'] === WINNING_SCORE) {
        RPSGame.finalWinner = 'Computer';
        return true;
      }
      return false;
    },
    clearScores() {
      this.score = {human: 0, computer: 0};
    },
  };
}

RPSGame.play();
