import React from 'react'

const Display2 = ({start,status,stop,reset,resume}) => {
  return (
    <div className='display2'>
      
           {(status === 0)?
             <button className='start' onClick={start}>start</button>:" "
          
          }
          {(status === 1)?
            <div>
            <button className="stop" onClick={stop}>stop</button>&nbsp;
            <button className="reset" onClick={reset}>reset</button>
            </div>:""
           
           }
           {(status === 2)?
            <div>
            <button className="resume" onClick={resume}>resume</button> &nbsp;
            <button className="reset" onClick={reset}>reset</button>
            </div>:""
           
           }
        
        
          </div>
        
  )
}

export default Display2