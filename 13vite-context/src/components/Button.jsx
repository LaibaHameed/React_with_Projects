import React, { useContext } from 'react'
import Component from './Component'
import { counterContext } from '../context/context'

const Button = () => {
    const value = useContext(counterContext);
    // const {setCount} = useContext(counterContext);
  return (
    <>
        <button onClick={() => value.setCount((count) => count + 1)} >click</button>
        <Component/>
    </>
  )
}

export default Button