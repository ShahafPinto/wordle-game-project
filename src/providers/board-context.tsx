import { createContext, JSXElementConstructor, ReactElement } from "react";
import { JsxElement } from "typescript";

export interface IBoardContext {
    newBoard: string[][],
    board: string[][],
    moveNextCell?: ()=> void,
    handlerClickLetter?: (event:MouseEvent)=> void,
    changeBoard?: ()=> void,
}
// React.FC<{}>

export const BoardContext = createContext<IBoardContext | null>(null);

