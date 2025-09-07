export default function Log({gameMoves}){

    return (
        <ol id="log">
            {gameMoves.map((move)=>{
                return (
                    <li key={`${move.x}-${move.y}`}>
                        {move.player} has made a move at {move.x}, {move.y}
                    </li>
                )
            })}
        </ol>
    )
}