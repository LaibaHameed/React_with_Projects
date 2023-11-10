import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setToDos] = useState([]);

  const addTodo = (todo) => {
    setToDos((prev) => {
      return [...prev, { id: Date.now(), ...todo }];
      // if we write todo instead of { id: Date.now(), ...todo }
    });
  };

  const editTodo = (id, todo) => {
    setToDos((prev) => {
      return prev.map((eachTodo) => {
        return eachTodo.id === id ? todo : eachTodo;
        // if(eachTodo.id === id){ return todo}    **same function
      });
    });
  };

  const deleteTodo = (id) => {
    setToDos((prev) => {
      return prev.filter((eachTodo) => eachTodo.id !== id);
    });
  };

  const toggleCheck = (id) => {
    setToDos((prev)=>{
      return prev.map((eachTodo)=>{
        return eachTodo.id === id ? {...eachTodo, checked: !eachTodo.checked} : eachTodo;
      })
    })
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    if(todos && todos.length > 0){
      setToDos(todos)
    }
  }, []);

  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
  
  }, [todos]);
  

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleCheck }}>
      <div className="app">
        <h1>ToDo List App</h1>
        <div className="container">
          <div className="wrapper">
          {/* Todo form goes here */}
          <TodoForm/>
          </div>
          <div className="tasks">
          {/*Loop and Add TodoItem here */}
           <section id="tasks">
            {todos.map((todo)=>{
              return <div key={todo.id}>
              <TodoItem todo={todo}/>
              </div>
            })}
           </section>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
