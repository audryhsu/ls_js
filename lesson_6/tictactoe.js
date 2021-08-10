const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
let human_score = 0;
let computer_score = 0;
let WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7] // diagonals
];
let FIRST_MOVE = '';
let FIRST_TURN = true;
let PREVIOUS_TURN;

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  // creates blank board
  let board = {};

  for (let square = 1; square <= 9; square++) {
    // board[String(square)] = INITIAL_MARKER;
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(array, deliminter = ', ', joinWord = 'or ') {
  let len = array.length;
  if (len === 0) return "";
  if (len === 1) return array[0];
  if (len === 2) return array.join(' ' + joinWord);
  let first = array.join(deliminter).slice(0, -3);
  let second = deliminter + joinWord + array[len - 1];

  return first + second;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    // let sq1 = WINNING_LINES[line][0];
    // let sq2 = WINNING_LINES[line][1];
    // let sq3 = WINNING_LINES[line][2];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  // if neither wins
  return null;

}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) {
      console.log(`Square is ${square}`);
      break;
    }
  }
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    console.log(`Square is ${square}`);
    square = emptySquares(board)[randomIndex];
    console.log(`Square is ${square}`);
  }
  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  // Find offensive square opportunity
  if (markersInLine.filter(val => val === COMPUTER_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  // Finding defensive square if no offensive move
  if (markersInLine.filter(val => val === HUMAN_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  // Else pick square #5
  if (board[5] === INITIAL_MARKER) return 5;

  return null;
}

function chooseSquare(board) {
  // First turn of the game
  if (FIRST_TURN) {
    FIRST_TURN = false;
    if (FIRST_MOVE === 'player') {
      PREVIOUS_TURN = 'player';
      return playerChoosesSquare(board);
    }
    if (FIRST_MOVE === 'computer') {
      PREVIOUS_TURN = 'computer'
      return computerChoosesSquare(board);
    }
    else {
      // Ask user who should go first
      FIRST_MOVE = readline.question('Who should go first? player or computer?\n');

      if (FIRST_MOVE === 'player') {
        PREVIOUS_TURN = 'player';
        return playerChoosesSquare(board);
      }
      if (FIRST_MOVE === 'computer') {
        PREVIOUS_TURN = 'computer'
        return computerChoosesSquare(board);
      }
    }
  }
  // Swap turns
  else {
    if (PREVIOUS_TURN === 'player') {
      PREVIOUS_TURN = 'computer';
      return computerChoosesSquare(board);
    }
    PREVIOUS_TURN = 'player';
    return playerChoosesSquare(board);
  }
}
function inputIsValid(input) {
  let validInputs = ['y', 'Y', 'n', 'N'];
  return validInputs.includes(input.trim());

}

  //////////// GAME PLAY //////////////////////

  while (true) {
    // Initialize empty board
    let board = initializeBoard();

    // Loop through gameplay
    while (true) {
      displayBoard(board);
      // Determine whose turn and make a move
      chooseSquare(board);
      // break if condition met -- someone wins or no more squares left
      if (someoneWon(board) || boardFull(board)) break;
    }
    displayBoard(board);

    // Declare winner
    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      if (detectWinner(board) === 'Player') human_score += 1;
      else {
        computer_score += 1;
      }
    } else {
      prompt("It's a tie!");
    }

    prompt(`--- SCORE BOARD ---
    HUMAN: ${human_score}
    COMPUTER: ${computer_score}
    --------------------
          `)

    let answer;
    do {
      answer = readline.question("Would you like to play again? Y/N ");
    } while (!inputIsValid(answer));

    if (answer.toLowerCase() === 'n') break;
  }
  prompt('Thanks for playing!');
