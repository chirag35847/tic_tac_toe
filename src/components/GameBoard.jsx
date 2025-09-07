export default function GameBoard({currentBoardState, handleButtonClick}){
    return (
        <ol id="game-board">
            {currentBoardState.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((currentCellValue, colIndex)=>(
                            <li key={colIndex}>
                                <button disabled={currentCellValue!=null} onClick={()=>handleButtonClick(rowIndex, colIndex)}>{currentCellValue}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}