import Player from './components/Player';
function App() { 
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="x"/>
          <Player name="Player 2" symbol="o"/>
        </ol>
        Game Board
      </div>
      Log
    </main>
  )
}

export default App
