const startingStateOfBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){
    console.log("Game board rendedered")
    

    function handleButtonClick(rowIdx, colIdx){
        console.log("executing function")
        startingStateOfBoard[rowIdx][colIdx] = "X";

        console.log(startingStateOfBoard);
    }

    return (
        <ol id="game-board">
            {startingStateOfBoard.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((currentCellValue, colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>handleButtonClick(rowIndex, colIndex)}>{currentCellValue}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}