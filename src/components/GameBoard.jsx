import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
   const [gameBoard,setGameBoard] = useState(initialGameBoard);
   function handleSelectSqaure(rowIndex,colIndex){
        setGameBoard((preGameBoard)=>{
            /* // objects and array(which technically are objects) are reference values in Javascript. We should therfore not mutate them directly - instead create (deep) copy first (an immutable way). Because if your state is array or an object you are dealing with reference value in Javascript.
            // preGameBoard[rowIndex][colIndex]= 'x'; cant use like this directly */
            const updatedBoard = [...preGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]= 'x';
            return updatedBoard;
        });
   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSqaure(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
