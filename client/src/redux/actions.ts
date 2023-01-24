import axios from "axios";
import { Dispatch } from "redux";
import { Task } from "../types";

export interface FetchTaskAction {
  type: ActionTypes.GET_ALL_TASKS;
  payload: Task[];
}

export enum ActionTypes {
  GET_ALL_TASKS = "GET_ALL_TASKS",
  GET_TASK = "GET_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  DELETE_TASK = "DELETE_TASK",
}

export const getAllTasks = () => {
  return async (dispatch: Dispatch) => {
    let res = await axios.get<Task[]>("http://localhost:3001/tasks");
    // console.log("ACÁ", res.data);
    dispatch<FetchTaskAction>({
      // esto nos asegurará que despachemos el objeto con la estructura correcta
      type: ActionTypes.GET_ALL_TASKS,
      payload: res.data,
    });
  };
};
