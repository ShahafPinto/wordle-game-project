import React, { useState } from 'react';
import { IGameContext } from '../providers/gameContext';

function useGame():IGameContext{
  const letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const keyboardKeys:string[][] = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['DEL','Z','X','C','V','B','N','M','ENTER!']
  ];
  const [inputBoard, setInputBoard]= useState<string[][]>([['','','','',''],['','','','',''],['','','','',''],['','','','','']])
  const [currIndex, setCurrIndex]=useState([0,0]);
  
  const newBoard:string[][] = [];
  inputBoard.forEach((item)=>{
      newBoard.push(item);
  })

  const row:number[] = [];
  row.push(currIndex[0]); 

  const newCurrIndex:number[] = [];
  currIndex.forEach((number)=>{
      newCurrIndex.push(number);
  })

  let nextRowIndex = currIndex[0];
  let nextCellIndex = currIndex[1];
  
  const update=(letter:string):void=>{
      nextRowIndex = currIndex[0];
      nextCellIndex = currIndex[1];
      if(currIndex[1]===4 && currIndex[0]<3){
          nextRowIndex = currIndex[0]+1;
          nextCellIndex = 0;
      }
      else if(currIndex[1]===4 && currIndex[0]===3){
          getGuess();
      }
      else if((currIndex[1]<4 && currIndex[0]===3)||(currIndex[1]<4 && currIndex[0]<3)){
          nextRowIndex = currIndex[0];
          nextCellIndex = currIndex[1]+1;
      }
      autoFocus(nextRowIndex,nextCellIndex);
      hendleChangeInput(letter,currIndex[0],currIndex[1])   
  }
  
  const autoFocus = (rowIndex:number, cellIndex:number):void=>{
      document.getElementById(`${rowIndex}${cellIndex}`)?.focus()
  }
  
  //handlers methods
  const handleKeyUp = (rowIndex:number, cellIndex:number):void=>{
      if ( letters.includes(newBoard[rowIndex][cellIndex].toLowerCase())){ 
          update(newBoard[rowIndex][cellIndex]);
      }
  }

  const onClick=(letter:string)=>{
      update(letter); 
  }

  const hendleChangeInput=(letter:string, rowIndex:number,cellIndex:number):void=>{
      currIndex[0]=nextRowIndex;
      currIndex[1]=nextCellIndex;
      newBoard[rowIndex][cellIndex] = letter.toUpperCase();
      setInputBoard(newBoard);
      const updateCurrIndex = [nextRowIndex,nextCellIndex];
      setCurrIndex(updateCurrIndex);
  }
  
  const hendleClick = (event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number):void=>{
    let key:string = keyboardKeys[rowIndex][keyIndex];
    if(!(key==='ENTER!' || key==='DEL')){
        event.currentTarget.classList.add('clicked');
        onClick(key);
    }
  }
  
  //logic methods
  const word:string = 'HELLO'; //should be in Upletters

  const getGuess=()=>{
    console.log('hereeee')
      let guess:string ='';
      newBoard[currIndex[0]].forEach((letter)=>{
          guess = guess + letter
      })
      console.log(`the guess is: ${guess}`);
      checkGuess(guess);      
  }
  
  const checkGuess=(guess:string)=>{
      for(let index=0;index<5;index++){
          if(word[index]===guess[index]){ //check bull
              document.getElementById(`${currIndex[0]}${index}`)?.classList.add('bull');
              setBullCowOnKeyboard(word[index],'bull');
          }else{
              for(let idx=0;idx<5;idx++){
                  if(word[index]===guess[idx]){ //check cow
                      document.getElementById(`${currIndex[0]}${idx}`)?.classList.add('cow');
                      setBullCowOnKeyboard(word[index],'cow');
                  }
              }
          }
      }if(guess===word){
        const dialog = document.getElementById('successDialog') as HTMLDialogElement
        dialog.show();
      }if(currIndex[0]===3 && guess!==word){
        checkFail();
  }}
    
  const checkFail=()=>{
    const dialog = document.getElementById('failDialog') as HTMLDialogElement
    dialog.show();
  }

  const setBullCowOnKeyboard=(letter:string,status:string)=>{
    for(let row=0;row<3;row++){
      if(keyboardKeys[row].includes(letter)){
        const cell = keyboardKeys[row].indexOf(letter);
        document.querySelectorAll(`button`).forEach((button)=>{
            if (button.id=== String(row)+String(cell)){
              button.classList.add(status);
            } 
        }) 
        break
      }
    }
  }

  
  return (
    {letters,
      inputBoard,
      setInputBoard,
      currIndex,
      setCurrIndex,
      newBoard,
      row,
      newCurrIndex,
      nextRowIndex,
      nextCellIndex ,
      update,
      handleKeyUp,
      autoFocus,
      onClick,
      hendleChangeInput,
      getGuess,
      word,
      checkGuess,
      keyboardKeys,
      hendleClick
    }
  )
}

export default useGame;

