import { CreateInventoryController } from "@infra/http/controller/create-inventory-controller";
import { PrismaInventoryRepository } from "@infra/repositories/prisma/prisma-inventory-repository";
import { CreateInventory } from "./create-inventory";

const prismaInventoryRepository = new PrismaInventoryRepository();
const createInventory = new CreateInventory(prismaInventoryRepository);
const createInventoryController = new CreateInventoryController(createInventory);

export { createInventory, createInventoryController }