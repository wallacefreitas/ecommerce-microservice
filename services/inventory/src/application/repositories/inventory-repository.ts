import { Inventory as InventoryDB } from "@prisma/client";
import { Inventory } from "../entities/inventory";
import { Pagination } from "@core/interfaces/pagination";

type FindAllInventoriesRequest = Pagination;
export interface InventoryRepository {
  create(inventory: Inventory): Promise<void>;
  findAllInventories({ limit, offset }: FindAllInventoriesRequest): Promise<InventoryDB[]>;
  findInventoryByProduct(productId: string): Promise<InventoryDB[]>;
}