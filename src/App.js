import React, { useState } from 'react'
import './App.css';
import Menu from './components/Menu/index'
import { GameContext } from './helper/Context'
import Quiz from './components/Quiz/index'
import Finished from './components/Finished/index'

// states --> menu, playing, finished
function App() {

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <Finished />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
