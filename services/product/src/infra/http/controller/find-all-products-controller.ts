import { Request, Response } from "express";
import { FindAllProducts } from "@application/use-cases/find-all-products/find-all-products";

export class FindAllProductsController {
  constructor(private findAllProductsUseCase: FindAllProducts) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.findAllProductsUseCase.execute();

      return response.status(200).json(products);

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}