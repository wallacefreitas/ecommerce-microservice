export interface QueueService {
  produce(topic: string, message: object): Promise<void>;
  consume(topic: string, callback: (message: string) => Promise<void>): Promise<void>;
}