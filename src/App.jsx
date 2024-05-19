import GameBoard from './components/GameBoard';
import Player from './components/Player';
import { useState } from 'react';

function App() { 
  // lift the state up to the closet ancestor (i.e app having two child gameboard and player) component that has access to all components that need to work with that state
  // ancestor passes the state value via props to the child component.
  // ancestor passes a fn that eventually changes the state via props to the child component. This allows the child component to initiate the state change.

  const [activePlayer,setActivePlayer] = useState('O');

  function handleSelectSquare(){
    setActivePlayer((curAtivePlayer)=> curAtivePlayer === 'X'?'O':'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      Log
    </main>
  )
}

export default App
