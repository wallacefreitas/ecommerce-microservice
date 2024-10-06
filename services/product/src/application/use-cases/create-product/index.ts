import { CreateProductController } from "@infra/http/controller/create-product-controller";
import { PrismaProductRepository } from "@infra/repositories/prisma/prisma-product-repository";
import { CreateProduct } from "./create-product";
import { KafkaService } from "@infra/services/kafka";

const prismaProductRepository = new PrismaProductRepository();
const kafkaService = new KafkaService();
const createProduct = new CreateProduct(prismaProductRepository, kafkaService);
const createProductController = new CreateProductController(createProduct);

export { createProduct, createProductController }