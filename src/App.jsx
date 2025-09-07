import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import Player from "./components/Player"
import { useState } from "react";
import GameOver from "./components/GameOver";

const startingStateOfBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function deriveCurrentGameBoard(gameTurns) {
  let newGameBoardState = [...startingStateOfBoard.map(row=>[...row])];
  for(let index in gameTurns) {
    let currentMove = gameTurns[index];
    newGameBoardState[currentMove.x][currentMove.y] = currentMove.player;
  }
  return newGameBoardState;
}

function determineWinner(currentGrid){
  for(let i=0;i<3;i++){
    if(currentGrid[0][i]===currentGrid[1][i] && currentGrid[1][i]===currentGrid[2][i]){
      return currentGrid[0][i];
    }
  }

  for(let i=0;i<3;i++){
    if(currentGrid[i][0]===currentGrid[i][1] && currentGrid[i][1]===currentGrid[i][2]){
      return currentGrid[i][0];
    }
  }

  if(currentGrid[0][0]==currentGrid[1][1] && currentGrid[2][2]===currentGrid[1][1]) {
    return currentGrid[0][0]
  }

  if(currentGrid[2][0]==currentGrid[1][1] && currentGrid[1][1]===currentGrid[0][2]) {
    return currentGrid[2][0]
  }

  return undefined
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [globalPlayers, setGlobalPlayers] = useState({
    "X": "Player 1",
    "Y": "Player 2"
  });
  const currentBoardState = deriveCurrentGameBoard(gameTurns)
  let winner = determineWinner(currentBoardState)
  let draw = (gameTurns.length==9 && winner!==undefined)

  console.log(winner, draw);

  function handleButtonClick(rowIdx, colIdx){
    let currentPlayer = "X";
    if(gameTurns.length>0 && gameTurns[0].player==="X"){
      currentPlayer = "O";
    }

    setGameTurns((currentMoves) => {
      return [{x:rowIdx, y: colIdx, player: currentPlayer},...currentMoves]
    });
  }

  function handlePlayerNameChange(whichPlayer, updatedName){
    setGlobalPlayers((currentPlayerInfo) => {
      return {
        ...currentPlayerInfo,
        [whichPlayer]: updatedName
      }
    })
  }

  function rematchHandler(){
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player handlePlayerNameChange={handlePlayerNameChange} playerName={globalPlayers.X} playerSymbol={'X'} />
          <Player handlePlayerNameChange={handlePlayerNameChange} playerName={globalPlayers.Y} playerSymbol={'0'} />
        </ol>
        <GameBoard currentBoardState={currentBoardState} handleButtonClick={handleButtonClick} />
      </div>
      {(winner || draw) && <GameOver winner={globalPlayers[winner]} rematchHandler={rematchHandler}/>}
      <Log gameMoves={gameTurns}/>
    </main>
  )
}

export default App
