import { useEffect } from "react";
import Keyboard from '../components/Keyboard';
import { GameContext } from "../providers/gameContext";
import {useContext} from 'react';

function Board(): JSX.Element{
    const game = useContext(GameContext)
    
    useEffect(():void=>{game?.autoFocus(game.currIndex[0],game.currIndex[1])},[])
    useEffect(()=>game?.getGuess,game?.row);
    
    return(
        <>
        <div className="board">
            {game?.inputBoard.map((row: string[], rowIndex: number):JSX.Element=>(
                <div className="row" key={rowIndex}>
                    {row.map((cell:string, cellIndex:number):JSX.Element=>(
                        <input 
                                key={cellIndex} 
                                id={`${rowIndex}${cellIndex}`} 
                                value={cell}
                                onChange={({target:{value}}:React.ChangeEvent<HTMLInputElement>):void=>{
                                    game.hendleChangeInput(value,rowIndex,cellIndex);
                                }} 
                                onKeyUp={(event: React.KeyboardEvent)=>game.handleKeyUp(event, rowIndex,cellIndex)}
                                minLength={1} 
                                maxLength={1} 
                                required
                        />
                    ))}
                </div>
            ))}
        </div> 
        <dialog id='successDialog'>
            success!!
        </dialog> 
        <dialog id='failDialog'>
            fail!!
        </dialog>
        <Keyboard></Keyboard>
        {/* <Keyboard onClickProp={game?.onClick} bull={game?.bull} cow={game?.cow}></Keyboard> */}
        </>
    );
}


export default Board;