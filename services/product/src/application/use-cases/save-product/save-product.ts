import { Product } from "@application/entities/product";
import { ProductRepository } from "@application/repositories/product-repository";

type SaveProductRequest = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

type SaveProductResponse = void;

export class SaveProduct {
  constructor(
    private productRepository: ProductRepository,
  ) { }

  async execute({ id, title, description, price, image }: SaveProductRequest): Promise<SaveProductResponse> {
    try {
      const product = Product.create({
        title,
        description,
        price,
        image
      }, id);

      await this.productRepository.save(product);
    } catch (err) {
      throw new Error("Failed to save product");
    }
  }
}