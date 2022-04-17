import React, { useEffect, useReducer, useState } from 'react'
import TdList from './List'
import TdInput from './Input'
import { ITodo,IState, ACTION_TYPE } from './typings'
import { todoReducer } from './reducer'
const TodoList = () => { 
    const initialState:IState = {
        todoList:[]
    }
    const [state,dispatch] = useReducer(todoReducer,initialState)
    const addTodo = (todo: ITodo) => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }
    const removeTodo = (id:number) => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }
    const toggleTodo = (id: number) => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    }
    useEffect(() => { 
       
        const todoList = JSON.parse(localStorage.getItem('todoList') || '[]')
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
    },[])
    useEffect(() => { 
        localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },[state.todoList])
    return (
        <div className='todo-list'>
            <TdInput
                addTodo={ addTodo }
                todoList={ state.todoList }
            ></TdInput>
            <TdList todoList={state.todoList} removeTodo={ removeTodo } toggleTodo = { toggleTodo }></TdList>
        </div>
    )
}
export default TodoList