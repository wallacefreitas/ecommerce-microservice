import { Product as ProductDB } from "@prisma/client";
import { Product } from "../entities/product";

export interface ProductRepository {
  create(product: Product, callback: (product: ProductDB) => Promise<void>): Promise<void>;
  remove(id: string, callback: (product: ProductDB) => Promise<void>): Promise<void>;
  findAll(): Promise<ProductDB[]>;
}