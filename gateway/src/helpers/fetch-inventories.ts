import { Inventory } from "src/models/inventory-model";

export async function fetchInventories(productIds: string[], limit?: number, offset?: number): Promise<Inventory[]> {
  const inventoryPromises = productIds.map(id =>
    fetch(`http://host.docker.internal:8000/inventory/product/${id}`).then(res => res.json())
  );
  return Promise.all(inventoryPromises) as Promise<Inventory[]>;
}