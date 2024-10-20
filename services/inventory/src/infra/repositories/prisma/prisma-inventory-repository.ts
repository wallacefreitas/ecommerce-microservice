import { PrismaClient, Inventory as InventoryDB } from "@prisma/client";
import { Inventory } from "@application/entities/inventory";
import { InventoryRepository } from "@application/repositories/inventory-repository";
import { Pagination } from "@core/interfaces/pagination";

type InventoryRepositoryRequest = Pagination;
export class PrismaInventoryRepository implements InventoryRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create(inventory: Inventory): Promise<void> {
    await this.prisma.inventory.create({
      data: {
        id: inventory.id,
        productId: inventory.productId,
        quantity: inventory.quantity
      }
    })
  }

  async findAllInventories({ limit, offset }: InventoryRepositoryRequest): Promise<InventoryDB[]> {
    return await this.prisma.inventory.findMany({
      skip: Number(offset),
      take: Number(limit)
    });
  }

  async findInventoryByProduct(productId: string): Promise<InventoryDB[]> {
    return await this.prisma.inventory.findMany({
      where: {
        productId
      }
    });
  }
}