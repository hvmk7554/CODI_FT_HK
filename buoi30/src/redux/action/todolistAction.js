/* eslint-disable no-unused-vars */

import { ADD_TODOLIST } from "../type/todolistType"
import { DELETE_TODOLIST } from "../type/todolistType"

export const addTodolist = (payload) => {
return {
type: ADD_TODOLIST,
 payload: payload
}
}

export const deleteTodolist = (payload) => {
    return {
    type: DELETE_TODOLIST,
     payload: payload
    }
    }