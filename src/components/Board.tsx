import { useEffect } from "react";
import Keyboard from '../components/Keyboard';
import { useState } from "react";
// type StatusProps={
//     inputBoard: string[][],
//     setInputBoard: Function
//   }
function Board(): JSX.Element{
    // console.log('board renderd')
    const letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    const [inputBoard, setInputBoard]= useState<string[][]>([['','','','',''],['','','','',''],['','','','',''],['','','','','']])
    const [currIndex, setCurrIndex]=useState([0,0]);
    
    const newBoard:string[][] = [];
    inputBoard.forEach((item)=>{
        newBoard.push(item);
    })

    let nextRowIndex = currIndex[0];
    let nextCellIndex = currIndex[1];

    useEffect(():void=>{autoFocus(currIndex[0],currIndex[1])},[])
 
    const update=(letter:string):void=>{
            nextRowIndex = currIndex[0];
            nextCellIndex = currIndex[1];
            if(currIndex[1]==4 && currIndex[0]<3){
                nextRowIndex = currIndex[0]+1;
                nextCellIndex = 0;
            }else if((currIndex[1]<4 && currIndex[0]==3)||(currIndex[1]<4 && currIndex[0]<3)){
                nextRowIndex = currIndex[0];
                nextCellIndex = currIndex[1]+1;
            }
            autoFocus(nextRowIndex,nextCellIndex);
            hendleChangeInput(letter,currIndex[0],currIndex[1])     
            }
    

    const handleKeyUp = (event: React.KeyboardEvent, rowIndex:number, cellIndex:number):void=>{
        if ( letters.includes(newBoard[rowIndex][cellIndex].toLowerCase())){ 
            update(newBoard[rowIndex][cellIndex]);
        }
    }

    const autoFocus = (rowIndex:number, cellIndex:number):void=>{
        document.getElementById(`${rowIndex}${cellIndex}`)?.focus()
    }

    const onClick=(letter:string)=>{
        update(letter); 
    }

    const hendleChangeInput=(letter:string, rowIndex:number,cellIndex:number):void=>{
        currIndex[0]=nextRowIndex;
        currIndex[1]=nextCellIndex;
        newBoard[rowIndex][cellIndex] = letter.toUpperCase();
        console.log(newBoard);
        setInputBoard(newBoard);
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