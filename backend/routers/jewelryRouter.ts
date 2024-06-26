import { Request, Response, Router } from "express";
import { JewelryController } from "../controllers/JewelryController";

export const jewelryRouter = Router();

const jewelryController = new JewelryController();

jewelryRouter.get("/jewelry", async (req: Request, res: Response) => {
  const jewelry = await jewelryController.getAllJewelry();
  res.send(jewelry);
});

jewelryRouter.delete("/jewelry", async (req: Request, res: Response) => {
  const { deleteId } = req.query; 

  if (!deleteId) {
    return res.status(400).send({ error: "ID is required" });
  }

  try {
    const deleted = await jewelryController.deleteJewelryById(Number(deleteId));
    if (deleted) {
      res.send({ message: "Jewelry item deleted successfully." });
    } else {
      res
        .status(404)
        .send({ error: "No jewelry item found with the given ID." });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the jewelry item." });
  }
});

jewelryRouter.post("/jewelry", async (req: Request, res: Response) => {
    const { name, description, price, image_src } = req.body;
    console.log(req)
  
    if (!name || !description || !price || !image_src) {
      return res.status(400).send({ error: `Name, description, price and image_src are required ${name}, ${description}, ${price}, ${image_src}` });
    }
  
    try {
      const newJewelry = await jewelryController.createJewelry({ name, description, price: Number(price) , image_src});
      res.status(201).send({ message: "Jewelry item created successfully.", jewelry: newJewelry });
    } catch (error) {
      res.status(500).send({ error: "An error occurred while creating the jewelry item." });
    }
  });

  jewelryRouter.put("/jewelry/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price ,image_src} = req.body;
  
    if (!name || !description || !price  || !image_src) {
      return res.status(400).send({ error: "Name, description, price and image_srcare required" });
    }
  
    try {
      const updatedJewelry = await jewelryController.updateJewelry(Number(id), name, description, price,image_src);
      if (updatedJewelry) {
        res.send({ message: "Jewelry item updated successfully.", jewelry: updatedJewelry });
      } else {
        res.status(404).send({ error: "No jewelry item found with the given ID." });
      }
    } catch (error) {
      res.status(500).send({ error: "An error occurred while updating the jewelry item." });
    }
  });