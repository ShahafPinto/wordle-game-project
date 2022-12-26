import './App.scss';
import Board from './components/Board';
import Header from './components/Header';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react';

function App() {
  
  return (
    // <GameContext.Provider value={wordle}>
      <div className="App">
        {/* <BoardContext.Provider value={game}> */}
          <Header></Header>
          <Board></Board>
        {/* </BoardContext.Provider> */}
      </div>
    // </GameContext.Provider>
  );
}

export default App;
