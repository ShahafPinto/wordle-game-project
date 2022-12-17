import React from 'react';
type StatusProps={
    onClickProp: Function
}
function Keyboard(props:StatusProps): JSX.Element{

    const keyboardKeys:string[][] = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['ENTER!','Z','X','C','V','B','N','M','DEL']
    ];

    const hendleClick = (event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number):void=>{
        let key:string = keyboardKeys[rowIndex][keyIndex];
        if(!(key=='ENTER!' || key=='DEL')){
            props.onClickProp(key);
        }
        

    }
    return(

        <div className="keyboard">
            {keyboardKeys.map((keyrow:string[],rowIndex:number)=>(
                <div className="keyboardrow" key={rowIndex}>
                    {keyrow.map((key:string, keyIndex:number)=>(
                        <button key={keyIndex} 
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