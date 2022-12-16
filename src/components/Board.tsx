import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { BoardContext } from "../providers/board-context";
import Keyboard from '../components/Keyboard';

const Board: React.FC =(): JSX.Element=>{
    const letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    const { newBoard } = useContext(BoardContext);
    const [currGuess, setCurrGuess]= useState<string[][]>([[...Array(5)],[...Array(5)],[...Array(5)],[...Array(5)]])
    
    useEffect(():void=>{autoFocus(0,0)},[])
    
    const handleKeyUp = (event: React.KeyboardEvent, rowIndex:number, cellIndex:number):void=>{
        // let isValidGuess:boolean = currGuess[rowIndex].filter((letter:string)=> letters.includes(letter) && letter ).length==5 ? true : false;
        if ( letters.includes(currGuess[rowIndex][cellIndex])){ 
            if(cellIndex==4 && rowIndex<3){
                // console.log('here')
                autoFocus(rowIndex+1, 0);
            }else if(cellIndex<4 && rowIndex==3){
                autoFocus(rowIndex, cellIndex+1);
            }else if(cellIndex<4 && rowIndex<3){
                autoFocus(rowIndex,cellIndex+1)
            }
        }
            
        // }
    }
    const autoFocus = (rowIndex:number, cellIndex:number):void=>{
        document.getElementById(`${rowIndex}${cellIndex}`)?.focus()
    }
    
    console.log('board renderd')
    return(
        <>
        <div className="board">
            {currGuess.map((row: string[], rowIndex: number):JSX.Element=>(
                <div className="row" key={rowIndex}>
                    {row.map((cell:string, cellIndex:number):JSX.Element=>(
                        <input key={cellIndex} 
                                id={`${rowIndex}${cellIndex}`} 
                                type='text' 
                                value={cell}
                                onChange={({target:{value}}:React.ChangeEvent<HTMLInputElement>):void=>{
                                    let currGuessUpdate: string[][] = currGuess;
                                    currGuessUpdate[rowIndex][cellIndex] = value;
                                    setCurrGuess(currGuessUpdate);
                                }} 
                                onKeyUp={(event: React.KeyboardEvent)=>handleKeyUp(event, rowIndex,cellIndex)}
                                minLength={1} 
                                maxLength={1} 
                                required
                        />
                    ))}
                </div>
            ))}
            
            {/* {newBoard.map( (boardRow:string[], rowIndex:number)=> (
                <div className="row" key={rowIndex}>
                    {boardRow.map((cell:string,cellIndex:number)=>(
                        (cell=='nextCell') ?
                            ( <input key={`newBoard[${rowIndex}][${cellIndex}]`} 
                                     autoFocus={true}
                                     type='text'
                                     minLength={1} 
                                     maxLength={1} 
                                     required
                                    //  value={letter}
                                    //  onChange={hendleChange}
                                     onKeyDown={(event: React.KeyboardEvent)=>handleKeyDown(event,rowIndex,cellIndex)}
                                />
                                )
                            :
                            (<>
                            <input key={`newBoard[${rowIndex}][${cellIndex}]`}
                                    type='text'
                                    minLength={1} 
                                    maxLength={1} 
                                    required
                                    // value={letter}
                                    // onChange={hendleChange}
                                    onKeyDown={(event: React.KeyboardEvent)=>handleKeyDown(event,rowIndex,cellIndex)}

                             />
                                {/* {newBoard[rowIndex][cellIndex]} */}
                            {/* </>
                            )
                        ))}
                </div>
                    ))}            */}
        </div>  
        <Keyboard></Keyboard>
        </>
    );
}


export default Board;

// ( <button key={cellNumber} onLoad={(event)=>setFocus(event)}>
                            //     </button>
                                
                            //     )

                            // :
                            // (<button key={cellNumber}></button>)