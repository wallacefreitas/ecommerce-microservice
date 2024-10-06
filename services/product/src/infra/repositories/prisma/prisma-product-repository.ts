import { PrismaClient, Prisma, Product as ProductDB } from "@prisma/client";
import { Product } from "@application/entities/product";
import { ProductRepository } from "@application/repositories/product-repository";

export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma = new PrismaClient()) {}

  async create(product: Product, callback: (productDB: ProductDB) => Promise<void>): Promise<void> {
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const createdProduct = await tx.product.create({
        data: {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image
        }
      });

      await callback(createdProduct);
    });
  }

  async remove(id: string, callback: (productDB: ProductDB) => Promise<void>): Promise<void> {
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const removedProduct = await tx.product.delete({
        where: {
          id
        }
      });

      await callback(removedProduct);
    });
  }
}