// import React, { useEffect, useState } from 'react';

const wordsApi = {
  words:["HELLO","GUESS","WRITE","SMART","FUNNY"]
}
let word:string;
export type Istate = [boolean,string,string,string,string,string]
let state:Istate = [false,"","","","",""]

export const setNewWord = ():void=>{
  word = wordsApi.words[Math.floor(Math.random() * wordsApi.words.length)]
  // console.log('the word: ',word)
}

export const checkGuess=(guess:string):Istate=>{
  state = [false,"","","","",""];
  for(let index=0;index<5;index++){
      if(word[index]===guess[index]){ //check bull
          state[index+1]="bull"
      }else{
          for(let idx=0;idx<5;idx++){
              if(word[index]===guess[idx]){ //check cow
                  state[idx+1]="cow"
              }
          }
      }
  }if(guess===word){
    state[0]=true;
  }else{
    state[0]=false;
  }
  return state;
}
