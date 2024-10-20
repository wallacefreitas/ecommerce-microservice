import { Inventory } from "@prisma/client";
import { InventoryRepository } from "@application/repositories/inventory-repository";
import { Pagination } from "@core/interfaces/pagination";

type FindAllInventoriesRequest = Pagination;
type FindAllInventoriesResponse = Inventory[];

export class FindAllInventories {
  constructor(private inventoryRepository: InventoryRepository) { }

  async execute({ limit, offset }: FindAllInventoriesRequest): Promise<FindAllInventoriesResponse> {
    return await this.inventoryRepository.findAllInventories({ 
      limit, offset 
    });
  }
}