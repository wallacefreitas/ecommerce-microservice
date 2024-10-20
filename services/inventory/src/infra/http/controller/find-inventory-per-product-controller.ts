import { Request, Response } from "express";
import { FindUniqueInventoryPerProduct } from "@application/use-cases/find-inventory-per-product/find-inventory-per-product";

export class FindUniqueInventoryPerProductController {
  constructor(private findUniqueInventoryPerProductUseCase: FindUniqueInventoryPerProduct) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { productId } = request.params;
      const inventories = await this.findUniqueInventoryPerProductUseCase.execute(productId);

      return response.status(200).json(inventories);

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}