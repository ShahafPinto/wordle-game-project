import React, {CSSProperties} from 'react'
import '../welcome.scss';

interface Iprops{
    setPage:(action: string | ((prevState: string) => string)) => void,
    username:string,
}
interface IwelcomeStyle extends CSSProperties{
  '--i':string; 
}

function Welcome(props:Iprops) {
    let title:string[] = props.username.split('')

    const getStyle =(index:number)=>{
      const result:IwelcomeStyle = {
        '--i': String(index+1)
      }
      return result
    }

  return (
    <div className='welcome-page'>
      <div className='welcome-title'>
        <div className='wavy'>
          {title.map((letter:string,index):JSX.Element=>(<span key={index} style={getStyle(index)}>{letter}</span>))}
        </div>
        <button onClick={()=>props.setPage('enterTheGame')}>Start!</button>
      </div>
      
    </div>
  )
}

export default Welcome
