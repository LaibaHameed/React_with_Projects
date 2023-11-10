import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [toDo, setToDo] = useState("");
  const { addTodo } = useTodo();

  const addToDo = (e) => {
    e.preventDefault()
    if (!toDo) return;

    addTodo({ todo: toDo, checked: false });
    // then we write instead: addTodo({id: Date.now(), todo:toDo, checked: false})

    setToDo("");
  };
  return (
    <section id="wrapper">
      <div className="textInputWrapper">
        <input
          placeholder="Task To Be Done"
          type="text"
          className="textInput"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
      </div>
      <button id="add-btn" onClick={addToDo}>
        <span>Add</span>
      </button>
    </section>
  );
};

export default TodoForm;
