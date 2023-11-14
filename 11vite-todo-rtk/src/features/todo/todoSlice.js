import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "hello world", checked: false}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                checked: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((eachTodo)=> eachTodo.id !== action.payload)
        },
        editTodo:(state, action)=>{
        return  state.todos.map((eachTodo)=> eachTodo.id === action.payload)
        },
        toggleTodo:(state, action)=>{
        return state.todos.map((eachTodo)=> eachTodo.id === action.payload ? { ...eachTodo, checked: !eachTodo.checked }: eachTodo)
        }
    }
})

export const {addTodo,removeTodo, editTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer