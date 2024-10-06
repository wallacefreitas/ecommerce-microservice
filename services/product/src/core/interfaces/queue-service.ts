export interface QueueService {
  produce(topic: string, message: object): Promise<void>
}