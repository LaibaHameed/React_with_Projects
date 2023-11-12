import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { removeTodo } from '../features/todo/todoSlice'

const TodoList = () => {

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
        // onChange={toggleComplete}
      />
      <input
        type="text"
        className={`task-name itemTextInput `}
        // ${isToDoEiditable && !todo.checked ? "" : "eiditableBorder"} ${todo.checked ? "line" : " "}
        value={todo.text}
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