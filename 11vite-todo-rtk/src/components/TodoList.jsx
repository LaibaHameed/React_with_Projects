import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { removeTodo, editTodo, toggleTodo } from '../features/todo/todoSlice'

const TodoList = () => {
  const [isToDoEiditable, setIsToDoEiditable] = useState(false);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  return (
    <section id="tasks">
    {todos.map((todo)=>(
      <section className="task" key={todo.id}>
      <input
        type="checkbox"
        name=""
        id="task-check"
        checked={todo.checked}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <input
        type="text"
        className={`task-name itemTextInput `}
        value={todo.text}
        readOnly
        // ${isToDoEiditable && !todo.checked ? "" : "eiditableBorder"} ${todo.checked ? "line" : " "}
        // value={inputText}
        // onChange={e => setInputText(e.target.value)}
        // onChange={(e) => settoDoMsg(e.target.value)}
        // readOnly={!isToDoEiditable}
      ></input>
      <button
        className={`edit ${todo.checked ? "not-allow" : " "}`}
        // onClick={() => {
        //   if (todo.checked === true) return;
        //   if (isToDoEiditable === true) {
        //     updateToDo();
        //   } else setIsToDoEiditable((prev) => !prev);
        // }}
        // disabled={todo.checked === true}
      >
        {/* {isToDoEiditable && !todo.checked ? "Save" : "Edit"} */}
        Edit
      </button>
      <button className="delete" onClick={() => dispatch(removeTodo(todo.id))}>
        delete
      </button>
    </section>
    ))}

    </section>
  )
}

export default TodoList