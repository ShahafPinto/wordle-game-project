import { useContext } from "react";
import { BoardContext } from "../providers/board-context";

const Keyboard: React.FC =(): JSX.Element=>{
    const { moveNextCell, handlerClickLetter } = useContext(BoardContext);

    const keyboardKeys:string[][] = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['ENTER!','Z','X','C','V','B','N','M','DEL']
    ];

    return(

        <div className="keyboard">
            {keyboardKeys.map((keyrow:string[],rowIndex:number)=>(
                <div className="keyboardrow" key={rowIndex}>
                    {keyrow.map((key:string, keyIndex:number)=>(
                        <button key={keyIndex} id={`${rowIndex}${keyIndex}`}>{keyboardKeys[rowIndex][keyIndex]}</button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;