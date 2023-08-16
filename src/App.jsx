import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


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
    <div className='screen' style={{ backgroundImage: `url("src/assets/ey.jpeg")`, backgroundSize: 'cover' }}> 
   <iframe width="923" height="519" src="https://www.youtube.com/embed/6Cuki8mezDM" title="ZAKKUM // Seni Rastgele Sevmedim (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className='screen' onClick={clickHandle} >
       <header className='header'>
        <button disabled={points.length == 0} onClick={redoHandle}>Geri Al</button>
        <button disabled={data.length == 0} onClick={undoHandle}>İleri</button>

         </header>

      {points.map((heart ,key) => ( 
      
      <div className='heart items-center flex' key={key} style={{ left:heart.x, top:heart.y }}> <div className='text'> Eda Yasin </div>  </div>

      ))}
      
      
      </div>

      </div>
  )
}

export default App
