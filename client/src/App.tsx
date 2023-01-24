import Board from './components/Board';
import Header from './components/Header';
import { useState } from "react";
import { HeadContext } from "./providers/headContext";
import Welcome from './components/welcome';
import { GameContext } from "./providers/gameContext";
import useGame from "./tsx/useGame";
import useUser from './tsx/useUser';


function App() {
  const user = useUser();
  const game = useGame();
  const [page,setPage] = useState('welcome');
 
  return (
      <div className="appConteiner">
        <div className='App'>
        {page === 'welcome' && 
          <>
            <Welcome setPage={setPage} username={'welcome-' + user.getUsername()}/>
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
      </div>
  );
}

export default App;
