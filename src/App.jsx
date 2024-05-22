import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Lgg';
import { useState } from 'react';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './components/winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
      console.log('rendering');
      if(gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      return currentPlayer;
}
function App() { 
  const [players,setPlayers] = useState({
    'X' : 'Player 1',
    'O' : 'Player 2'
  });
  // lift the state up to the closet ancestor (i.e app having two child gameboard and player) component that has access to all components that need to work with that state
  // ancestor passes the state value via props to the child component.
  // ancestor passes a fn that eventually changes the state via props to the child component. This allows the child component to initiate the state change.

  const [gameTurns,setGameTurns] = useState([]);

  
  // const [activePlayer,setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);
  let winner = null;
  let gameBoard = [...initialGameBoard.map(array=>[...array])];
  for ( const turn of gameTurns){
    const {square,player}=turn;
    const {row,col} = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((curAtivePlayer)=> curAtivePlayer === 'X'?'O':'X');
    setGameTurns((prevTunrs)=>{
      const currentPlayer = deriveActivePlayer(prevTunrs);

      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTunrs];

      return updatedTurns;
    });
  }
  function gameRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        { (winner || hasDraw ) && <GameOver winner={winner} gameReset={gameRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
