import { FindAllInventoriesController } from "@infra/http/controller/find-all-inventories-controller";
import { PrismaInventoryRepository } from "@infra/repositories/prisma/prisma-inventory-repository";
import { FindAllInventories } from "./find-all-inventories";

const prismaInventoryRepository = new PrismaInventoryRepository();
const findAllInventories = new FindAllInventories(prismaInventoryRepository);
const findAllInventoriesController = new FindAllInventoriesController(findAllInventories);

export { findAllInventories, findAllInventoriesController }