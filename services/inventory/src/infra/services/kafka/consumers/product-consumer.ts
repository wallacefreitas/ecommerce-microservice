import { createInventory } from "@application/use-cases/create-inventory";
import { QueueService } from "@core/interfaces/queue-service";

enum ProductStatus {
  Created = "created",
  Removed = "removed"
}

export async function consumeProductCreatedEvent(queueService: QueueService) {
  await queueService.consume("topic-products", async (message: string) => {
    const { id, status } = JSON.parse(message);

    if (status === ProductStatus.Created) {
      createInventory.execute({productId: id, quantity: 0});
    }
  });
}