import { Product } from "@prisma/client";
import { ProductRepository } from "@application/repositories/product-repository";

type FindUniqueProductResponse = Product;

export class FindUniqueProduct {
  constructor(private productRepository: ProductRepository) { }

  async execute(id: string): Promise<FindUniqueProductResponse> {
    return await this.productRepository.findUnique(id);
  }
}