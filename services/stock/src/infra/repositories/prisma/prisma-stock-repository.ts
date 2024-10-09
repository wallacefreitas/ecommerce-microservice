import { PrismaClient } from "@prisma/client";
import { Stock } from "@application/entities/stock";
import { StockRepository } from "@application/repositories/stock-repository";

export class PrismaStockRepository implements StockRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create(stock: Stock): Promise<void> {
    await this.prisma.stock.create({
      data: {
        id: stock.id,
        productId: stock.productId,
        quantity: stock.quantity
      }
    })
  }
}