import { createStock } from "@application/use-cases/create-stock";
import { QueueService } from "@core/interfaces/queue-service";

enum ProductStatus {
  Created = "created",
  Removed = "removed"
}

export async function consumeProductCreatedEvent(queueService: QueueService) {
  await queueService.consume("topic-products", async (message: string) => {
    const { id, status } = JSON.parse(message);

    if (status === ProductStatus.Created) {
      createStock.execute({productId: id, quantity: 0});
    }
  });
}