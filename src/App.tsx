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
  const [page,setPage] = useState('welcome');
  
  const getUsername=()=>{
    const storageUserName:string|null = (localStorage.getItem('name'));
    if (storageUserName){
      return JSON.parse(storageUserName);
  }}
  const user = useUser()
  const game = useGame()
  return (

      <div className="App">
        
        {page === 'welcome' && 
          <>
            <Welcome setPage={setPage} username={user.username}/>
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
