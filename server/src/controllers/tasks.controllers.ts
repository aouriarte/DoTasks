import { Request, Response } from "express";
import { Task } from "../models/task";

const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const allTasks = await Task.findAll();

    if (!allTasks.length) {
      return res.status(404).send({ msg: "No hay tareas creadas" });
    }
    res.status(200).json({ msg: "Todas las tareas", allTasks });
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
    res.status(200).json({ msg: "Tarea encontrada", findTask });
  } catch (error: any) {
    res.status(500).send({ msg: error.message });
  }
};

export { getAllTasks, getTask };
