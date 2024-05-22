import { useState } from "react";


export default function GameBoard({onSelectSquare,board}) {
  /* let gameBoard = initialGameBoard;
  for ( const turn of turns){
    console.log(turn);
    const {square,player}=turn;
    const {row,col} = square;
    gameBoard[row][col] = player;
  } */
  // const [gameBoard,setGameBoard] = useState(initialGameBoard);
  //  function handleSelectSqaure(rowIndex,colIndex){
  //       setGameBoard((preGameBoard)=>{
  //           // objects and array(which technically are objects) are reference values in Javascript. We should therfore not mutate them directly - instead create (deep) copy first (an immutable way). Because if your state is array or an object you are dealing with reference value in Javascript.
  //           // preGameBoard[rowIndex][colIndex]= 'x'; cant use like this directly 
  //           const updatedBoard = [...preGameBoard.map(innerArray=>[...innerArray])];
  //           updatedBoard[rowIndex][colIndex]= activePlayerSymbol;
  //           return updatedBoard;
  //       });
  //       onSelectSquare();
  //  }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={()=>handleSelectSqaure(rowIndex,colIndex)}>{playerSymbol}</button> */}
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled = {playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
