// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import useGame from './tsx/useGame';
import {BoardContext} from './providers/board-context';

function App() {
  const game = useGame();
  const [board, setBoard] = useState([['']]);
  const changeBoard = ()=>{
    let newBoard = game.newBoard;
    setBoard(newBoard);
  }
  
  

  return (
    <div className="App">
      <BoardContext.Provider value={game}>
        <header><h1>Wordle</h1></header>
        <Board></Board>
        <Keyboard></Keyboard>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
