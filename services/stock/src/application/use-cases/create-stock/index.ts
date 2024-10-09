import { CreateStockController } from "@infra/http/controller/create-stock-controller";
import { PrismaStockRepository } from "@infra/repositories/prisma/prisma-stock-repository";
import { CreateStock } from "./create-stock";

const prismaStockRepository = new PrismaStockRepository();
const createStock = new CreateStock(prismaStockRepository);
const createStockController = new CreateStockController(createStock);

export { createStock, createStockController }