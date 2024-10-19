import { Request, Response } from "express";
import { FindUniqueProduct } from "@application/use-cases/find-unique-product/find-unique-product";

export class FindUniqueProductController {
  constructor(private findUniqueProductUseCase: FindUniqueProduct) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const product = await this.findUniqueProductUseCase.execute(id);

      return response.status(200).json(product);

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}