import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import { useEffect, useState } from "react";
import { HeadContext,IHeadContext } from "./providers/headContext";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/welcome';
import { GameContext,IGameContext } from "./providers/gameContext";
import useGame from "./tsx/useGame";
import useUser from './tsx/useUser';


function App() {
  const user = useUser()
  const game = useGame()
  const [page,setPage] = useState('welcome');
 
  
  return (

      <div className="App">
        
        {page === 'welcome' && 
          <>
            <Welcome setPage={setPage} username={user.getUsername()}/>
          </>
        }
        {page ==='enterTheGame' &&
          <>
            <GameContext.Provider value={game}>
              <HeadContext.Provider value={user}>
                <Header></Header>
                <Board></Board>
              </HeadContext.Provider>
            </GameContext.Provider>
          </>
        }
        
      </div>
  );
}

export default App;
