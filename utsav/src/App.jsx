import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState('white');
  return (
    <div className='container' style={{backgroundColor : bgColor}}>
          <div className='p1'>
            <button id='id1' onClick={() => setBgColor('red')}>red</button>
            <button id='id2' onClick={() => setBgColor('green')}>green</button>
            <button id='id3' onClick={() => setBgColor('blue')}>blue</button>
            <button id='id4' onClick={() => setBgColor('yellow')}>yellow</button>
            <button id='id5' onClick={() => setBgColor('purple')}>purple</button>
          </div>
          </div>
  )
}

export default App
