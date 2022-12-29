import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.send("ruta get task!")
});

router.post("/", (_req: Request, res: Response) => {
    res.send("ruta post task!")
});

export default router;
