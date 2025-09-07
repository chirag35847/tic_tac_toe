import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={'Player 1'} playerSymbol={'X'} />
          <Player playerName={'Player 2'} playerSymbol={'0'} />
        </ol>
        <GameBoard/>
      </div>
      Log
    </main>
  )
}

export default App
