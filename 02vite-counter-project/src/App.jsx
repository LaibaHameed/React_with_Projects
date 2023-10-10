import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = ()=>{
    if (count<20) {
      count += 1;
      setCount(count);
    }
  }
  const minusValue = ()=>{
    if (count>0) {
      count -= 1;
      setCount(count);
    }
  }

  return (
    <>
    <h1>Chai or Code</h1>
    <h2>counter Value: {count} </h2>
    <button onClick={addValue}>increment</button>
    <br/>
    <button onClick={minusValue}>decrement</button>
    </>
  )
}

export default App
