import { useEffect } from "react";
import Keyboard from '../components/Keyboard';
import { useState } from "react";
// type StatusProps={
//     inputBoard: string[][],
//     setInputBoard: Function
//   }
function Board(): JSX.Element{
    console.log('board renderd')
    const letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    const [inputBoard, setInputBoard]= useState<string[][]>([['','','','',''],['','','','',''],['','','','',''],['','','','','']])
    let currRowIndex:number = 0;
    let currCellIndex:number = 0;
        
    useEffect(():void=>{autoFocus(currRowIndex,currCellIndex)},[])

    const handleKeyUp = (event: React.KeyboardEvent, rowIndex:number, cellIndex:number):void=>{
        if ( letters.includes(inputBoard[rowIndex][cellIndex])){ 
            if(cellIndex==4 && rowIndex<3){
                autoFocus(rowIndex+1, 0);
                currRowIndex = rowIndex+1;
                currCellIndex = 0;
            }else if((cellIndex<4 && rowIndex==3)||(cellIndex<4 && rowIndex<3)){
                autoFocus(rowIndex, cellIndex+1);
                currRowIndex = rowIndex;
                currCellIndex = cellIndex+1;
            }
        }
    }

    const autoFocus = (rowIndex:number, cellIndex:number):void=>{
        document.getElementById(`${rowIndex}${cellIndex}`)?.focus()
    }
    
    const onClick=(letter:string)=>{
        let nextRowIndex = currRowIndex;
        let nextCellIndex = currCellIndex;
        if(currCellIndex==4 && currRowIndex<3){
            currRowIndex = currRowIndex+1;
            currCellIndex = 0;
        }else if((currCellIndex<4 && currRowIndex==3)||(currCellIndex<4 && currRowIndex<3)){
            currRowIndex = currRowIndex;
            currCellIndex = currCellIndex+1;
        }
        hendleChangeInput(letter,nextRowIndex,nextCellIndex);
    }

    const hendleChangeInput=(letter:string, rowIndex:number,cellIndex:number):void=>{
        let currGuessUpdate: string[][] = inputBoard;
        console.log('here2');
        currGuessUpdate[rowIndex][cellIndex] = letter;
        console.log(currGuessUpdate);
        setInputBoard(currGuessUpdate);
    }
    
    return(
        <>
        <div className="board">
            {inputBoard.map((row: string[], rowIndex: number):JSX.Element=>(
                <div className="row" key={rowIndex}>
                    {row.map((cell:string, cellIndex:number):JSX.Element=>(
                        <input key={cellIndex} 
                                id={`${rowIndex}${cellIndex}`} 
                                value={cell}
                                onChange={({target:{value}}:React.ChangeEvent<HTMLInputElement>):void=>{
                                    hendleChangeInput(value,rowIndex,cellIndex);
                                }} 
                                onKeyUp={(event: React.KeyboardEvent)=>handleKeyUp(event, rowIndex,cellIndex)}
                                minLength={1} 
                                maxLength={1} 
                                required
                        />
                    ))}
                </div>
            ))}
        </div>  
        <Keyboard onClickProp={onClick}></Keyboard>
        </>
    );
}


export default Board;