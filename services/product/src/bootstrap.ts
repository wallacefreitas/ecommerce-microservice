import { KafkaService } from "@infra/services/kafka";

export async function bootstrap() {
  const kafkaService = new KafkaService();
  await kafkaService.createTopic('topic-products', 1);

  console.log('📦 Created Topics...');
}