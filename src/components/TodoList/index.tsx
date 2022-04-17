import React, { useEffect, useReducer, useState } from 'react'
import TdList from './List'
import TdInput from './Input'
import { ITodo,IState, ACTION_TYPE } from './typings'
import { todoReducer } from './reducer'
const TodoList = () => { 
    // const [todoList, setTodoList] = useState<ITodo[]>([])
    const initialState:IState = {
        todoList:[]
    }
    const [state,dispatch] = useReducer(todoReducer,initialState)
    const addTodo = (todo: ITodo) => {
        // setTodoList(todoList => [...todoList,todo])
        // console.log(todo)
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }
    useEffect(() => { 
        console.log(state.todoList,'todoList')
    })
    return (
        <div className='todo-list'>
            <TdInput
                addTodo={ addTodo }
                todoList={ state.todoList }
            ></TdInput>
            <TdList></TdList>
        </div>
    )
}
export default TodoList