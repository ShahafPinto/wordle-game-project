// import logo from './logo.svg';
import { Children, useState } from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import useGame from './tsx/useGame';
import {BoardProvider} from './components/BoardContext';

function App() {
  const game = useGame();


  

  return (
    <div className="App">
      <BoardProvider>
        <header><h1>Wordle</h1></header>
        <Board></Board>
        <Keyboard></Keyboard>
      </BoardProvider>
    </div>
  );
}

export default App;
