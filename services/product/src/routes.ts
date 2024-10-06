import { Router, Request, Response } from "express";

import { createProductController } from "@application/use-cases/create-product";
import { removeProductController } from "@application/use-cases/remove-product";

const router = Router();

router.post('/product', (request: Request, response: Response) => {
  createProductController.handle(request, response);
})

router.delete('/product/:id', (request: Request, response: Response) => {
  removeProductController.handle(request, response);
})

export { router };