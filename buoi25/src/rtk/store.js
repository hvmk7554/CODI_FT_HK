import { configureStore } from "@reduxjs/toolkit"; 
import todolistReducer from "./slices/todolistslice";

export const store = configureStore({
reducer : {
todolist: todolistReducer,
}
})