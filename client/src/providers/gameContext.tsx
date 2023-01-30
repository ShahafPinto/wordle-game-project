import { createContext } from "react";

export interface IGameContext{
    inputBoard:string[][],
    currIndex:number[],
    row:number[],
    handleKeyUp:(rowIndex:number, cellIndex:number)=>void,
    autoFocus:(rowIndex:number, cellIndex:number)=>void,
    hendleChangeInput:(letter:string, rowIndex:number,cellIndex:number)=>void,
    getGuess:()=>void,
    keyboardKeys:string[][],
    hendleClick:(event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number)=>void
}

export const GameContext =createContext<IGameContext | null>(null);
