import React from 'react';


function useBoard() {
    const board = [['','','','',''],['','','','',''],['','','','',''],['','','','','']];
    // const [cellStatus, setCellStatus] = useState(false);
  
    function findTheNextCell(){
       for (let row = 0; row<4; row++){
        for (let cell=0; cell<5;cell++){
            if(board[row][cell]==''){
                return (`${row},${cell}`)
            }
        }
       }
        
        
    } 
  return (
    {board,
    findTheNextCell
    }
  )
}

export default useBoard;

