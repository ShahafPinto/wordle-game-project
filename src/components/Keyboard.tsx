import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../providers/gameContext';


function Keyboard(): JSX.Element{
    const game = useContext(GameContext)
    
    return(

        <div className="keyboard">
            {game?.keyboardKeys.map((keyrow:string[],rowIndex:number)=>(
                <div className="keyboardrow" key={rowIndex}>
                    {keyrow.map((key:string, keyIndex:number)=>(

                        
                        <button key={keyIndex} 
                                id={`${rowIndex}${keyIndex}`}
                                onClick={(event:React.MouseEvent<HTMLElement>)=>game?.hendleClick(event,rowIndex,keyIndex)}
                        >
                                    {game?.keyboardKeys[rowIndex][keyIndex]}
                        </button>
                        

                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;