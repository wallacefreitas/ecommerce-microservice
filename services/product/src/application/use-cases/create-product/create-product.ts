import { Product } from "@application/entities/product";
import { ProductRepository } from "@application/repositories/product-repository";
import { QueueService } from "@core/interfaces/queue-service";

type CreateProductRequest = {
  title: string;
  description: string;
  price: number;
  image: string;
};

type CreateProductResponse = {
  product: Product
};

export class CreateProduct {
  constructor(
    private productRepository: ProductRepository,
    private queue: QueueService
  ) { }

  async execute({ title, description, price, image }: CreateProductRequest): Promise<CreateProductResponse> {
    const product = Product.create({
      title,
      description,
      price,
      image
    });

    try {
      await this.productRepository.create(product, async (newProduct) => {
        await this.queue.produce('topic-products', {
          ...newProduct,
          status: "created"
        });
      });

      return { 
        product 
      };
    } catch (err) {
      throw new Error("Failed to create product or send message to Kafka");
    }
  }
}