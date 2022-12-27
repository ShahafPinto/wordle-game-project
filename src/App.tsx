import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import { useContext, useState } from "react";
import { HeadContext } from "./providers/headContext";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react';
import { IHeadContext } from './providers/headContext';

function App() {
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  const valuesHeadContext:IHeadContext={
    show:show,
    setShow:setShow, 
    handleShow:handleShow
  };
  
  return (
      <div className="App">
        <HeadContext.Provider value={valuesHeadContext}>
          <Header ></Header>
          <Board></Board>
        </HeadContext.Provider>
      </div>
  );
}

export default App;
