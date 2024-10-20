import { startEventConsumers } from "@infra/services/kafka/events";

export function bootstrap() {
  startEventConsumers();
}
