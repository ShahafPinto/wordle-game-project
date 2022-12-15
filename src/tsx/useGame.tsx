import React, { useState } from 'react';
// import App from '../App';
import Board from '../components/Board';

function useGame() {
    // const board = [['nextCell','','','',''],['','','','',''],['','','','',''],['','','','','']];
    // const [cellStatus, setCellStatus] = useState(false);

    const [board, setBoard]=useState([['nextCell','','','',''],['','','','',''],['','','','',''],['','','','','']])
    let newBoard= board;
    let rowIndex:number = 0;
    let cellIndex:number= 0;

    const handlerClickLetter = (event:MouseEvent)=>{
      console.log((event.target as Element).id);
      findCurrIndex();
      newBoard[rowIndex][cellIndex] = String((event.target as Element).id);
      moveNextCell();
    }
    
    const findCurrIndex = ()=>{
      newBoard.forEach((row)=>{
        // console.log('type w')
        if(row.includes('nextCell')){
          rowIndex = newBoard.indexOf(row);
          cellIndex = row.indexOf('nextCell')
        }})
    }
    
    const moveNextCell = ()=>{
      if(cellIndex<4){
        newBoard[rowIndex][cellIndex+1]='nextCell';
      }else if(rowIndex<3){
        newBoard[rowIndex+1][0]= 'nextCell';
      }
      console.log(newBoard);
      setBoard(newBoard);
      // App();
      // Board();
    }
    
  return (
    {newBoard,
      board,
      moveNextCell,
      handlerClickLetter,
      
    }
  )
}

export default useGame;

