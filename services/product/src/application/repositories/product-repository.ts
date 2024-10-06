import { Product } from "../entities/product";

export interface ProductRepository {
  create(product: Product, callback: () => Promise<void>): Promise<void>;
}