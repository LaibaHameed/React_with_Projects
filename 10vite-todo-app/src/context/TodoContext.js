import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            checked: false,
        }
    ],
    addTodo: (todo)=>{},
    editTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleCheck: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;