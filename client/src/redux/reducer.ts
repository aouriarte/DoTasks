import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";
import { Task } from "../types";

export interface StoreState {
  tasks: Task[];
}

export const reducers = combineReducers<StoreState>({
  tasks: tasksReducer,
});
