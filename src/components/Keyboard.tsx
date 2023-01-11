import React, { useState } from 'react';
import { useContext } from 'react';
import { GameContext } from '../providers/gameContext';


function Keyboard(): JSX.Element{
    const game = useContext(GameContext)
    // console.log('bull in keboard:',game?.bull)

    // const keyboardKeys:string[][] = [
    //     ['Q','W','E','R','T','Y','U','I','O','P'],
    //     ['A','S','D','F','G','H','J','K','L'],
    //     ['DEL','Z','X','C','V','B','N','M','ENTER!']
    // ];

    // const hendleClick = (event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number):void=>{
    //     let key:string = keyboardKeys[rowIndex][keyIndex];
    //     if(!(key=='ENTER!' || key=='DEL')){
    //         event.currentTarget.classList.add('clicked');
    //         game?.onClick(key);
    //     }
    // }

    // const checkIfBull=(rowIndex:number,cellIndex:number)=>{
    //     if (game?.bull){
    //         return false
    //     }
    //     if(game?.bull.includes(keyboardKeys[rowIndex][cellIndex])){
    //         return true
    //     }
    // }
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