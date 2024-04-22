import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component = () => {
    const value = useContext(counterContext);
    // const {count} = useContext(counterContext);
  return (
    <div>{value.count}</div> //{count}
  )
}

export default Component