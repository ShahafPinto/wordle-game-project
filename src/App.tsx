import './App.scss';
import Board from './components/Board';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react';

function App() {
  
  return (
    // <GameContext.Provider value={wordle}>
      <div className="App">
        {/* <BoardContext.Provider value={game}> */}
          <header ><h1 className="">Wordle</h1></header>
          <Board></Board>
        {/* </BoardContext.Provider> */}
      </div>
    // </GameContext.Provider>
  );
}

export default App;
