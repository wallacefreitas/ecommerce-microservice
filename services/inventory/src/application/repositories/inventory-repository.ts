import { Inventory as InventoryDB } from "@prisma/client";
import { Inventory } from "../entities/inventory";

export interface InventoryRepository {
  create(inventory: Inventory): Promise<void>;
  findInventoryByProduct(productId: string): Promise<InventoryDB[]>;
}