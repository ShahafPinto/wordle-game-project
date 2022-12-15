import React,{useState, FC} from 'react';
import useGame from '../tsx/useGame';
import {BoardContext} from '../providers/board-context';

export const BoardProvider: FC = (  {children}:any ) => {
    const game = useGame();
    const [board, setBoard] = useState(game.board);
    
    const changeBoard = ()=>{
        let newBoard = game.newBoard;
        setBoard(newBoard);
    }
  
  
    return (
        <BoardContext.Provider value={{
            newBoard: game.newBoard,
            board: game.board,
            moveNextCell: game.moveNextCell,
            handlerClickLetter: game.handlerClickLetter,
            changeBoard
         }}>
            {children}
        </BoardContext.Provider>
  );
};

export default BoardProvider;
