import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <counterContext.Provider value={{count, setCount}}>
    {/* <Navbar/> */}
    <Form/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App
