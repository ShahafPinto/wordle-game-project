import React from 'react'

interface Iprops{
    setPage:(action: string | ((prevState: string) => string)) => void;
}

function Welcome(props:Iprops) {
    
  return (
    <div>
      <h1>Welcome user!</h1>
      <button onClick={()=>props.setPage('enterTheGame')}>Start!</button>
    </div>
  )
}

export default Welcome
