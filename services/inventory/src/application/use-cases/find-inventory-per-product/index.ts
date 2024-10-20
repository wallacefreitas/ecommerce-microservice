import { FindUniqueInventoryPerProductController } from "@infra/http/controller/find-inventory-per-product-controller";
import { PrismaInventoryRepository } from "@infra/repositories/prisma/prisma-inventory-repository";
import { FindUniqueInventoryPerProduct } from "./find-inventory-per-product";

const prismaInventoryRepository = new PrismaInventoryRepository();
const findUniqueInventoryPerProduct = new FindUniqueInventoryPerProduct(prismaInventoryRepository);
const findUniqueInventoryPerProductController = new FindUniqueInventoryPerProductController(findUniqueInventoryPerProduct);

export { findUniqueInventoryPerProduct, findUniqueInventoryPerProductController }