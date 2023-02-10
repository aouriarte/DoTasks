import { Request, Response } from "express";
import { Task } from "../models/task";
import { postTask, editTask } from "./utils";

const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await Task.findAll();

    if (!allTasks.length) {
      return res.status(404).send({ msg: "No hay tareas creadas" });
    }
    res.status(200).json(allTasks);

  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findTask = await Task.findByPk(id);
    if (!findTask) {
      return res.status(404).send({ msg: "Tarea no encontrada" });
    }
    res.status(200).json(findTask);

  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, date } = req.body;
    const newTask = await postTask(title, description, date);

    if (newTask) {
      return res.status(201).json(newTask);
    }
    res.status(400).send({ msg: "Envia bien los datos" });

  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;

    const changeTask = await editTask(id, title, description, date);
    if (changeTask) {
      return res.status(201).json(changeTask);
    }
    res.status(404).send({ msg: "Tarea no encontrada" });

  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).send({ msg: "Tarea no encontrada" });
    }
    // await task.update({ visibility: false }); borrado lógico
    await task.destroy();
    res.status(201).send({ msg: "Tarea borrada" });
    
  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
