import { Task } from "../models/task";

const postTask = async (title: string, description: string, date: number) => {
  try {
    const task = await Task.create({
      title,
      description,
      date,
    });
    return task;
    
  } catch (error) {
    console.log("ERROR EN createTask", error);
  }
};

const editTask = async (id: any, title: string, description: string, date: string) => {
  try {
    const task: any = await Task.findByPk(id);

    await task.update({
      title,
      description,
      date,
    });
    return task;

  } catch (error) {
    console.log("ERROR EN editTask", error);
  }
};

export { postTask, editTask };
