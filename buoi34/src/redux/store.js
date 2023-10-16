/* eslint-disable no-unused-vars */
import { createStore } from "redux"
import todolistReducer from "./reducer/todolistReducer";

export const store = createStore(todolistReducer);
