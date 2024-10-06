import { Request, Response } from "express";
import { CreateProduct } from "@application/use-cases/create-product/create-product";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProduct) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      price,
      image
    } = request.body;

    try {
      const { product } = await this.createProductUseCase.execute({
        title,
        description,
        price,
        image
      })

      return response.status(201).json({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image
      });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}