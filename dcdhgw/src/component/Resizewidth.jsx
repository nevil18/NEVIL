import { useEffect,useState } from 'react'
import React from 'react'

const Resizewidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleresize=()=>setWidth(window.innerWidth);
      window.addEventListener('resize',handleresize);
    
      return () => {
        window.removeEventListener('resize',handleresize);
      }
    }, [])
    
  return (
    <div>
        <h1>window width:{width}</h1>
    </div>
  )
}

export default Resizewidth