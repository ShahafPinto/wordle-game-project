import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import { useState } from "react";
import { HeadContext,IHeadContext } from "./providers/headContext";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/welcome';

function App() {
  const [page,setPage] = useState('welcome');
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const valuesHeadContext:IHeadContext={
    show:show,
    setShow:setShow, 
    handleShow:handleShow
  };
  
  return (

      <div className="App">
        
        {page === 'welcome' && 
          <>
            <Welcome setPage={setPage}/>
          </>
        }
        {page ==='enterTheGame' &&
          <>
            <HeadContext.Provider value={valuesHeadContext}>
              <Header></Header>
              <Board></Board>
            </HeadContext.Provider>
          </>
        }
        
      </div>
  );
}

export default App;
