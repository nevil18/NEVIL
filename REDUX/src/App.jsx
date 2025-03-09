import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {

const count=useSelector((state)=>state.counter.value)
const dispatch=useDispatch();
const [amount,setamount]=useState(0);
function handleplus(){
  dispatch(increment());
}
function handleminus(){
  dispatch(decrement());
}
function handlereset(){
  dispatch(reset());
}
function handleincrement(){
  dispatch(incrementByAmount(amount));
}
  return (
    <div className='container'>
      <button onClick={handleplus}>+</button>
      <br/>
      <p>COUNT:{count}</p>
      <br/>
      <button onClick={handleminus}>-</button>
      <br/>
      <button onClick={handlereset}>reset</button>
      <input type='number' placeholder='enter number' value={amount} onChange={(e)=>setamount(e.target.value)}/>
      <button onClick={handleincrement}>add</button>
    </div>
  )
}

export default App
