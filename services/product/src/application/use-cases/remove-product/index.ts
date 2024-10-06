import { RemoveProductController } from "@infra/http/controller/remove-product-controller";
import { PrismaProductRepository } from "@infra/repositories/prisma/prisma-product-repository";
import { RemoveProduct } from "./remove-product";
import { KafkaService } from "@infra/services/kafka";

const prismaProductRepository = new PrismaProductRepository();
const kafkaService = new KafkaService();
const removeProduct = new RemoveProduct(prismaProductRepository, kafkaService);
const removeProductController = new RemoveProductController(removeProduct);

export { removeProduct, removeProductController }