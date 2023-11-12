import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addToDoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <section id="wrapper">
      <div className="textInputWrapper">
        <input
          placeholder="Task To Be Done"
          type="text"
          className="textInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button id="add-btn" onClick={addToDoHandler}>
        <span>Add</span>
      </button>
    </section>
  )
}

export default AddTodo