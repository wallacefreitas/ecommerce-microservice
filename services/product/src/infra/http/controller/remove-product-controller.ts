import { Request, Response } from "express";
import { RemoveProduct } from "@application/use-cases/remove-product/remove-product";

export class RemoveProductController {
  constructor(private removeProductUseCase: RemoveProduct) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.removeProductUseCase.execute({ id });

      return response.status(204).json({ 
        message: `Product ${id} removed with success.` 
      });

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}