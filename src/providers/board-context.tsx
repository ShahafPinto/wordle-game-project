import { createContext } from "react";

interface IBoardContext {
    newBoard: string[][],
    board: string[][],
    moveNextCell: ()=> void,
    handlerClickLetter: ()=> void,
    changeBoard: ()=> void
}
export const BoardContext = createContext({} as any);

