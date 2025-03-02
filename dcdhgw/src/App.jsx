import { useState } from 'react'
import './App.css'
import Card from './component/Card.jsx'

function App() {
  const [name,setname]=useState('');
  return (
    <div>
      <Card title='card1' name={name} setname={setname}></Card>
      <Card title='card2' name={name} setname={setname}></Card>
      <p>change in parent using chile:{name}</p>
    </div>
  )
}

export default App