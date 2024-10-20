import { CompressionTypes, Consumer, Kafka, Partitioners } from 'kafkajs'

export class KafkaService {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'products-events-processor',
      brokers: ["kafka:29092"]
    })

    this.consumer = this.kafka.consumer({ 
      groupId: 'products-group' 
    })
  }

  public async createTopic(topic: string, numPartitions: number) {
    const admin = this.kafka.admin();

    await admin.connect();
    await admin.createTopics({
      topics: [
        {
          topic,
          numPartitions,
        },
      ],
    });
    
    await admin.disconnect()
  }

  public async produce(topic: string, message: object) {
    const producer = this.kafka.producer({
      createPartitioner: Partitioners.LegacyPartitioner
    });
    
    await producer.connect()
    await producer.send({
      topic,
      messages: [
        { 
          key: "product", 
          value: JSON.stringify(message) 
        }
      ],
      compression: CompressionTypes.GZIP
    });
    
    await producer.disconnect();
  } 

  public async consume(topic: string, callback: Function) {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic,
      fromBeginning: true
    })
  
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        callback(message.value?.toString());
      }
    })
  }
}