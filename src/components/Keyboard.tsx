import React, { useState } from 'react';
type StatusProps={
    onClickProp: Function,
    bull: string,
    cow: string
}
function Keyboard(props:StatusProps): JSX.Element{
    const bull = props.bull;
    const cow = props.cow;

    console.log('bull in keboard:',bull)

    

    const keyboardKeys:string[][] = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['DEL','Z','X','C','V','B','N','M','ENTER!']
    ];

    const hendleClick = (event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number):void=>{
        let key:string = keyboardKeys[rowIndex][keyIndex];
        if(!(key=='ENTER!' || key=='DEL')){
            event.currentTarget.classList.add('clicked');
            props.onClickProp(key);
        }
    }

    const checkIfBull=(rowIndex:number,cellIndex:number)=>{
        if (!bull){
            return false
        }
        if(bull.includes(keyboardKeys[rowIndex][cellIndex])){
            return true
        }
    }
    return(

        <div className="keyboard">
            {keyboardKeys.map((keyrow:string[],rowIndex:number)=>(
                <div className="keyboardrow" key={rowIndex}>
                    {keyrow.map((key:string, keyIndex:number)=>(

                        
                        
                        <button key={keyIndex} 
                                className=''
                                id={`${rowIndex}${keyIndex}`}
                                onClick={(event:React.MouseEvent<HTMLElement>)=>hendleClick(event,rowIndex,keyIndex)}
                        >
                                    {keyboardKeys[rowIndex][keyIndex]}
                        </button>
                        
                         
                        
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;