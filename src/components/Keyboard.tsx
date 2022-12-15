import { useContext } from "react";
import { BoardContext } from "../providers/board-context";


function Keyboard(){
    const { moveNextCell, handlerClickLetter } = useContext(BoardContext);

    return(
        <div className="keyboard">
            <div className="keyboardrow1">
                <button onClick={handlerClickLetter} id='W'>W</button>
                <button onClick={moveNextCell}>E</button>
                <button onClick={moveNextCell}>R</button>
                <button>T</button>
                <button>Y</button>
                <button>U</button>
                <button>I</button>
                <button>O</button>
                <button>P</button>
                <button>C</button>
                <button>V</button>
            </div>
            <div className="keyboardrow2">
                <section></section>
                <button>Q</button>
                <button>A</button>
                <button>S</button>
                <button>D</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>J</button>
                <button>B</button>
                
            </div>
            <div className="keyboardrow3">
                <section></section>
                <button>N</button>
                <button>K</button>
                <button>L</button>
                <button>Z</button>
                <button>X</button>
                <button>M</button>
                <button id="enter">Enter</button>
            </div>
        </div>
    );
}

export default Keyboard;