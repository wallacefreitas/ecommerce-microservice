import { Inventory } from "@prisma/client";
import { InventoryRepository } from "@application/repositories/inventory-repository";

type FindUniqueInventoryPerProductResponse = Inventory[];

export class FindUniqueInventoryPerProduct {
  constructor(private inventoryRepository: InventoryRepository) { }

  async execute(productId: string): Promise<FindUniqueInventoryPerProductResponse> {
    return await this.inventoryRepository.findInventoryByProduct(productId);
  }
}