// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import useBoard from './tsx/useBoard';
import {BoardContext} from './providers/board-context';

function App() {
  const board = useBoard();
  
  return (
    <div className="App">
      <BoardContext.Provider value={board}>
        <header><h1>Wordle</h1></header>
        <Board></Board>
        <Keyboard></Keyboard>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
