import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.increment}>click me</button>
    </div>
  )
}

export default Button