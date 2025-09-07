import { useState } from "react";

export default function Player({playerName, playerSymbol, handlePlayerNameChange}){
    const [currentPlayerName, setCurrentPlayerName] = useState(playerName);
    const [isEditing, setIsEditing] = useState(false);


    function handleButtonOnClick(){
        setIsEditing((previousValue)=>!previousValue);
    }

    function handleOnChangeTextField(event) {
        setCurrentPlayerName(event.target.value)
        handlePlayerNameChange(playerSymbol, event.target.value);
    }

    let editablePlayerName = <span className="player-name">{currentPlayerName}</span>
    if(isEditing){
        editablePlayerName = (
            <input type="text" value={currentPlayerName} onChange={handleOnChangeTextField} ></input>
        )
    }

    return (
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleButtonOnClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    );
}