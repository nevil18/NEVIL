import React, { useState,useEffect } from 'react'

const Time = () => {
    const[second,setsecond]=useState(0);
    useEffect(() => {
    const interval=setInterval(()=>{
        setsecond(second=>second+1)
    },1000);
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div>
        <h1>second:{second}</h1>
    </div>
  )
}

export default Time