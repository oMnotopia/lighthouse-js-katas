const generateBoard = (whiteQueen, blackQueen) => {
  const boardWidth = 8;
  const boardHeight = 8;
  let gameBoardRow = [];
  let gameBoard = [];
  for(let i = 0; i < boardHeight; i++){
    for(let j = 0; j < boardWidth; j++){
      if(whiteQueen[0] === i && whiteQueen[1] === j) gameBoardRow.push(1)
      else if (blackQueen[0] === i && blackQueen[1] === j) gameBoardRow.push(1)
      else gameBoardRow.push(0);
    }
    gameBoard.push(gameBoardRow);
    gameBoardRow = [];
  }
  return gameBoard
}

const queenThreat = (board) => {
  let queen1;
  let queen2;
  //Find location of queens.
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board.length; j++ ){
      if(board[i][j] === 1){
        if (!queen1) queen1 = [i, j];
        else queen2 = [i, j]
      }
    }
  }

  //Assinging height and width values to each queen so position can be used to check for attacking queens.
  let queen1YPosition = queen1[0];
  let queen1XPosition = queen1[1];
  let queen2YPosition = queen2[0];
  let queen2XPosition = queen2[1];

  //Check vertical
  if(queen1YPosition === queen2YPosition) return true

  //check horizontal
  if(queen1XPosition === queen2XPosition) return true

  //check diagonal
  for(let i = 0; i < board.length; i++){
    if(queen1XPosition + i === queen2XPosition && queen1YPosition + i === queen2YPosition) return true
    if(queen1XPosition - i === queen2XPosition && queen1YPosition - i === queen2YPosition) return true
    if(queen1XPosition + i === queen2XPosition && queen1YPosition - i === queen2YPosition) return true
    if(queen1XPosition - i === queen2XPosition && queen1YPosition + i === queen2YPosition) return true
  }

  //Queens on attacking line are not found
  return false  
}

let whiteQueen = [7, 7];
let blackQueen = [1, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard, whiteQueen, blackQueen));