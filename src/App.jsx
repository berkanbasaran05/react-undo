import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import pic from './assets/mb.jpg'

function App() {
  const [points, setPoints] = useState([])
  const [data, setdata] = useState([])
  const clickHandle = e => {
    setPoints(points => [...points, {
      x: e.clientX,
      y: e.clientY

    }]) 
    setdata([])
  }

  const redoHandle = e => {
    e.stopPropagation()
    const data =[...points]
    const item = data.pop()
    setdata(data => [...data ,item])
    setPoints(data)
  }
 
  const undoHandle = e => {
    e.stopPropagation()
    const d = [...data]
    const item = d.pop()
    setPoints(points => [...points,item])
    setdata(d)
  }
  
  return (
    <div> 
    <div className='screen' onClick={clickHandle}>
       <header className='header'>
        <button disabled={points.length == 0} onClick={redoHandle}>Redo</button>
        <button disabled={data.length == 0} onClick={undoHandle}>Undo</button>

         </header>

      {points.map((heart ,key) => ( 
      
      <div className='heart items-center flex' key={key} style={{ left:heart.x, top:heart.y }}> <div className='text'> Maike Berkan </div>  </div>

      ))}
      
      
      </div>
      <div> <img src={pic} className='img'></img></div>
      </div>
  )
}

export default App
