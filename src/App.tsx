// import { useState } from 'react';
import './App.scss';
import Board from './components/Board';
import useWordle from './tsx/useWordle';
import {GameContext, GameContextInterface} from './providers/game-context';
// import { Outlet } from 'react';

function App() {
  // const wordle :GameContextInterface = {
  //   currRowIndex:0,
  //   currCellIndex:0
  // };
  // const [board, setBoard] = useState([['']]);
  // const changeBoard = ()=>{
  //   let newBoard = game.newBoard;
  //   setBoard(newBoard);
  // }
  
  return (
    // <GameContext.Provider value={wordle}>
      <div className="App">
        {/* <BoardContext.Provider value={game}> */}
          <header><h1>Wordle</h1></header>
          <Board></Board>
        {/* </BoardContext.Provider> */}
      </div>
    // </GameContext.Provider>
  );
}

export default App;
