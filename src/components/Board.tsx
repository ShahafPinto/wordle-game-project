import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { BoardContext } from "../providers/board-context";

function Board(){
    
    const { newBoard } = useContext(BoardContext);
    
    useEffect(()=>{
        console.log('here')
        setBoard(newBoard)},newBoard);
    
    const [board, setBoard] = useState([])
    
    return(

        <div className="board">
            {newBoard.map( (boardRow:string[])=> (
                <div className="row" key={`newBoard[${newBoard.indexOf(boardRow)}]`}>
                    {boardRow.map((cell:string)=>(
                        (cell=='nextCell') ?
                            ( <button key={`newBoard[${newBoard.indexOf(boardRow)}][${boardRow.indexOf(cell)}]`} autoFocus={true}>
                                </button>)
                            :
                            (<button key={`newBoard[${newBoard.indexOf(boardRow)}][${boardRow.indexOf(cell)}]`}>
                                {newBoard[newBoard.indexOf(boardRow)][boardRow.indexOf(cell)]}
                            </button>)
                        ))}
                </div>
                    ))}          
        </div>  
    );
}


export default Board;

// ( <button key={cellNumber} onLoad={(event)=>setFocus(event)}>
                            //     </button>
                                
                            //     )

                            // :
                            // (<button key={cellNumber}></button>)