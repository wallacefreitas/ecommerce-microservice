import { Request, Response } from "express";
import { CreateStock } from "@application/use-cases/create-stock/create-stock";

export class CreateStockController {
  constructor(private createStockUseCase: CreateStock) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      productId,
      quantity
    } = request.body;

    try {
      const { stock } = await this.createStockUseCase.execute({
        productId,
        quantity
      })

      return response.status(201).json({
        id: stock.id,
        productId: stock.productId,
        quantity: stock.quantity
      });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}