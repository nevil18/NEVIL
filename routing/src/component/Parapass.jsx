import React from 'react'
import {useParams} from 'react-router-dom'
const Parapass = () => {
    const {id}=useParams();
  return (
    <div>para:{id}</div>
  )
}

export default Parapass