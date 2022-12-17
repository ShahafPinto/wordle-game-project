import { createContext } from "react";
export interface GameContextInterface {
    currRowIndex:number;
    currCellIndex:number;
}
export const GameContext = createContext<GameContextInterface|null>(null);

// export default GameContextInterface;