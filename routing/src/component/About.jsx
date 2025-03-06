import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  return (
    <div>About
      <button onClick={()=> navigate('/Dashboard')}>go to Dashboard page</button>
    </div>
  )
}

export default About