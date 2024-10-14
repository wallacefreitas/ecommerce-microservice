import { Inventory } from "../entities/inventory";

export interface InventoryRepository {
  create(inventory: Inventory): Promise<void>;
}