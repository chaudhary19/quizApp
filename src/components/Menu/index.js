import React, { useContext } from 'react'
import '../../App.css';
import { GameContext } from '../../helper/Context';

function Menu(){

    const {gameState, setGameState, userName, setUserName} = useContext(GameContext);

    const clickHandler = () => {
        setGameState("playing");
    }

    return (
        <div className="Menu">
            <input 
            type="text" 
            placeholder="Enter Your Name" 
            onChange={(event) => {setUserName(event.target.value)}}
            onKeyDown={(event) => {if(event.code === "Enter") clickHandler()}}
            />
            <button onClick={clickHandler}>Start Quiz</button>
        </div>
    )
}

export default Menu;