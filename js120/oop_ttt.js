/*
class syntax for TTT
*/
let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

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

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <=9; counter+= 1) {
      this.squares[String(counter)] = new Square();
    };
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
      return this.squares[key].getMarker() === player.getMarker()
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

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER)
  }
}
class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER)
  }
}

class TTTGame {
    constructor() {
    // need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }
  play() {
    console.clear();
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      while (true) {
        this.humanMoves();
        if (this.gameOver()) break;
        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();

      }
      this.board.displayWithClear();
      this.displayResults();
      if (!this.playAgain()) break;
      else {
        this.board = new Board();
        console.clear();
      }
    }
    this.displayGoodbyeMessage();
  }

  playAgain() {
    while (true) {
      let answer = readline.question("Would you like to play again? (y/n): ")
      if (answer.toLowerCase()[0] === 'y') return true;
      else if (answer.toLowerCase()[0] === 'n') {
        return false;
      }
      console.log("Please type valid input (y/n) ?");
    }
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing!");
  }

  displayResults() {
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
    if (this.isWinner(this.human)) {
      console.log(fireworks);
      console.log("");
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) ===3
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

     this.board.markSquareAt(choice, this.human.getMarker())
   }

   static joinOr(array, delimiter= ', ', conjunction= 'or') {
     return array.map((element, i) => {
       if (array.length === 2) {
         return i === array.length - 1 ? `${conjunction} ` + element : element;
       } else if (array.length === 1) {
         return `${element} is the only choice left...`;
       } else {
         return i === array.length - 1 ? `${conjunction} ` + element : element + `${delimiter}`
       }
     }).join("");
   }

   offensiveMove() {
     // returns square of key
     for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
      if (this.board.countMarkersFor(this.computer, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 2) {
        let row = TTTGame.POSSIBLE_WINNING_ROWS[line];
        let key =  TTTGame.POSSIBLE_WINNING_ROWS[line].find(key => this.board.squares[key].isUnused(), this);
        return key;
      }
    }
      return null;
   }

   defensiveMove() {
     for (let line = 0; line < TTTGame.POSSIBLE_WINNING_ROWS.length; line++) {
       if (this.board.countMarkersFor(this.human, TTTGame.POSSIBLE_WINNING_ROWS[line]) === 2) {
         return TTTGame.POSSIBLE_WINNING_ROWS[line].find(key => this.board.squares[key].isUnused(), this);
       }
     }
     return null;
   }

  computerMoves() {
    let choice = this.offensiveMove();
    let middleSquareKey = "5";
    console.log("CHOICE AT 234:", choice);

    if (!choice) {
      choice = this.defensiveMove();
      console.log("CHOICE AT 239:", choice);
    }
    if (!choice) {
      if (this.board.unusedSquares().includes(middleSquareKey)) {
        choice = middleSquareKey;
        console.log("CHOICE AT 244:", choice);
      } else {
        let validChoices = this.board.unusedSquares();
        console.log("VALID CHOICES:", validChoices);
        do {
          choice = Math.floor((9 * Math.random()) + 1).toString();
        } while (!validChoices.includes(choice));
      }
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

let game = new TTTGame();
game.play();
