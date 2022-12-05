import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [points, setPoints] = useState([])
  const clickHandle = e => {
    setPoints(points => [...points, {
      x: e.clientX,
      y: e.clientY

    }])
  }

  const redoHandle = e => {
    e.stopPropagation()
    const data =[...points]
    data.pop()
    setPoints(data)
  }

  
  return (
   
    <div className='screen' onClick={clickHandle}>
       <header className='header'>
        <button disabled={points.length == 0} onClick={redoHandle}>Redo</button>
        <button>Undo</button>

         </header>

      {points.map(heart => ( 
      
      <div className='heart items-center flex' style={{ left:heart.x, top:heart.y }}> <div className='text'> Maike Berkan </div>  </div>

      ))}
      
      </div>
  )
}

export default App
