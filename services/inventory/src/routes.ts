import { Router, Request, Response } from "express";

import { findUniqueInventoryPerProductController } from "@application/use-cases/find-inventory-per-product";

const router = Router();

router.get('/inventory/product/:productId', (request: Request, response: Response) => {
  findUniqueInventoryPerProductController.handle(request, response);
})

export { router };