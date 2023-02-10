import axios from "axios";
import { Task } from "../types";

export const getTasks = async () => {
  // : Promise<Task[]>
  const response = await axios.get<Task[]>("http://localhost:3001/tasks");
  return response.data;
};

export const createTask = async (newTask: Task) => {
  return await axios.post("http://localhost:3001/tasks", newTask);
};
