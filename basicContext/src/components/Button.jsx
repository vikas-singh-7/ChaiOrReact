import React from 'react'
import { useContext } from 'react';
import { counterContext } from '../context/Incrementcontext';

const Button = () => {
    const {setCount,count} = useContext(counterContext);

  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
    </div>
  )
}

export default Button