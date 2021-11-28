import React, { useContext } from 'react'
import {GameContext} from '../../helper/Context';
import '../../App.css'
import {Questions} from '../../helper/Questions';

function Finished(){

    const {userName, score, setGameState, gameState, setScore, setUserName} = useContext(GameContext);

    const RestartGame = () => {
        setGameState("menu");
        setScore(0);
        setUserName("");
    }

    return (
        <div className="Finished">
            <h1>{userName} scored {score} out of {Questions.length}</h1>
            <button onClick={() => {RestartGame()}}>Restart the Quiz!</button>
        </div>
    )
}

export default Finished;