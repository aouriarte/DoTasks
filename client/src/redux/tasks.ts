import { Task } from "../types";
import { FetchTaskAction, ActionTypes } from "./actions";

export const tasksReducer = (
  state: Task[] = [],
  action: FetchTaskAction
) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_TASKS:
      return action.payload;
    default:
      return state;
  }
};
