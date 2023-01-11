import React, { useState } from 'react';
import { IGameContext } from '../providers/gameContext';

function useGame():IGameContext{
  const letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let bull:string = '';
  let cow:string = '';
  
  const [bullCow, setBullCow] = useState([bull,cow]);
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
  // console.log(`currIndex:(${nextRowIndex},${nextCellIndex})`)
  // useEffect(():void=>{autoFocus(currIndex[0],currIndex[1])},[])
  // useEffect(()=>getGuess,row);

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
      // console.log(newBoard);
      setInputBoard(newBoard);
      const updateCurrIndex = [nextRowIndex,nextCellIndex];
      setCurrIndex(updateCurrIndex);
  }
  
  const getGuess=()=>{
      let guess:string ='';
      newBoard[currIndex[0]].forEach((letter)=>{
          guess = guess + letter
      })
      console.log(`the guess is: ${guess}`);
      checkGuess(guess);      
  }

  
  const word:string = 'HELLO'; //should be in Upletters
  const checkGuess=(guess:string)=>{
      bull = '';
      cow = '';
      console.log('checkgess')
      // console.log(guess[0])
      for(let index=0;index<5;index++){
          if(word[index]==guess[index]){ //check bull
              // console.log(`bull in ${word[index]}`)
              document.getElementById(`${currIndex[0]}${index}`)?.classList.add('bull');
              bull = bull + word[index];
          }else{
              for(let idx=0;idx<5;idx++){
                  if(word[index]==guess[idx]){
                      // console.log(`cow in ${word[index]}`) //check cow
                      document.getElementById(`${currIndex[0]}${idx}`)?.classList.add('cow');
                      cow = cow + word[index];
                  }
              }
          }
      }
      const a = [bull,cow]
      setBullCow(a)
      // console.log(`bull : ${bull}`)
      // console.log(`cow : ${cow}`)
  }
    
    const keyboardKeys:string[][] = [
      ['Q','W','E','R','T','Y','U','I','O','P'],
      ['A','S','D','F','G','H','J','K','L'],
      ['DEL','Z','X','C','V','B','N','M','ENTER!']
  ];

      const hendleClick = (event:React.MouseEvent<HTMLElement>, rowIndex:number, keyIndex:number):void=>{
        let key:string = keyboardKeys[rowIndex][keyIndex];
        if(!(key=='ENTER!' || key=='DEL')){
            event.currentTarget.classList.add('clicked');
            onClick(key);
        }
    }

    const checkIfBull=(rowIndex:number,cellIndex:number)=>{
      if(bull.includes(keyboardKeys[rowIndex][cellIndex])){
          return true
      }return false
  }
  return (
    {letters,
      bull,
      cow,
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
      hendleClick,
      checkIfBull
      
    }
  )
}

export default useGame;

