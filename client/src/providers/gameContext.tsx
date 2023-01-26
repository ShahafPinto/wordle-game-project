import { createContext, SetStateAction } from "react";
// import { useState } from "react";

export interface IGameContext{
    letters:string[],
    inputBoard:string[][],
    setInputBoard:React.Dispatch<SetStateAction<string[][]>>,
    currIndex:number[],
    setCurrIndex:React.Dispatch<SetStateAction<number[]>>,
    newBoard:string[][],
    row:number[],
    newCurrIndex:number[],
    nextRowIndex: number,
    nextCellIndex: number,
    update:(letter:string)=>void,
    handleKeyUp:(rowIndex:number, cellIndex:number)=>void,
    autoFocus:(rowIndex:number, cellIndex:number)=>void,
    onClick:(letter:string)=>void,
    hendleChangeInput:(letter:string, rowIndex:number,cellIndex:number)=>void,
    getGuess:()=>void,
    
    sendGuess:(guess:string)=>void,
    keyboardKeys:string[][],
    hendleClick:(event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number)=>void
    // checkIfBull:(rowIndex:number,cellIndex:number)=>boolean
}


export const GameContext =createContext<IGameContext | null>(null);
