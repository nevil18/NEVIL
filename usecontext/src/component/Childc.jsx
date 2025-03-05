import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const Childc = () => {
    // const User=useContext(Usercontext);
    const {theme,setTheme}=useContext(ThemeContext);
    function handleclick(){
        if(theme==='light')
        {
            setTheme('dark')
        }
        else
        {
            setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={handleclick}>click me</button>
    </div>
  )
}

export default Childc