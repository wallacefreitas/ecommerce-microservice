import { Inventory } from "@application/entities/inventory";
import { InventoryRepository } from "@application/repositories/inventory-repository";

type CreateInventoryRequest = {
  productId: string;
  quantity: number;
};

type CreateInvetoryResponse = {
  inventory: any
};

export class CreateInventory {
  constructor(
    private inventoryRepository: InventoryRepository
  ) {}

  async execute({ productId, quantity }: CreateInventoryRequest): Promise<CreateInvetoryResponse> {
    const inventory = Inventory.create({
      productId,
      quantity
    });

    await this.inventoryRepository.create(inventory);

    return {
      inventory
    }
  }
}