import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const [isToDoEiditable, setIsToDoEiditable] = useState(false);
  const [toDoMsg, settoDoMsg] = useState(todo.todo);
  const { editTodo, toggleCheck, deleteTodo } = useTodo();

  const updateToDo = () => {
    editTodo(todo.id, { ...todo, todo: toDoMsg });
    setIsToDoEiditable(false);
  };

  const toggleComplete = () => {
    toggleCheck(todo.id);
  };

  return (
    <section className="task">
      <input
        type="checkbox"
        name=""
        id="task-check"
        checked={todo.checked}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`task-name itemTextInput ${
          isToDoEiditable && !todo.checked ? "" : "eiditableBorder"
        } ${todo.checked ? "line" : " "}`}
        value={toDoMsg}
        onChange={(e) => settoDoMsg(e.target.value)}
        readOnly={!isToDoEiditable}
      ></input>
      <button
        className={`edit ${todo.checked ? "not-allow" : " "}`}
        onClick={() => {
          if (todo.checked) return;
          // if (todo.checked === true) return;    **same
          if (isToDoEiditable) {
            updateToDo();
          } else setIsToDoEiditable((prev) => !prev);
        }}
        // disabled={todo.checked === true}
      >
        {isToDoEiditable && !todo.checked ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </section>
    // </section>
  );
};

export default TodoItem;
