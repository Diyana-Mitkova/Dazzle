import { Request, Response, Router } from "express";
import { SingleController } from "../controllers/SingleConroller";

export const singleRouter = Router();

const singleController = new SingleController();

singleRouter.get("/single/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const jewelry = await singleController.getSingleJewelry(Number(id));
  res.send(jewelry);
});

