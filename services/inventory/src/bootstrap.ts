import { startEventConsumers } from "@infra/events";

export function bootstrap() {
  startEventConsumers();
}
