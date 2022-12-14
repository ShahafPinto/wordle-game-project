import { useContext } from "react";
import { BoardContext } from "../providers/board-context";

function Board(){
    
    const {board, findTheNextCell} = useContext(BoardContext);
     
    console.log(findTheNextCell());

    return(
        <div className="board">
            <div className="row">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="row">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="row">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="row">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>  
    );
}

export default Board;