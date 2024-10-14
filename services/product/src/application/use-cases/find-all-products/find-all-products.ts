import { Product } from "@prisma/client";
import { ProductRepository } from "@application/repositories/product-repository";

type FindAllProductsResponse = Product[];

export class FindAllProducts {
  constructor(private productRepository: ProductRepository) { }

  async execute(): Promise<FindAllProductsResponse> {
    return await this.productRepository.findAll();
  }
}