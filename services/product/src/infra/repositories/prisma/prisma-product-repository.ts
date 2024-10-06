import { PrismaClient, Prisma } from "@prisma/client";
import { Product } from "@application/entities/product";
import { ProductRepository } from "@application/repositories/product-repository";

export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create(product: Product, callback: () => Promise<void>): Promise<void> {
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.product.create({
        data: {
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image
        }
      });

      await callback();
    });
  }
}