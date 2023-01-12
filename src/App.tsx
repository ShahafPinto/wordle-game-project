import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import { useState } from "react";
import { HeadContext,IHeadContext } from "./providers/headContext";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/welcome';
import { GameContext,IGameContext } from "./providers/gameContext";
import useGame from "./tsx/useGame";
import useContext from 'react';

function App() {
  const [page,setPage] = useState('welcome');
  const [show, setShowInfo] = useState(false);

  const [showForm,setShowForm] = useState(false);

  const handleShow = () => setShowInfo(true);
  const handleFormShow= ()=> setShowForm(true);

  const valuesHeadContext:IHeadContext={
    show:show,
    showForm:showForm,
    setShowInfo:setShowInfo, 
    handleShow:handleShow,
    setShowForm:setShowForm,
    handleFormShow:handleFormShow
  };

  
  const game = useGame()
  return (

      <div className="App">
        
        {page === 'welcome' && 
          <>
            <Welcome setPage={setPage}/>
          </>
        }
        {page ==='enterTheGame' &&
          <>
            <GameContext.Provider value={game}>
              <HeadContext.Provider value={valuesHeadContext}>
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
