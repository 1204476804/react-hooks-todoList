import { ACTION_TYPE, IACTION, IState, ITodo } from "./typings";

function todoReducer(state: IState, action: IACTION): IState { 
    const { type, payload } = action
    switch (type) {
        case ACTION_TYPE.INIT_TODOLIST:
            return {
                ...state,
                todoList:payload as ITodo[]
            }
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList,payload as ITodo]
            }
        case ACTION_TYPE.REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== payload)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    return item.id === payload ?
                        {
                            ...item,
                            completed: !item.completed
                        }
                        :
                        {
                            ...item
                        }
                })
            }
        default:
            return state
     }
   
}
export { 
    todoReducer
}