/*
class syntax for TTT
*/
let readline = require('readline-sync');

class Square {

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }
  toString() {
    return this.marker;
  }
  setMarker(marker) {
    this.marker = marker;
  }
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = 'X';
Square.COMPUTER_MARKER = 'O';


class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}  `);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}  `);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}  `);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

}

class Player {
  constructor(marker) {
    this.marker = marker;
  }
  getMarker() {
    return this.marker;
  }
}

class Score {

  constructor() {
    this.human = Score.INITIAL_SCORE;
    this.computer = Score.INITIAL_SCORE;
  }

  humanScores() {
    this.human += 1;
  }

  computerScores() {
    this.computer += 1;
  }

  display() {
    console.log("");
    console.log('-------------- SCORE BOARD -------------------');
    console.log(`Your score: ${this.human}`);
    console.log(`Computer's score: ${this.computer}`);
    console.log('----------------------------------------------');
  }

  reset() {
    this.human = Score.INITIAL_SCORE;
    this.computer = Score.INITIAL_SCORE;
  }
}
Score.INITIAL_SCORE = 0;

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}
class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.score = new Score();
  }
  play() {
    while (true) {
      console.clear();
      this.displayWelcomeMessage();

      this.playSingleMatch();
      this.displayMatchResults();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }

  playSingleMatch() {
    while (true) {
      this.board.display();
      this.playSingleRound();
      if (this.matchWinner()) break;
    }
  }

  playSingleRound() {
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;
      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }
    // post-game processing
    this.board.displayWithClear();
    this.displayResultsandScore();

    this.score.display();
    this.board = new Board();

  }

  resetGame() {
    this.board = new Board();
    this.score.reset();
    console.clear();
  }

  matchWinner() {
    if (this.score.human === TTTGame.WINNING_SCORE) return this.human;
    if (this.score.computer === TTTGame.WINNING_SCORE) return this.computer;
    return null;
  }

  playAgain() {
    while (true) {
      let answer = readline.question("Would you like to play again? (y/n): ");
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') return true;
      else if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
        return false;
      }
      console.log("Please type valid input (y/n) ?");
    }
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
    console.log(`First player that reaches ${TTTGame.WINNING_SCORE} wins!`);
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing!");
  }

  displayMatchResults() {
    let fireworks = `
                                   .''.
       .''.      .        *''*    :_\/_:     .
      :_\/_:   _\(/_  .:.*_\/_*   : /\ :  .'.:.'.
  .''.: /\ :   ./)\   ':'* /\ * :  '..'.  -=:o:=-
 :_\/_:'.:::.    ' *''*    * '.\'/.' _\(/_'.':'.'
 : /\ : :::::     *_\/_*     -= o =-  /)\    '  *
  '..'  ':::'     * /\ *     .'/.\'.   '
      *            *..*         :
        *                       :
        *`;
    if (this.matchWinner() === this.human) {
      console.log("");
      console.log(fireworks);
      console.log("Congratulations! You have thwarted the Computer!");
    } else if (this.matchWinner() === this.computer) {
      console.log("");
      console.log("Sorry...Computer bested you!");
    } else {
      console.log("No one won this time...");
    }
  }

  displayResultsandScore() {
    if (this.isWinner(this.human)) {
      console.log("You won this game!");
      this.score.humanScores();
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won!");
      this.score.computerScores();
    } else {
      console.log("A tie game. How boring.");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === TTTGame.THREE_IN_A_ROW;
    });
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;
      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  static joinOr(array, delimiter = ', ', conjunction = 'or') {
    return array.map((element, idx) => {
      if (array.length === 2) {
        return idx === array.length - 1 ? `${conjunction} ` + element : element;
      } else if (array.length === 1) {
        return `${element} is the only choice left...`;
      } else {
        return idx === array.length - 1 ? `${conjunction} ` + element : element + `${delimiter}`;
      }
    }).join("");
  }

  targetSquare(player) {
    for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[line];
      if (this.board.countMarkersFor(player, row) === 2) {
        let key =  row.find(key => this.board.squares[key].isUnused(), this);
        if (key) return key;
      }
    }
    return null;
  }

  offensiveMove() {
    return this.targetSquare(this.computer);
  }

  defensiveMove() {
    return this.targetSquare(this.human);
  }

  pickCenterSquare() {
    if (this.board.unusedSquares().includes(TTTGame.CENTER_SQUARE_KEY)) {
      return TTTGame.CENTER_SQUARE_KEY;
    }
    return null;
  }

  pickRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;
    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));
    return choice;
  }

  computerMoves() {
    let choice = this.offensiveMove();

    if (!choice) {
      choice = this.defensiveMove();
    }
    if (!choice) {
      choice = this.pickCenterSquare();
    }
    if (!choice) {
      choice = this.pickRandomSquare();
    }
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }
}
TTTGame.POSSIBLE_WINNING_ROWS = [
  [ "1", "2", "3" ],            // top row of board
  [ "4", "5", "6" ],            // center row of board
  [ "7", "8", "9" ],            // bottom row of board
  [ "1", "4", "7" ],            // left column of board
  [ "2", "5", "8" ],            // middle column of board
  [ "3", "6", "9" ],            // right column of board
  [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
  [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
];
TTTGame.WINNING_SCORE = 3;
TTTGame.THREE_IN_A_ROW = 3;
TTTGame.CENTER_SQUARE_KEY = "5";

let game = new TTTGame();
game.play();
