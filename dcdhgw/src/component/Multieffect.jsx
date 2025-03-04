import React, { useState,useEffect } from 'react'

const Multieffect = () => {
    const[count,setcount]=useState(0);
    const[second,setsecond]=useState(0);

    useEffect(() => {
      console.log('total count is : ',count);
    }, [count])

    useEffect(() => {
      const interval=setInterval(() => {
        setsecond(second+1)
      },1000);
    
      return () => {
        clearInterval(interval);
      }
    })
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setcount(count+1)}>click</button>
        <h1>second:{second}</h1>
    </div>
  )
}

export default Multieffect