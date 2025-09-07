export default function GameOver({winner, rematchHandler}){
    return (
        <div id="game-over">
            <h2>Game Over!!</h2>
            {winner && <p>{winner} has won the game</p>}
            {!winner && <p>{winner} It's a draw!!</p>}
            <button onClick={rematchHandler}>Rematch!</button>
        </div>
    )
}