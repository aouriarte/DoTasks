import { Router } from "express";
import { getAllTasks, getTask } from "../controllers/tasks.controllers";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
// router.post("/", );

export default router;
