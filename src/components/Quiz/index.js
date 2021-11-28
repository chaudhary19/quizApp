import { useState, useContext } from 'react'
import '../../App.css'
import {Questions} from '../../helper/Questions';
import {GameContext} from '../../helper/Context';

function Quiz(){

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("");
    // const [score, setScore] = useState(0);

    const {score, setScore, gameState, setGameState} = useContext(GameContext);

    const chooseOption = (option) => {
        setOptionChosen(option);
        if(option === Questions[currentQuestion].answer){
            setScore(score+1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const changeGameState = () => {
        setGameState("finished");
    }

    return (
        <div className="Quiz">
            { currentQuestion < Questions.length && (
                <>
                    <h3>{Questions[currentQuestion].prompt}</h3>
                    <button onClick={() => {chooseOption("optionA")}}>{Questions[currentQuestion].optionA}</button>
                    <button onClick={() => {chooseOption("optionB")}}>{Questions[currentQuestion].optionB}</button>
                    <button onClick={() => {chooseOption("optionC")}}>{Questions[currentQuestion].optionC}</button>
                    <button onClick={() => {chooseOption("optionD")}}>{Questions[currentQuestion].optionD}</button>
                </>
                )
            }
        {/* {currentQuestion === Questions.length && <h2>You scored {score}</h2>} */}
        {currentQuestion === Questions.length ? changeGameState() : null}
        </div>
    )
}

export default Quiz;