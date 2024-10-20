import { Router, Request, Response } from "express";

import { findUniqueInventoryPerProductController } from "@application/use-cases/find-inventory-per-product";
import { findAllInventoriesController } from "@application/use-cases/find-all-inventories";

const router = Router();

router.get('/inventory', (request: Request, response: Response) => {
  findAllInventoriesController.handle(request, response);
})

router.get('/inventory/product/:productId', (request: Request, response: Response) => {
  findUniqueInventoryPerProductController.handle(request, response);
})

export { router };