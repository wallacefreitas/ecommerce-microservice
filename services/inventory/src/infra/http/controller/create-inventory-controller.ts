import { Request, Response } from "express";
import { CreateInventory } from "@application/use-cases/create-inventory/create-inventory";

export class CreateInventoryController {
  constructor(private createInventoryUseCase: CreateInventory) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      productId,
      quantity
    } = request.body;

    try {
      const { inventory } = await this.createInventoryUseCase.execute({
        productId,
        quantity
      })

      return response.status(201).json({
        id: inventory.id,
        productId: inventory.productId,
        quantity: inventory.quantity
      });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}