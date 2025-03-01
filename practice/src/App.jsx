import { useState } from 'react'
import './App.css'
import Button from './component/Button.jsx'
import Card from './component/Card.jsx'
function App() {
    const [count,setcount]=useState(0);
    function m()
    {
      setcount(count+1);
    }
  return (
    <div>
      <Card>

      </Card>
      <Button increment={m}>
        <h1>{count}
          
        </h1>
      </Button>
    </div>
  )
}

export default App
