import React from 'react'

const Button = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=> props.setname(e.target.value)}/>
      <p>change {props.title}:{props.name}</p>
    </div>
  )
}

export default Button