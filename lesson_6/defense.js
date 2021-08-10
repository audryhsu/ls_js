let winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];


//determine if immediate threat exists by checking board against winning lines 
// loop through each winningLines
// if 2 consecutive squares occupied by 'X'
  // defend third square (empty one in subArr)
// else let computer take normal turn

function defendThreat(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3 ] = winningLines[line];
    if (sq1 && sq2 ==='HUMAN_MARKER' || sq2 && sq3 === 'HUMAN_MARKER') {
      //Threat exists
      let square = winningLines.filter(key => key === INITIAL_MARKER);
      console.log(square);
      board[square] = COMPUTER_MARKER;
      return true;
    }
  }
  // No immediate threat
  return false;
}

//rows
1,2 --> 3 or 2,3 --> 1
4,5 or 5,6
7,8 or 8,9

// columns
1,4 or 4,7..

// diagnols
1,5 or 5,9

pattern --> subArr[0] && subArr[1] || subArr[1] && subArr[2]
