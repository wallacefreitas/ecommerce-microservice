import { Router, Request, Response } from "express";
import { createProductController } from "@application/use-cases/create-product";

const router = Router();

router.post('/product', (request: Request, response: Response) => {
  createProductController.handle(request, response);
})

export { router };