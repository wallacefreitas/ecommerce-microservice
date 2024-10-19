import { PrismaClient, Prisma, Product as ProductDB } from "@prisma/client";
import { Product } from "@application/entities/product";
import { ProductRepository } from "@application/repositories/product-repository";

export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma = new PrismaClient()) {}

  async findUnique(id: string): Promise<ProductDB> {
    return await this.prisma.product.findUnique({
      where: {
        id
      }
    }) || {} as ProductDB;
  }

  async findAll(): Promise<ProductDB[]> {
    return await this.prisma.product.findMany();
  }

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

  async save(product: Product): Promise<void> {
    await this.prisma.product.update({
      where: {
        id: product.id
      },
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image
      }
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