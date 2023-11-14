import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="app">
        <h1>ToDo List App</h1>
        <div className="container">

          <div className="wrapper">
          {/* Todo form goes here */}
          <AddTodo/>
          </div>

          <div className="tasks">
          {/*Loop and Add TodoItem here */}
           <TodoList/>
          </div>
        </div>
      </div>
  )
}

export default App
