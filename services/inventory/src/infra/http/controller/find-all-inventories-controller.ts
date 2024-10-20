import { Request, Response } from "express";
import { FindAllInventories } from "@application/use-cases/find-all-inventories/find-all-inventories";

export class FindAllInventoriesController {
  constructor(private findAllInventoriesUseCase: FindAllInventories) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const limit = request.query.limit as string;
    const offset = request.query.offset as string;

    try {
      const inventories = await this.findAllInventoriesUseCase.execute({
        limit,
        offset
      });

      return response.status(200).json(inventories);

    } catch(err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}