import { Router, Request, Response } from "express";

import { createProductController } from "@application/use-cases/create-product";
import { removeProductController } from "@application/use-cases/remove-product";
import { findAllProductsController } from "@application/use-cases/find-all-products";
import { findUniqueProductController } from "@application/use-cases/find-unique-product";

const router = Router();

router.get('/product', (request: Request, response: Response) => {
  findAllProductsController.handle(request, response);
})

router.get('/product/:id', (request: Request, response: Response) => {
  findUniqueProductController.handle(request, response);
})

router.post('/product', (request: Request, response: Response) => {
  createProductController.handle(request, response);
})

router.delete('/product/:id', (request: Request, response: Response) => {
  removeProductController.handle(request, response);
})

export { router };