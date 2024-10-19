import { Request, Response } from "express";
import { SaveProduct } from "@application/use-cases/save-product/save-product";

export class SaveProductController {
  constructor(private saveProductUseCase: SaveProduct) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      title,
      description,
      price,
      image
    } = request.body;

    try {
      const product = {
        id,
        title,
        description,
        price,
        image
      };

      await this.saveProductUseCase.execute(product)

      return response.status(200).json(product);

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}