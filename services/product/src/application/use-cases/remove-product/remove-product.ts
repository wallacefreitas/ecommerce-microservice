import { ProductRepository } from "@application/repositories/product-repository";
import { QueueService } from "@core/interfaces/queue-service";

type RemoveProductRequest = {
  id: string;
};

type RemoveProductResponse = void;

export class RemoveProduct {
  constructor(
    private productRepository: ProductRepository,
    private queue: QueueService
  ) { }

  async execute({ id }: RemoveProductRequest): Promise<RemoveProductResponse> {
    try {
      await this.productRepository.remove(id, async (removedProduct) => {
        await this.queue.produce('topic-products', {
          ...removedProduct,
          status: "removed"
        });

      });
    } catch (err) {
      throw new Error("Failed to remove product or send message to Kafka");
    }
  }
}