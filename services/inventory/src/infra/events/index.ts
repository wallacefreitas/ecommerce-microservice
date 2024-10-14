import { consumeProductCreatedEvent } from './consumers/product-consumer';
import { KafkaService } from '@infra/services/kafka';

export async function startEventConsumers() {
  const kafkaService = new KafkaService();

  await consumeProductCreatedEvent(kafkaService);
}

